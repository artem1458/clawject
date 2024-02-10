import { Configuration } from '../configuration/Configuration';
import { Entity } from '../Entity';
import ts from 'typescript';
import { getCompilationContext } from '../../../transformer/getCompilationContext';
import { GenericError } from '../../compilation-context/messages/errors/GenericError';
import { DependencyGraph } from '../dependency-graph/DependencyGraph';
import { Bean } from '../bean/Bean';
import { MaybeResolvedDependency } from '../dependency-resolver/MaybeResolvedDependency';

export class Application extends Entity<ts.ClassDeclaration> {
  constructor(
    public readonly rootConfiguration: Configuration
  ) {
    super();
  }

  declare id: string;
  declare fileName: string;
  dependencyGraph = new DependencyGraph();

  resolvedBeanDependencies = new Map<Bean, MaybeResolvedDependency[]>();
  registerResolvedDependency(bean: Bean, resolvedDependency: MaybeResolvedDependency): void {
    const resolvedDependencies = this.resolvedBeanDependencies.get(bean);
    if (!resolvedDependencies) {
      this.resolvedBeanDependencies.set(bean, [resolvedDependency]);
    } else {
      resolvedDependencies.push(resolvedDependency);
    }
  }

  private _beans: Set<Bean> | null = null;
  get beans(): Set<Bean> {
    if (this._beans === null) {
      const beans = new Set<Bean>();
      this._beans = beans;

      this.forEachConfiguration(configuration => {
        configuration.beanRegister.elements.forEach(bean => {
          beans.add(bean);
        });
      });
      return beans;
    } else {
      return this._beans;
    }
  }

  exportedBeans = new Map<string, MaybeResolvedDependency>();

  private configurationToIndex = new Map<Configuration, number>();
  getConfigurationIndexUnsafe(configuration: Configuration): number {
    const index = this.configurationToIndex.get(configuration);

    if (index === undefined) {
      throw new Error('No index found for configuration.');
    }

    return index;
  }

  forEachConfiguration(callback: (configuration: Configuration, configurationIndex: number) => void): void {
    let lastConfigurationIndex = 0;
    const visited = new Set<Configuration>();
    const stack: Configuration[] = [this.rootConfiguration];

    while (stack.length > 0) {
      const configuration = stack.pop()!;
      this.configurationToIndex.set(configuration, lastConfigurationIndex++);
      visited.add(configuration);
      const elements = Array.from(configuration.importRegister.elements);

      for (let i = elements.length - 1; i >= 0; i--) {
        const resolvedConfiguration = elements[i].resolvedConfiguration;

        if (resolvedConfiguration === null) {
          getCompilationContext().report(new GenericError(
            'No resolved configuration found in import.',
            this.node,
            null,
          ));
          return;
        }

        if (!visited.has(resolvedConfiguration)) {
          stack.push(resolvedConfiguration);
        }
      }

      callback(configuration, this.configurationToIndex.get(configuration)!);
    }
  }
}
