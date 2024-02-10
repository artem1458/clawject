import ts from 'typescript';
import { getCompilationContext } from '../../transformer/getCompilationContext';
import { AbstractCompilationMessage, IRelatedConfigurationMetadata } from '../compilation-context/messages/AbstractCompilationMessage';
import { NodeDetails } from '../core/ts/utils/getNodeDetails';
import { CircularDependenciesError } from '../compilation-context/messages/errors/CircularDependenciesError';
import { CanNotRegisterBeanError } from '../compilation-context/messages/errors/CanNotRegisterBeanError';
import { BeanCandidateNotFoundError } from '../compilation-context/messages/errors/BeanCandidateNotFoundError';
import { BeanKind } from '../core/bean/BeanKind';
import { MissingBeansDeclarationError } from '../compilation-context/messages/errors/MissingBeansDeclarationError';
import { DuplicateNameError } from '../compilation-context/messages/errors/DuplicateNameError';
import { MessageType } from '../compilation-context/messages/MessageType';
import { TypeMismatchError } from '../compilation-context/messages/errors/TypeMismatchError';

const MESSAGES_WITHOUT_CONTEXT_DETAILS = [
  CircularDependenciesError,
  CanNotRegisterBeanError,
  MissingBeansDeclarationError,
  BeanCandidateNotFoundError,
  DuplicateNameError,
];

export class DiagnosticsBuilder {
  static getDiagnostics(fileName?: string): ts.Diagnostic[] {
    const messages = fileName ?
      getCompilationContext().getMessages(fileName)
      : getCompilationContext().getAllMessages();

    return messages
      .map(it => this.getFormattedDiagnostics(it));
  }

