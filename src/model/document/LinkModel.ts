import { boundMethod } from 'autobind-decorator';

export default class LinkModel {
  private label: string;

  private url: string;

  constructor(label: string, linkUrl: string) {
    this.url = linkUrl;
    this.label = label;
  }

  @boundMethod
  public getLabel(): string {
    return this.label;
  }

  @boundMethod
  public getUrl(): string {
    return this.url;
  }
}
