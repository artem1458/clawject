import { ApplicationConfigurationFactory } from './ApplicationConfigurationFactory';
import { RuntimeApplicationMetadata } from '../metadata/RuntimeApplicationMetadata';
import { ApplicationBean } from './ApplicationBean';
import { BeanIdProvider } from './BeanIdProvider';
import { BeanKind } from '../../compile-time/core/bean/BeanKind';
import { BeanConstructorFactory } from '../api/decorators/index';
import { ObjectFactoryImpl } from '../ObjectFactoryImpl';
import { LifecycleKind } from '../types/LifecycleKind';
import { MetadataStorage } from '../metadata/MetadataStorage';
import { ClassConstructor } from '../api/ClassConstructor';
import { ApplicationBeanDependency } from './ApplicationBeanDependency';
import { ApplicationBeanFinder } from './ApplicationBeanFinder';
import { MaybeAsync } from '../types/MaybeAsync';
import { Utils } from '../Utils';
import { RuntimeErrors } from '../api/RuntimeErrors';
import { Scope } from '../api/Scope';
import { InternalScopeRegister } from '../scope/InternalScopeRegister';
import { DependencyInjectionValue } from './DependencyInjectionValue';

export class ApplicationBeanFactory {
  exposedBeanNameToApplicationBeanDependency = new Map<string, ApplicationBeanDependency>();
  applicationBeans: ApplicationBean[] = [];
  configurationIndexToBeanClassPropertyToApplicationBean = new Map<number, Map<string, ApplicationBean>>();
  applicationBeanFinder = new ApplicationBeanFinder(this.configurationIndexToBeanClassPropertyToApplicationBean);
  scopeToScopedApplicationBeans = new Map<Scope, ApplicationBean[]>();

  constructor(
    private readonly applicationConfigurationFactory: ApplicationConfigurationFactory,
  ) {
  }

  async init(applicationMetadata: RuntimeApplicationMetadata): Promise<void> {
    await this.createApplicationBeans(applicationMetadata);
    this.fillExposedBeans(applicationMetadata);
    await this.initBeans();
  }

  async postInit(): Promise<void> {
    const singletonScope = InternalScopeRegister.getScope('singleton');
    await this.initScopedBeans(singletonScope);

    const lifecycleInit = this.applicationBeans.map(async (applicationBean) => {
      if (applicationBean.isLifecycleFunction) {
        if (applicationBean.parentConfiguration.metadata.lifecycle[LifecycleKind.POST_CONSTRUCT].includes(applicationBean.beanClassProperty)) {
          await applicationBean.getInjectionValue();
        }
      }
    });

    await Promise.all(lifecycleInit);
  }

  async close(): Promise<void> {
    await Promise.all(this.applicationBeans.map(async (applicationBean) => {
      if (applicationBean.isLifecycleFunction) {
        if (applicationBean.parentConfiguration.metadata.lifecycle[LifecycleKind.PRE_DESTROY].includes(applicationBean.beanClassProperty)) {
          await applicationBean.getInjectionValue();
        }
      }
    }));

    await Promise.all(this.applicationBeans.map(bean => {
      if (bean.isLifecycleFunction) {
        return;
      }

      const beanScope = bean.getScope();
      const removedScopedObject = beanScope.remove(bean.name);

      if (removedScopedObject === null) {
        return;
      }

      if (Utils.isPromise(removedScopedObject)) {
        return removedScopedObject.then((resolvedObject) => {
          this.onLifecycle(resolvedObject, LifecycleKind.PRE_DESTROY);
        });
      } else {
        return this.onLifecycle(removedScopedObject, LifecycleKind.PRE_DESTROY);
      }
    }));
  }

  async getExposedBean(beanName: string): Promise<any> {
    const exposedBeans = Utils.getValueSafe(this.exposedBeanNameToApplicationBeanDependency, beanName);

    if (exposedBeans === Utils.EMPTY_VALUE) {
      throw new RuntimeErrors.ExposedBeanNotFoundError(`No exposed bean found by exposed name: ${beanName}`);
    }

    const value = await exposedBeans.getValue();

    return value.value;
  }

  async getExposedBeans(): Promise<Record<string, any>> {
    const data = Promise.all(
      Array.from(this.exposedBeanNameToApplicationBeanDependency.entries())
        .map(async ([beanName, exposedBeans]) =>
          [beanName, (await exposedBeans.getValue()).value],
        ),
    );

    return Object.fromEntries(await data);
  }

