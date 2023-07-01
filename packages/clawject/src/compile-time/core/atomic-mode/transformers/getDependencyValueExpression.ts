import { Dependency } from '../../dependency/Dependency';
import ts, { factory } from 'typescript';
import { getBeanAccessExpression } from './getBeanAccessExpression';
import { InternalElementKind, InternalsAccessBuilder } from '../../internals-access/InternalsAccessBuilder';

export const getDependencyValueExpression = (dependency: Dependency): ts.Expression | undefined => {
    const qualifiedBean = dependency.qualifiedBean;
    const qualifiedBeans = dependency.qualifiedBeans;

    if (qualifiedBeans === null) {
        if (qualifiedBean === null) {
            return undefined;
        }

        return getBeanAccessExpression(qualifiedBean);
    }

    if (dependency.diType.isVoidUndefinedPlainUnionIntersection) {
        return factory.createIdentifier('undefined');
    }

    if (dependency.diType.isNull) {
        return factory.createNull();
    }

    if (dependency.diType.isArray) {
        const callExpressionsForBeans = qualifiedBeans.map(qualifiedBean => {
            return getBeanAccessExpression(qualifiedBean);
        });

        return factory.createArrayLiteralExpression(
            callExpressionsForBeans,
            false
        );
    }

    if (dependency.diType.isSet) {
        const callExpressionsForBeans = qualifiedBeans.map(qualifiedBean => {
            return getBeanAccessExpression(qualifiedBean);
        });

        return factory.createCallExpression(
            factory.createPropertyAccessExpression(
                InternalsAccessBuilder.internalPropertyAccessExpression(InternalElementKind.ContextManager),
                factory.createIdentifier('createSet')
            ),
            undefined,
            [factory.createArrayLiteralExpression(
                callExpressionsForBeans,
                false
            )]
        );
    }

    if (dependency.diType.isMapStringToAny) {
        const callExpressionsForBeans = qualifiedBeans.map(qualifiedBean => {
            return factory.createArrayLiteralExpression(
                [
                    factory.createStringLiteral(qualifiedBean.fullName),
                    getBeanAccessExpression(qualifiedBean)
                ],
                false
            );
        });

        return factory.createCallExpression(
            factory.createPropertyAccessExpression(
                InternalsAccessBuilder.internalPropertyAccessExpression(InternalElementKind.ContextManager),
                factory.createIdentifier('createMap')
            ),
            undefined,
            [factory.createArrayLiteralExpression(
                callExpressionsForBeans,
                false
            )]
        );
    }

    return undefined;
};