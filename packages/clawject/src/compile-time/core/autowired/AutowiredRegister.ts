import { Autowired } from './Autowired';
import { Component } from '../component/Component';
import { Configuration } from '../configuration/Configuration';
import { AbstractElementRegister } from '../element-register/AbstractElementRegister';
import { FileGraph } from '../file-graph/FileGraph';

export class AutowiredRegister extends AbstractElementRegister<Autowired> {
  constructor(
    public parent: Configuration | Component,
  ) {
    super();
  }

  override register(autowired: Autowired): void {
    autowired.id = `${this.parent.id}_${this.counter}`;
    this.counter++;

    autowired.parent = this.parent;

    this.elements.add(autowired);
    this.idToElement.set(autowired.id, autowired);
    this.nodeToElement.set(autowired.node, autowired);

    autowired.diType.declarations.map(it => {
      FileGraph.add(this.parent.fileName, it.fileName);
    });
  }
}