import { boundMethod } from 'autobind-decorator';
import { computed, makeAutoObservable, observable } from 'mobx';
import RunModel from './RunModel';

export default class ParagraphModel {
  @observable
  private links: string[];

  @observable
  public runs: RunModel[];

  constructor(runs: RunModel[], links?: string[]) {
    makeAutoObservable(this);

    this.runs = runs;
    this.links = links || [];
  }

  @computed
  @boundMethod
  public getText(): string {
    return this.runs.reduce((acc, val) => acc + val.text, '');
  }

  @boundMethod
  public getLinks(): string[] {
    return this.links;
  }
}
