import ts from 'typescript';

import { AbstractCompilationMessage } from '../../compilation-context/messages/AbstractCompilationMessage';
import { verifyDecorators } from './verifyDecorators';
import { DecoratorTarget } from './DecoratorTarget';
import { isPropertyWithArrowFunction } from '../ts/predicates/isPropertyWithArrowFunction';
import { isExtendsCatContext } from '../ts/predicates/isExtendsCatContext';
import { isBeanFactoryMethod } from '../ts/predicates/isBeanFactoryMethod';
import { isBeanClassConstructor } from '../ts/predicates/isBeanClassConstructor';
import { isBeanFactoryArrowFunction } from '../ts/predicates/isBeanFactoryArrowFunction';
import { isBeanValueExpression } from '../ts/predicates/isBeanValueExpression';
import { DecoratorParent } from './DecoratorParent';
import { isDecoratorFromLibrary } from './isDecoratorFromLibrary';
import { DecoratorKind } from './DecoratorKind';
import { getDecorators } from '../ts/utils/getDecorators';

export const getDecoratorVerificationErrors = (node: ts.ClassDeclaration): AbstractCompilationMessage[] => {
  const errors: AbstractCompilationMessage[] = [];
  const classDecorators = getDecorators(node);

  const isCatContext = isExtendsCatContext(node);
  const isConfigurationClass = classDecorators.some(it => isDecoratorFromLibrary(it, DecoratorKind.Configuration));
  const isApplicationClass = classDecorators.some(it => isDecoratorFromLibrary(it, DecoratorKind.ClawjectApplication));
  const isComponentClass = classDecorators.some(it => isDecoratorFromLibrary(it, DecoratorKind.Component));

  if (isCatContext) {
    errors.push(...verifyDecorators(node, DecoratorTarget.CatContextClass, null));
  } else if (isConfigurationClass) {
    errors.push(...verifyDecorators(node, DecoratorTarget.ConfigurationClass, null));
  } else if (isApplicationClass) {
    errors.push(...verifyDecorators(node, DecoratorTarget.ApplicationClass, null));
  } else {
    errors.push(...verifyDecorators(node, DecoratorTarget.Class, null));
  }

  let decoratorParent: DecoratorParent;

  if (isCatContext) {
    decoratorParent = DecoratorParent.CatContextClass;
  } else if (isConfigurationClass) {
    decoratorParent = DecoratorParent.ConfigurationClass;
  } else if (isApplicationClass) {
    decoratorParent = DecoratorParent.ApplicationClass;
  } else if (isComponentClass) {
    decoratorParent = DecoratorParent.ComponentClass;
  } else {
    decoratorParent = DecoratorParent.AnyClass;
  }

  node.members.forEach(it => {
    if (isBeanFactoryMethod(it) || isBeanClassConstructor(it) || isBeanFactoryArrowFunction(it) || isBeanValueExpression(it)) {
      errors.push(...verifyDecorators(it, DecoratorTarget.Bean, decoratorParent));
      return;
    }

    if (ts.isMethodDeclaration(it) || isPropertyWithArrowFunction(it)) {
      errors.push(...verifyDecorators(it, DecoratorTarget.ClassFunction, decoratorParent));
    } else if (ts.isPropertyDeclaration(it)) {
      errors.push(...verifyDecorators(it, DecoratorTarget.ClassProperty, decoratorParent));
    }
  });

  return errors;
};