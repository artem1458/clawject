import { ClassConstructor } from './ClassConstructor';
import { RuntimeErrors } from './errors';
import { GITHUB_REPO_LINK } from './constants';

export class ErrorBuilder {
  static beanNotFound(contextName: string | null, beanName: string): RuntimeErrors.BeanNotFoundError {
    return new RuntimeErrors.BeanNotFoundError(`Bean '${beanName}' is not found in context '${this.getContextName(contextName)}'`);
  }

  static noClassMetadataFoundError(clazz: ClassConstructor<any>): RuntimeErrors.NoClassMetadataFoundError {
    const error = new RuntimeErrors.NoClassMetadataFoundError('No class metadata found, most likely this class was not transformed because of misconfiguration of \'clawject\'');
    Object.defineProperty(error, 'class', clazz);

    return error;
  }

  static noInitializedContextFoundError(contextName: string | null, contextKey: any): RuntimeErrors.NoInitializedContextFoundError {
    return new RuntimeErrors.NoInitializedContextFoundError(`Context '${this.getContextName(contextName)}' and key ${this.contextKeyToString(contextKey)} was not initialized`);
  }

  static usageWithoutConfiguredDI(cause: string = 'DI'): RuntimeErrors.UsageWithoutConfiguredDIError {
    return new RuntimeErrors.UsageWithoutConfiguredDIError(`You are trying to use ${cause} without without proper 'clawject' configuration or in wrong place, please check the documentation ${GITHUB_REPO_LINK}`);
  }

  static illegalAccess(cause: string): RuntimeErrors.IllegalAccessError {
    return new RuntimeErrors.IllegalAccessError(`Illegal access to ${cause}, please check the documentation ${GITHUB_REPO_LINK}`);
  }

  static noContextMemberFactoryFound(contextName: string | null, name: string): Error {
    return new RuntimeErrors.NoContextMemberFactoryFoundError(`No context member factory found for member '${name}' in context '${this.getContextName(contextName)}'`);
  }

  static contextKeyToString(contextKey: any): string {
    if (contextKey === undefined) {
      return 'undefined\'';
    }

    if (contextKey === null) {
      return '\'null\'';
    }

    let stringifiedKey: string;

    try {
      stringifiedKey = JSON.stringify(contextKey);
    } catch (e) {
      try {
        stringifiedKey = `${contextKey}`;
      } catch (e) {
        stringifiedKey = '\'NOT_SERIALIZABLE_KEY\'';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (global.Symbol && typeof contextKey === 'symbol') {
          if ((contextKey as Symbol).description) {
            stringifiedKey = `'Symbol(${(contextKey as Symbol).description})'`;
          } else {
            stringifiedKey = '\'SYMBOL_WITHOUT_DESCRIPTION\'';
          }
        }
      }
    }

    return stringifiedKey;
  }

  private static getContextName(contextName: string | null): string {
    return contextName ?? '<anonymous>';
  }
}
