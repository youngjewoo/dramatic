import { boundMethod } from 'autobind-decorator';

class ResourceModel {
  private url: string;

  private title: string;

  private img: string;

  private favicon: string;

  private creationDate: string;

  constructor(url: string, title: string, img: string, favicon: string, creationDate: string) {
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
}

export default ResourceModel;
