import ts from 'typescript';
import { DecoratorKind, DecoratorKinds } from './DecoratorKind';
import { getDecoratorsOnly } from '../ts/utils/getDecoratorsOnly';
import { isDecoratorFromLibrary } from './isDecoratorFromLibrary';

export const getDecoratorsMap = (node: ts.Node): Map<DecoratorKind, ts.Decorator[]> => {
  const resultMap = new Map<DecoratorKind, ts.Decorator[]>();
  const decorators = getDecoratorsOnly(node);

  DecoratorKinds.forEach(decoratorKind => {
    decorators.forEach(decorator => {
      if (isDecoratorFromLibrary(decorator, decoratorKind)) {
        const resolvedDecorators = resultMap.get(decoratorKind) ?? [];
        resultMap.set(decoratorKind, resolvedDecorators);

        resolvedDecorators.push(decorator);
      }
    });
  });

  return resultMap;
};
