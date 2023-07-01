import ts from 'typescript';
import { DIType } from '../type-system/DIType';
import { Bean } from '../bean/Bean';
import { BaseElement } from '../BaseElement';

export class Dependency extends BaseElement<ts.ParameterDeclaration> {
    declare parameterName: string;
    declare diType: DIType;

    qualifiedBean: Bean | null = null;
    /**
     * For array, map, set
     * */
    qualifiedBeans: Bean[] | null = null;
}