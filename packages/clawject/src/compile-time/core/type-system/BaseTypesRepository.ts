import ts from 'typescript';
import { DIType } from './DIType';
import { CONSTANTS } from '../../../constants';
import { DITypeBuilder } from './DITypeBuilder';
import { ___TypeReferenceTable___ } from '../../../runtime/___TypeReferenceTable___';
import { getCompilationContext } from '../../../transformer/getCompilationContext';

type BaseTypes = Record<keyof ___TypeReferenceTable___, DIType> & { runClawjectApplication: DIType };

export class BaseTypesRepository {
  private static baseTypes: BaseTypes | null = null;

  static clear(): void {
    this.baseTypes = null;
  }

  static init(): void {
    if (this.baseTypes !== null) {
      return;
    }

    const compilationContext = getCompilationContext();

    const libraryDeclarationFile = compilationContext.program.getSourceFile(CONSTANTS.typeReferenceTablePath);

    if (!libraryDeclarationFile) {
      throw new Error(`${CONSTANTS.libraryName} library declaration file (${CONSTANTS.typeReferenceTablePath}) not found\n${JSON.stringify(compilationContext.program.getSourceFiles().map(it => it.fileName), null, 2)}\n`);
    }

    const typeTableDeclaration = libraryDeclarationFile.statements
      .find((it): it is ts.InterfaceDeclaration => ts.isInterfaceDeclaration(it) && it.name.getText() === '___TypeReferenceTable___');

    if (!typeTableDeclaration) {
      throw new Error(`${CONSTANTS.libraryName} type table declaration not found`);
    }

    const typesMap = typeTableDeclaration.members
      .reduce((acc, curr) => {
        acc[curr.name?.getText() ?? ''] = curr;

        return acc;
      }, {} as Record<keyof ___TypeReferenceTable___, ts.TypeElement>);

    this.baseTypes = {
      Array: DITypeBuilder.build(compilationContext.typeChecker.getTypeAtLocation(typesMap['Array'])),
      Set: DITypeBuilder.build(compilationContext.typeChecker.getTypeAtLocation(typesMap['Set'])),
      Map: DITypeBuilder.build(compilationContext.typeChecker.getTypeAtLocation(typesMap['Map'])),
      MapStringToAny: DITypeBuilder.build(compilationContext.typeChecker.getTypeAtLocation(typesMap['MapStringToAny'])),
      CatContext: DITypeBuilder.build(compilationContext.typeChecker.getTypeAtLocation(typesMap['CatContext'])),
      Promise: DITypeBuilder.build(compilationContext.typeChecker.getTypeAtLocation(typesMap['Promise'])),
      runClawjectApplication: DITypeBuilder.any(),
      // runClawjectApplication: DITypeBuilder.build(compilationContext.typeChecker.getTypeAtLocation(typesMap['runClawjectApplication'])),
    };
  }

  static getBaseTypes(): BaseTypes {
    if (this.baseTypes === null) {
      this.init();

      if (this.baseTypes === null) {
        throw new Error('Base types are not initialized');
      }
    }

    return this.baseTypes;
  }
}