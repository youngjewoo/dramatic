import { makeAutoObservable, observable } from 'mobx';

export default class ImageModel {
  @observable
  public links: string[];

  @observable
  public width: string;

  @observable
  public height: string;

  @observable
  public url: string;

  constructor() {
    makeAutoObservable(this);

    this.links = [];
    this.url = '';
    this.width = '0';
    this.height = '0';
  }
}
