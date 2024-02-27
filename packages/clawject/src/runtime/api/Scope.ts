import { ObjectFactory, ObjectFactoryResult } from './ObjectFactory';
import { ErrorBuilder } from '../ErrorBuilder';

/**
 * The interface that represents a scope.
 * You should implement it if you want to create your own custom scope.
 *
 * @docs https://clawject.com/docs/advanced-concepts/custom-scopes
 *
 * @public
 */
export interface Scope {

  /**
   * This method that is called if application context contains beans with this scope.
   * It is called before any bean with this scope is created.
   * If you have more than one application context, this method will be called for each of them.
   *
   * It receives callback that should be called when scope is started, e.g., when request is started.
   * Callback should be called only once at the beginning of the scope.
   * Callback should be awaited if scope can store asynchronous beans.
   *
   * Callback is singleton in the `context of a single application context`.
   */
  registerScopeBeginCallback(callback: () => Promise<void>): void;

  /**
   * This method is called before the application context is destroyed.
   *
   * It should remove this callback from the list of callbacks.
   *
   * Callback is singleton in the `context of a single application context`.
   */
  removeScopeBeginCallback(callback: () => Promise<void>): void;

  /**
   * Return the object with the given name from the underlying scope,
   * and {@link ObjectFactory.getObject creating it}
   * if not found in the underlying storage mechanism.
   *
   * If ObjectFactory is a Promise, it should return a promise with the object,
   * after promise is resolved -
   * should store the object in the underlying storage mechanism and return for the next calls.
   *
   * @param name - the name of the object to retrieve, always unique, auto-generated by the container
   * @param objectFactory - the {@link ObjectFactory} instance to use to create the scoped
   *
   * @returns Promise<ObjectFactoryResult> | ObjectFactoryResult - the desired object (never: `null` or `undefined`)
   */
  get(name: string, objectFactory: ObjectFactory): Promise<ObjectFactoryResult> | ObjectFactoryResult;

  /**
   * Remove the object with the given `name` from the underlying scope.
   * <p>Returns `null` if no object was found, otherwise
   * returns the removed {@link ObjectFactoryResult object}.
   * <p>Note that an implementation should also remove a registered destruction
   * callback for the specified object, if any.
   * It does, however, <i>not</i>
   * need to <i>execute</i> a registered destruction callback in this case,
   * since the caller will destroy the object (if appropriate).
   *
   * <b>Note: This is an optional operation.</b>
   *
   * @param name - the name of the object to remove, always unique, auto-generated by the container
   * @returns Removed - {@link ObjectFactoryResult object}, or `null` if no object was present
   * @see #registerDestructionCallback
   */
  remove(name: string): ObjectFactoryResult | null;

  /**
   * Register a callback to be executed on destruction of the specified
   * object in the scope (or at destruction of the entire scope, if the
   * scope does not destroy individual objects but rather only terminates
   * in its entirety).
   *
   * <b>Note:</b> This is an optional operation.
   * This method will only
   * be called for scoped beans with actual destruction configuration
   * (methods that are decorated with \@PreDestroy).
   * Implementations should do their best to execute a given callback
   * at the appropriate time.
   * If such a callback is not supported by the
   * underlying runtime environment at all, the callback <i>must be
   * ignored and a corresponding warning should be logged</i>.
   *
   * <b>Note:</b> that 'destruction' refers to automatic destruction of
   * the object as part of the scope's own lifecycle, not to the individual
   * scoped object having been explicitly removed by the application.
   * If a scoped object gets removed via this facade's {@link Scope#remove remove}
   * method, any registered destruction callback should be removed as well,
   * assuming that the removed object will be reused or manually destroyed.
   *
   * <b>Note:</b> This method could be called more than once,
   * so it should just re-write old callback with new one by given name.
   *
   * @param name - the name of the object to execute the destruction callback for,
   * name is always unique, auto-generated by the container
   * @param callback - the destruction callback to be executed.
   * @see PreDestroy
   */
  registerDestructionCallback(name: string, callback: () => void): void;

  /**
   * Indicates whether a proxy should be injected or the raw object.
   *
   * In default scopes (singleton, transient) `false` value is returned from this method,
   * but if you want to implement your own scope (for example - http-request scope),
   * most likely you will need to return `true` from this method.
   *
   * Be careful with primitive values because they are not supported by JavaScript Proxies (at least for now),
   * and if bean with scope that returns `true` from this method will be created -
   * error will be thrown {@link RuntimeErrors.CouldNotBeProxiedError}.
   *
   * @returns boolean `true` if a proxy should be injected, `false` otherwise.
   */
  useProxy?(): boolean;
}

/** @public */
export type ScopeTarget = PropertyDecorator & MethodDecorator & ClassDecorator;
/** @public */
export type ScopeValue = 'singleton' | 'transient' | string | number;
/**
 * Specifies the scope of Bean or Beans when applied on {@link Configuration @Configuration} level.
 *
 * @docs https://clawject.com/docs/fundamentals/scope
 *
 * @public
 */
export const Scope = (scope: ScopeValue): ScopeTarget => {
  throw ErrorBuilder.usageWithoutConfiguredDI('@Scope');
};