  private async createApplicationBeans(applicationMetadata: RuntimeApplicationMetadata): Promise<void> {
    const resultPromise = this.applicationConfigurationFactory.mapConfigurations(async (applicationConfiguration) => {
      const beanDependenciesMetadataByConfiguration = applicationMetadata.beanDependenciesMetadata[applicationConfiguration.index];

      if (!beanDependenciesMetadataByConfiguration) {
        throw new RuntimeErrors.CorruptedMetadataError('No bean dependencies metadata found');
      }

      const configurationIndexToBeanClassPropertyToApplicationBean = new Map<string, ApplicationBean>();
      this.configurationIndexToBeanClassPropertyToApplicationBean.set(applicationConfiguration.index, configurationIndexToBeanClassPropertyToApplicationBean);

      const beanNameToDependenciesMetadata = new Map<string, ApplicationBeanDependency[]>(Object.values(
        beanDependenciesMetadataByConfiguration.map(it => {
          const applicationBeanDependencies = it.dependencies
            .map(it => new ApplicationBeanDependency(it, this.applicationBeanFinder));

          return [it.classPropertyName, applicationBeanDependencies];
        }),
      ));

      const initPromises = Object.entries(applicationConfiguration.metadata.beans).map(async ([beanClassProperty, beanMetadata]) => {
        const beanDependenciesMetadata = beanNameToDependenciesMetadata.get(beanClassProperty) ?? null;
        let beanClassConstructor: ClassConstructor<any> | null = null;

        if (beanMetadata.kind === BeanKind.CLASS_CONSTRUCTOR) {
          const classProperty = applicationConfiguration.instance[beanClassProperty] as MaybeAsync<BeanConstructorFactory<any, any>>;

          if (Utils.isPromise(classProperty)) {
            const resolvedClassProperty = await classProperty;
            beanClassConstructor = resolvedClassProperty.constructor;
          } else {
            beanClassConstructor = classProperty.constructor;
          }
        }

        const applicationBean = new ApplicationBean(
          BeanIdProvider.getAndInc(),
          applicationConfiguration,
          beanClassProperty,
          beanMetadata,
          beanDependenciesMetadata,
          beanClassConstructor,
        );
        configurationIndexToBeanClassPropertyToApplicationBean.set(beanClassProperty, applicationBean);
        this.applicationBeans.push(applicationBean);

        if (!applicationBean.isLifecycleFunction) {
          const scope = applicationBean.getScope();
          const scopedBeans = this.scopeToScopedApplicationBeans.get(scope) ?? [];

          if (!this.scopeToScopedApplicationBeans.has(scope)) {
            this.scopeToScopedApplicationBeans.set(scope, scopedBeans);
          }

          scopedBeans.push(applicationBean);
        }
      });

      await Promise.all(initPromises);
    });

    await Promise.all(resultPromise);
  }

  async initScopedBeans(scope: Scope): Promise<void> {
    const scopedBeans = this.scopeToScopedApplicationBeans.get(scope) ?? [];

    await Promise.all(scopedBeans.map(async it => {
      if (it.isLifecycleFunction) {
        return;
      }

      if (it.lazy) {
        return;
      }

      return it.getScopedBeanValue();
    }));
  }

  private fillExposedBeans(applicationMetadata: RuntimeApplicationMetadata): void {
    applicationMetadata.exposedBeansMetadata.forEach((exposedBeanMetadata) => {
      this.exposedBeanNameToApplicationBeanDependency.set(exposedBeanMetadata.qualifiedName, new ApplicationBeanDependency(exposedBeanMetadata.metadata, this.applicationBeanFinder));
    });
  }

  private async initBeans(): Promise<void> {
    await Promise.all(this.applicationBeans.map(async (applicationBean) => {
      const factory = await this.getBeanFactoryFunction(applicationBean);

      const objectFactory = new ObjectFactoryImpl(() => {
        const dependencies = applicationBean.dependencies?.map(it => it.getValue()) ?? [];

        return Promise.all(dependencies).then((resolvedDependencies) => {
          return this.createBeanInstance(applicationBean, factory, resolvedDependencies);
        });
      });

      applicationBean.init(objectFactory);
    }));
  }

  private createBeanInstance(applicationBean: ApplicationBean, factory: (...args: any[]) => any, dependencies: DependencyInjectionValue[]): any {
    const result = factory(...dependencies.map(it => it.value));

    if (Utils.isPromise(result)) {
      return result.then((instance) => {
        this.registerDestructionCallbackIfNeeded(applicationBean, instance);
        this.onLifecycle(instance, LifecycleKind.POST_CONSTRUCT);
        return instance;
      });
    }

    this.registerDestructionCallbackIfNeeded(applicationBean, result);
    this.onLifecycle(result, LifecycleKind.POST_CONSTRUCT);

    return result;
  }

  private getBeanFactoryFunction(applicationBean: ApplicationBean): MaybeAsync<(...args: any[]) => any> {
    const configurationInstance = applicationBean.parentConfiguration.instance;

    switch (applicationBean.beanMetadata.kind) {
    case BeanKind.FACTORY_METHOD:
    case BeanKind.LIFECYCLE_METHOD:
      return configurationInstance[applicationBean.beanClassProperty].bind(configurationInstance);
    case BeanKind.CLASS_CONSTRUCTOR: {
      const classPropertyValue = configurationInstance[applicationBean.beanClassProperty] as MaybeAsync<BeanConstructorFactory<any, any>>;

      if (Utils.isPromise(classPropertyValue)) {
        return classPropertyValue.then(it => it.factory);
      }

      return classPropertyValue.factory;
    }
    case BeanKind.FACTORY_ARROW_FUNCTION:
    case BeanKind.LIFECYCLE_ARROW_FUNCTION:
      return configurationInstance[applicationBean.beanClassProperty];
    case BeanKind.VALUE_EXPRESSION:
      return () => configurationInstance[applicationBean.beanClassProperty];
    }
  }

  private registerDestructionCallbackIfNeeded(applicationBean: ApplicationBean, instance: any): void {
    if (applicationBean.isLifecycleFunction) {
      return;
    }

    const componentMetadata = MetadataStorage.getComponentMetadataByClassInstance(instance);
    const hasLifecyclePreDestroy = componentMetadata !== null && componentMetadata.lifecycle.PRE_DESTROY.length > 0;

    if (hasLifecyclePreDestroy) {
      applicationBean.getScope().registerDestructionCallback(applicationBean.name, () => {
        this.onLifecycle(instance, LifecycleKind.PRE_DESTROY);
      });
    }
  }

  private onLifecycle(beanInstance: any, lifecycleKind: LifecycleKind): void {
    MetadataStorage.getComponentMetadataByClassInstance(beanInstance)?.lifecycle[lifecycleKind].forEach(methodName => {
      beanInstance[methodName]();
    });
  }
}
