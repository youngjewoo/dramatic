import { boundMethod } from 'autobind-decorator';
import { makeAutoObservable, observable } from 'mobx';

interface IImageProps {
  url: string;
  width: string;
  height: string;
  links?: string[];
}

export default class ImageModel {
  @observable
  private links: string[];

  @observable
  private width: string;

  @observable
  private height: string;

  @observable
  private url: string;

  constructor(params: IImageProps) {
    makeAutoObservable(this);

    this.url = params.url;
    this.width = params.width || '0';
    this.height = params.height || '0';
    this.links = params.links || [];
  }

  @boundMethod
  public getUrl(): string {
    return this.url;
  }

  @boundMethod
  public getHeight(): string {
    return this.height;
  }

  @boundMethod
  public getWidth(): string {
    return this.width;
  }
}
