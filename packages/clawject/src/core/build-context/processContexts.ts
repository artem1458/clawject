import ts, { factory } from 'typescript';
import { isExtendsClassFromLibrary } from '../ts/predicates/isExtendsClassFromLibrary';
import { CompilationContext } from '../../compilation-context/CompilationContext';
import { registerBeans } from '../bean/registerBeans';
import {
    checkIsAllBeansRegisteredInContextAndFillBeanRequierness
} from '../bean/checkIsAllBeansRegisteredInContextAndFillBeanRequierness';
import { registerBeanDependencies } from '../bean-dependency/registerBeanDependencies';
import { reportAboutCyclicDependencies } from '../report-cyclic-dependencies/reportAboutCyclicDependencies';
import { enrichWithAdditionalProperties } from './transformers/enrichWithAdditionalProperties';
import { InternalCatContext } from '../../external/InternalCatContext';
import { IncorrectNameError } from '../../compilation-context/messages/errors/IncorrectNameError';
import {
    INTERNAL_CAT_CONTEXT_IMPORT,
    replaceExtendingFromCatContext
} from './transformers/replaceExtendingFromCatContext';
import upath from 'upath';
import { getImportPathToExternalDirectory } from './utils/getImportPathToExternalDirectory';
import { processMembers } from './transformers/processMembers';
import { ConfigurationRepository } from '../configuration/ConfigurationRepository';
import { buildDependencyGraphAndFillQualifiedBeans } from '../dependencies/buildDependencyGraphAndFillQualifiedBeans';
import { BeanKind } from '../bean/BeanKind';

const ALLOWED_BEAN_KINDS = new Set([
    BeanKind.METHOD,
    BeanKind.PROPERTY,
    BeanKind.ARROW_FUNCTION,
    BeanKind.EXPRESSION,
    BeanKind.EMBEDDED,
    BeanKind.LIFECYCLE_METHOD,
    BeanKind.LIFECYCLE_ARROW_FUNCTION,
]);


//TODO rename to processAtomicMode
export const processContexts = (compilationContext: CompilationContext, tsContext: ts.TransformationContext, sourceFile: ts.SourceFile): ts.SourceFile => {
    //Skipping declaration files
    if (sourceFile.isDeclarationFile) {
        return sourceFile;
    }

    let shouldAddImports = false;

    const visitor = (node: ts.Node): ts.Node => {
        //Registering contexts
        if (!isExtendsClassFromLibrary(node, 'CatContext')) {
            return ts.visitEachChild(node, visitor, tsContext);
        }

        shouldAddImports = true;

        const context = ConfigurationRepository.register(node, ALLOWED_BEAN_KINDS);

        const restrictedClassMembersByName = node.members
            .filter(it => InternalCatContext.reservedNames.has(it.name?.getText() ?? ''));

        if (restrictedClassMembersByName.length !== 0) {
            restrictedClassMembersByName.forEach(it => {
                compilationContext.report(new IncorrectNameError(
                    `"${it.name?.getText()}" name is reserved for the di-container.`,
                    it,
                    context.node,
                ));
            });
            return ts.visitEachChild(node, visitor, tsContext);
        }

        //Processing beans
        registerBeans(context);
        checkIsAllBeansRegisteredInContextAndFillBeanRequierness(context);
        registerBeanDependencies(context);
        buildDependencyGraphAndFillQualifiedBeans(context);
        reportAboutCyclicDependencies(context);

        const enrichedWithAdditionalProperties = enrichWithAdditionalProperties(node, context);
        const replacedExtendingFromCatContext = replaceExtendingFromCatContext(enrichedWithAdditionalProperties);
        const withProcessedMembers = processMembers(replacedExtendingFromCatContext, context);

        return withProcessedMembers;
    };

    const transformedFile = ts.visitNode(sourceFile, visitor);

    const updatedStatements = Array.from(transformedFile.statements);

    if (shouldAddImports) {
        const pathForInternalCatContext = upath.join(
            getImportPathToExternalDirectory(),
            'InternalCatContext',
        );
        const internalCatContextImport = factory.createImportDeclaration(
            undefined,
            factory.createImportClause(
                false,
                undefined,
                factory.createNamespaceImport(
                    factory.createIdentifier(INTERNAL_CAT_CONTEXT_IMPORT)
                )
            ),
            factory.createStringLiteral(pathForInternalCatContext)
        );

        updatedStatements.unshift(internalCatContextImport);
    }

    return ts.factory.updateSourceFile(
        sourceFile,
        updatedStatements,
        sourceFile.isDeclarationFile,
        sourceFile.referencedFiles,
        sourceFile.typeReferenceDirectives,
        sourceFile.hasNoDefaultLib,
        sourceFile.libReferenceDirectives,
    );
};
