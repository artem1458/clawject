import { MessageCode } from '../MessageCode';
import { MessageType } from '../MessageType';
import ts from 'typescript';
import { getNodeDetails, NodeDetails } from '../../../core/ts/utils/getNodeDetails';
import { AbstractCompilationMessage } from '../AbstractCompilationMessage';
import { Bean } from '../../../core/bean/Bean';
import { BeanKind } from '../../../core/bean/BeanKind';
import { mapAndFilter } from '../../../core/utils/mapAndFilter';
import { isNotEmpty } from '../../../core/utils/isNotEmpty';

export class BeanCandidateNotFoundError extends AbstractCompilationMessage {
  public code = MessageCode.CT5;
  public type = MessageType.ERROR;
  public description = 'Bean candidate not found.';
  public candidatesByName: NodeDetails[];
  public candidatesByType: NodeDetails[];
  public beanDeclarationNodeDetails: NodeDetails | null;
  public beanKind: BeanKind | null;

  constructor(
    details: string | null,
    place: ts.Node,
    relatedBean: Bean | null,
    candidatesByName: Bean[],
    candidatesByType: Bean[],
  ) {
    super(details, place, relatedBean?.parentConfiguration ?? null);

    this.candidatesByName = mapAndFilter(candidatesByName, it => this.getNodeDetails(it), isNotEmpty);
    this.candidatesByType = mapAndFilter(candidatesByType, it => this.getNodeDetails(it), isNotEmpty);
    this.beanDeclarationNodeDetails = relatedBean === null ? null : getNodeDetails(relatedBean.node);
    this.beanKind = relatedBean?.kind ?? null;
  }

  private getNodeDetails(bean: Bean | null): NodeDetails | null {
    if (bean === null) {
      return null;
    }

    const nodeDetails = getNodeDetails(bean.node);

    nodeDetails.declarationName = bean.fullName;

    return nodeDetails;
  }
}
