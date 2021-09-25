import { makeAutoObservable, observable } from 'mobx';

interface IRunProps {
  text: string;
  fontColor?: string;
  fontSize?: string;
  isBold?: boolean;
}

export default class RunModel {
  @observable
  public fontColor: string;

  @observable
  public fontSize: string;

  @observable
  public isBold: boolean;

  @observable
  public text: string;

  constructor(params: IRunProps) {
    makeAutoObservable(this);

    this.text = params.text;
    this.fontColor = params.fontColor || 'black';
    this.fontSize = params.fontSize || '16px';
    this.isBold = params.isBold === undefined ? false : params.isBold;
  }
}
