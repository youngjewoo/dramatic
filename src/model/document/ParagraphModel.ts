// import { boundMethod } from 'autobind-decorator';
import { makeAutoObservable, observable } from 'mobx';
import RunModel from './RunModel';

export default class ParagraphModel {
  @observable
  public links: string[];

  @observable
  public isBullet: boolean;

  @observable
  public runs: RunModel[];

  constructor(runs: RunModel[]) {
    makeAutoObservable(this);

    this.links = [];
    this.isBullet = false;
    this.runs = runs;
  }
}
