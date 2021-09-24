import { boundMethod } from 'autobind-decorator';
import { action, makeAutoObservable, observable } from 'mobx';

class ResourceModel {
  @observable
  private url: string;

  @observable
  private title: string;

  @observable
  private img: string;

  @observable
  private favicon: string;

  @observable
  private creationDate: string;

  constructor(url: string, title: string, img: string, favicon: string, creationDate: string) {
    makeAutoObservable(this);
    this.url = url;
    this.img = img;
    this.title = title;
    this.favicon = favicon;
    this.creationDate = creationDate;
  }

  @boundMethod
  public getUrl(): string {
    return this.url;
  }

  @boundMethod
  public getImg(): string {
    return this.img;
  }

  @boundMethod
  public getTitle(): string {
    return this.title;
  }

  @boundMethod
  public getFavicon(): string {
    return this.favicon;
  }

  @boundMethod
  public getDate(): string {
    return this.creationDate;
  }

  @action.bound
  public setUrl(url: string): void {
    this.url = url;
  }

  @action.bound
  public setImg(img: string): void {
    this.img = img;
  }

  @action.bound
  public setTitle(title: string): void {
    this.title = title;
  }

  @action.bound
  public setFavicon(favicon: string): void {
    this.favicon = favicon;
  }
}

export default ResourceModel;
