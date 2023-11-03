import { ErrorBuilder } from '../ErrorBuilder';
import { ScopeRegister } from '../scope/ScopeRegister';
import { ObjectFactoryImpl } from '../object-factory/ObjectFactoryImpl';
import { Callback } from '../types/Callback';
import { LifecycleKind } from '../../compile-time/core/component-lifecycle/LifecycleKind';
import { ContextMetadata } from './ContextManager';
import { RuntimeBeanMetadata } from '../runtime-elements/RuntimeBeanMetadata';
import { getStaticRuntimeElementFromInstanceConstructor, StaticRuntimeElement } from '../runtime-elements/StaticRuntimeElement';
import { RuntimeElementFactories } from '../runtime-elements/RuntimeElementFactories';
import { Utils } from './Utils';
import { RuntimeErrors } from '../errors';

export class BeanFactory {
  private proxyRegister = new Map<string, any>();

  constructor(
    private id: number | null, // Null in application mode
    private configurationName: string,
    private beans: ContextMetadata['beans'],
    private contextScope: string,
    private factories: RuntimeElementFactories,
  ) {}

  public getPublicBean(name: string): any {
    const beanConfig = this.getBeanConfig(name);

    if (!beanConfig.public) {
      console.warn(`Bean ${name} is not defined in Context's interface. This Bean will not be checked for type matching with Context's interface at compile-time. Context: ${this.configurationName}`);
    }

    return this.getBean(name);
  }

  public getPublicBeans(): Record<string, any> {
    const result: Record<string, any> = {};

    Object.entries(this.beans).forEach(([beanName, beanConfig]) => {
      if (beanConfig.public) {
        result[beanName] = this.getBean(beanName);
      }
    });

    return result;
  }

  getAllBeans(): Map<string, any> {
    const result = new Map<string, any>();

    Object.keys(this.beans).forEach(beanName => {
      result.set(beanName, this.getBean(beanName));
    });

    return result;
  }

  getBean(name: string): any {
    const beanConfig = this.getBeanConfig(name);
    const scopeName = beanConfig.scope ?? this.contextScope;
    const scope = ScopeRegister.getScope(scopeName);
    const objectFactory = new ObjectFactoryImpl(() => {
      const elementFactory = this.getElementFactory(name);
      const instantiatedBean = elementFactory();

      this.onComponentLifecycle(instantiatedBean, LifecycleKind.POST_CONSTRUCT);

      return instantiatedBean;
    });

    const scopedBeanName = this.buildScopedBeanName(name);

    const useProxy = scope.useProxy?.() ?? true;

    const bean = useProxy
      ? this.getOrBuildBeanProxy(
        name,
        scopeName,
        () => scope.get(scopedBeanName, objectFactory),
      )
      : scope.get(scopedBeanName, objectFactory);

    const hasLifecyclePreDestroy = (getStaticRuntimeElementFromInstanceConstructor(
      bean, StaticRuntimeElement.COMPONENT_METADATA
    )?.lifecycle.PRE_DESTROY.length || 0) > 0;

    if (hasLifecyclePreDestroy) {
      scope.registerDestructionCallback(scopedBeanName, this.getBeanDestructionCallback(bean));
    }

    return bean;
  }

  destroyBean(name: string): void {
    const beanConfig = this.getBeanConfig(name);
    const scope = ScopeRegister.getScope(beanConfig.scope ?? this.contextScope);

    this.proxyRegister.delete(name);

    const removedInstance = scope.remove(this.buildScopedBeanName(name));

    if (removedInstance !== null) {
      const destructionCallback = this.getBeanDestructionCallback(removedInstance);
      destructionCallback();
    }
  }

  private getBeanDestructionCallback(instance: any): Callback {
    return (): void => this.onComponentLifecycle(instance, LifecycleKind.PRE_DESTROY);
  }

