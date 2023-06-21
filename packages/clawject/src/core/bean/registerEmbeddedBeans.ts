import ts from 'typescript';
import { MissingTypeDefinitionError } from '../../compilation-context/messages/errors/MissingTypeDefinitionError';
import { IncorrectTypeDefinitionError } from '../../compilation-context/messages/errors/IncorrectTypeDefinitionError';
import { DITypeBuilder } from '../type-system/DITypeBuilder';
import { Bean } from './Bean';
import { BeanKind } from './BeanKind';
import { Configuration } from '../configuration/Configuration';
import { getCompilationContext } from '../../transformers/getCompilationContext';

export const registerEmbeddedBean = (
    configuration: Configuration,
    classElement: ts.PropertyDeclaration
): void => {
    const compilationContext = getCompilationContext();
    const typeChecker = compilationContext.typeChecker;
    const type = typeChecker.getTypeAtLocation(classElement);
    const diTypeRoot = DITypeBuilder.build(type);
    const typeSymbol = type.getSymbol();

    if (!typeSymbol) {
        //TODO add error
        compilationContext.report(new MissingTypeDefinitionError(
            null,
            classElement,
            configuration.node,
        ));
        return;
    }

    const declarations = typeSymbol.declarations ?? [];

    if (declarations.length === 0) {
        compilationContext.report(new MissingTypeDefinitionError(
            //TODO add error
            null,
            classElement,
            configuration.node,
        ));
        return;
    }

    if (declarations.length > 1) {
        compilationContext.report(new IncorrectTypeDefinitionError(
            //TODO add found declarations
            'Type of Embedded bean should be defined only once.',
            classElement.type ?? classElement,
            configuration.node,
        ));
        return;
    }

    const declaration = declarations[0];
    const declarationType = typeChecker.getTypeAtLocation(declaration);
    declarationType.getProperties().forEach(property => {
        const type = typeChecker.getTypeOfSymbolAtLocation(property, declaration);
        const diType = DITypeBuilder.build(type);

        const bean = new Bean({
            classMemberName: classElement.name.getText(),
            nestedProperty: property.name,
            diType: diType,
            node: classElement,
            kind: BeanKind.EMBEDDED,
        });
        configuration.beanRegister.register(bean);
    });

    const rootBean = new Bean({
        classMemberName: classElement.name.getText(),
        diType: diTypeRoot,
        node: classElement,
        kind: BeanKind.EMBEDDED,
    });
    configuration.beanRegister.register(rootBean);
};