import { makeAutoObservable, observable } from 'mobx';

export default class ParagraphModel {
  @observable
  public fontColor: string;

  @observable
  public fontSize: string;

  @observable
  public isBold: boolean;

  @observable
  public text: string;

  constructor() {
    makeAutoObservable(this);

    this.fontColor = 'black';
    this.fontSize = '16px';
    this.isBold = false;
    this.text = '';
  }
}