  private onComponentLifecycle(instance: any, lifecycleKind: LifecycleKind): void {
    if (!instance) {
      return;
    }

    const implicitComponentMetadata = getStaticRuntimeElementFromInstanceConstructor(
      instance,
      StaticRuntimeElement.COMPONENT_METADATA
    );

    if (!implicitComponentMetadata) {
      return;
    }

    implicitComponentMetadata.lifecycle[lifecycleKind].forEach(methodName => {
      instance[methodName]();
    });
  }

  private getBeanConfig(name: string): RuntimeBeanMetadata {
    const beanConfig = this.beans[name];

    if (!beanConfig) {
      throw ErrorBuilder.beanNotFound(this.configurationName, name);
    }

    return beanConfig;
  }

  private getElementFactory(name: string): () => any {
    const elementFactory = this.factories[name];

    if (!elementFactory) {
      throw ErrorBuilder.noElementFactoryFound(this.configurationName, name);
    }

    return elementFactory;
  }

  private buildScopedBeanName(name: string): string {
    if (this.id === null) {
      return name;
    }

    return `${this.id}_${name}`;
  }

  private getOrBuildBeanProxy(name: string, scopeName: string, scopeBeanGetter: () => any): any {
    let proxy = this.proxyRegister.get(name);

    const assertNotPrimitiveAndConstruct = () => {
      const bean = scopeBeanGetter();

      if (Utils.isObject(bean)) {
        return bean;
      }

      const msg =
        `Bean named "${bean}", with scope: "${scopeName}" - ` +
        'contains primitive value which could not be wrapped in Proxy, '+
        'ES standard allows only object proxies.' +
        'To solve this issue - you can wrap your primitive value in object.';

      throw new RuntimeErrors.PrimitiveCouldNotBeWrappedInProxyError(msg);
    };

    if (!proxy) {
      const proxyHandler: Required<ProxyHandler<any>> = {
        apply: (_: any, thisArg: any, argArray: any[]) => {
          return Reflect.apply(assertNotPrimitiveAndConstruct(), thisArg, argArray);
        },
        construct: (_: any, argArray: any[], newTarget: Function): object => {
          return Reflect.construct(assertNotPrimitiveAndConstruct(), argArray, newTarget);
        },
        defineProperty: (_: any, property: string | symbol, attributes: PropertyDescriptor): boolean => {
          return Reflect.defineProperty(assertNotPrimitiveAndConstruct(), property, attributes);
        },
        deleteProperty: (_: any, property: string | symbol): boolean => {
          return Reflect.deleteProperty(assertNotPrimitiveAndConstruct(), property);
        },
        get: (_: any, property: string | symbol, receiver: any) => {
          return Reflect.get(assertNotPrimitiveAndConstruct(), property, receiver);
        },
        getOwnPropertyDescriptor: (_: any, property: string | symbol): PropertyDescriptor | undefined => {
          return Reflect.getOwnPropertyDescriptor(assertNotPrimitiveAndConstruct(), property);
        },
        getPrototypeOf: (_: any): object | null => {
          return Reflect.getPrototypeOf(assertNotPrimitiveAndConstruct());
        },
        has: (_: any, property: string | symbol): boolean => {
          return Reflect.has(assertNotPrimitiveAndConstruct(), property);
        },
        isExtensible: (_: any): boolean => {
          return Reflect.isExtensible(assertNotPrimitiveAndConstruct());
        },
        ownKeys: (_: any): ArrayLike<string | symbol> => {
          return Reflect.ownKeys(assertNotPrimitiveAndConstruct());
        },
        preventExtensions: (_: any): boolean => {
          return Reflect.preventExtensions(assertNotPrimitiveAndConstruct());
        },
        set: (_: any, property: string | symbol, newValue: any, receiver: any): boolean => {
          return Reflect.set(assertNotPrimitiveAndConstruct(), property, newValue, receiver);
        },
        setPrototypeOf: (_: any, value: object | null): boolean => {
          return Reflect.setPrototypeOf(assertNotPrimitiveAndConstruct(), value);
        }
      };

      proxy = new Proxy({}, proxyHandler);
    }

    this.proxyRegister.set(name, proxy);

    return proxy;
  }
}