  private static getFormattedDiagnostics(message: AbstractCompilationMessage): ts.Diagnostic {
    const diagnosticCategory = this.getDiagnosticCategory(message);
    const diagnosticsCode = this.getDiagnosticCode(message);

    let messageDescription = message.description ?? '';
    let messageDetails = message.details ?? '';
    const nodeDetails: NodeDetails = message.place;
    const relatedInformation: ts.DiagnosticRelatedInformation[] = [];

    if (message instanceof CircularDependenciesError) {
      message.cycleMembers.slice(1).forEach(it => {
        relatedInformation.push({
          length: it.nodeDetails.length,
          file: this.getSourceFile(it.nodeDetails.filePath),
          start: it.nodeDetails.startOffset,
          code: diagnosticsCode,
          messageText: `'${it.beanName}' is declared here.`,
          category: this.getDiagnosticCategory(message),
        });
      });

      if (getCompilationContext().languageServiceMode) {
        const firstMember = message.cycleMembers[0];
        messageDetails = [...message.cycleMembers, firstMember].map(it => it.beanName)
          .join(' → ');
      } else {
        messageDetails = '\n' + message.cyclePresentation();
      }
    }

    if (message instanceof CanNotRegisterBeanError) {
      const causes: ts.DiagnosticRelatedInformation[] = message.missingCandidates.map(it => ({
        messageText: `Can not find Bean candidate for '${it.name}'.`,
        start: it.nodeDetails.startOffset,
        length: it.nodeDetails.length,
        code: diagnosticsCode,
        file: this.getSourceFile(it.nodeDetails.filePath),
        category: this.getDiagnosticCategory(message),
      }));

      relatedInformation.push(...causes);
    }

    if (message instanceof BeanCandidateNotFoundError) {
      messageDescription = '';

      const candidatesByType: ts.DiagnosticRelatedInformation[] = message.candidatesByType.map(it => ({
        messageText: `'${it.declarationName ?? '<anonymous>'}' matched by type.`,
        start: it.startOffset,
        length: it.length,
        code: diagnosticsCode,
        file: this.getSourceFile(it.filePath),
        category: this.getDiagnosticCategory(message),
      }));

      const candidatesByName: ts.DiagnosticRelatedInformation[] = message.candidatesByName.map(it => ({
        messageText: `'${it.declarationName ?? '<anonymous>'}' matched by name.`,
        start: it.startOffset,
        length: it.length,
        code: diagnosticsCode,
        file: this.getSourceFile(it.filePath),
        category: this.getDiagnosticCategory(message),
      }));

      relatedInformation.push(...candidatesByType, ...candidatesByName);

      if (message.beanKind === BeanKind.CLASS_CONSTRUCTOR && message.beanDeclarationNodeDetails !== null) {
        relatedInformation.push({
          messageText: `'${message.beanDeclarationNodeDetails.declarationName}' is declared here.`,
          start: message.beanDeclarationNodeDetails.startOffset,
          length: message.beanDeclarationNodeDetails.length,
          code: diagnosticsCode,
          file: this.getSourceFile(message.beanDeclarationNodeDetails?.filePath),
          category: this.getDiagnosticCategory(message),
        });
      }
    }

    if (message instanceof MissingBeansDeclarationError) {
      const missingElementsRelatedInformation: ts.DiagnosticRelatedInformation[] = message.missingElementsLocations.map(it => ({
        messageText: `'${it.name}' is declared here.`,
        start: it.nodeDetails.startOffset,
        length: it.nodeDetails.length,
        code: diagnosticsCode,
        file: this.getSourceFile(it.nodeDetails.filePath),
        category: this.getDiagnosticCategory(message),
      }));

      relatedInformation.push(...missingElementsRelatedInformation);
    }

    if (message instanceof DuplicateNameError) {
      const duplicateNamesRelatedInformation: ts.DiagnosticRelatedInformation[] = message.duplicateElements.map(it => ({
        messageText: `'${it.name}' is declared here.`,
        start: it.location.startOffset,
        length: it.location.length,
        code: diagnosticsCode,
        file: this.getSourceFile(it.location.filePath),
        category: this.getDiagnosticCategory(message),
      }));

      relatedInformation.push(...duplicateNamesRelatedInformation);
    }

    if (message instanceof TypeMismatchError) {
      const typeMismatchRelatedInformation: ts.DiagnosticRelatedInformation[] = message.mismatchElements.map(it => ({
        messageText: `'${it.name}' is declared here.`,
        start: it.location.startOffset,
        length: it.location.length,
        code: diagnosticsCode,
        file: this.getSourceFile(it.location.filePath),
        category: this.getDiagnosticCategory(message),
      }));

      relatedInformation.push(...typeMismatchRelatedInformation);
    }

    if (message.relatedConfigurationMetadata !== null && MESSAGES_WITHOUT_CONTEXT_DETAILS.every(it => !(message instanceof it))) {
      relatedInformation.push(
        this.buildRelatedDiagnosticsFromRelatedConfigurationMetadata(message.relatedConfigurationMetadata)
      );
    }

    return {
      messageText: `${messageDescription} ${messageDetails}`.trim(),
      start: nodeDetails.startOffset,
      length: nodeDetails.length,
      code: diagnosticsCode,
      file: this.getSourceFile(nodeDetails.filePath),
      category: diagnosticCategory,
      source: message.code,
      relatedInformation: relatedInformation,
    };
  }

  private static getDiagnosticCategory(message: AbstractCompilationMessage): ts.DiagnosticCategory {
    switch (message.type) {
    case MessageType.INFO:
      return ts.DiagnosticCategory.Message;
    case MessageType.WARNING:
      return ts.DiagnosticCategory.Warning;
    case MessageType.ERROR:
      return ts.DiagnosticCategory.Error;
    }
  }

  private static buildRelatedDiagnosticsFromRelatedConfigurationMetadata(relatedConfigurationMetadata: IRelatedConfigurationMetadata): ts.DiagnosticRelatedInformation {
    const nodeDetails = relatedConfigurationMetadata.nameNodeDetails ?? relatedConfigurationMetadata.nodeDetails;

    return {
      messageText: `'${relatedConfigurationMetadata.name}' is declared here.`,
      length: nodeDetails.length,
      start: nodeDetails.startOffset,
      file: this.getSourceFile(relatedConfigurationMetadata.fileName),
      category: ts.DiagnosticCategory.Message,
      code: 0,
    };
  }

  private static getSourceFile(fileName: string | undefined | null): ts.SourceFile | undefined {
    if (!fileName) {
      return undefined;
    }

    return getCompilationContext().program.getSourceFile(fileName);
  }

  private static getDiagnosticCode(message: AbstractCompilationMessage): any {
    if (getCompilationContext().languageServiceMode) {
      return 0;
    } else {
      return `(clawject ${message.code})`;
    }
  }
}
