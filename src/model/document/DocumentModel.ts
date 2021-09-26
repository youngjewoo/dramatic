// import { boundMethod } from 'autobind-decorator';
import { boundMethod } from 'autobind-decorator';
import { action, makeAutoObservable, observable } from 'mobx';
import BreakLineModel from './BreakLineModel';
import ImageModel from './ImageModel';
import LinkModel from './LinkModel';
import ParagraphModel from './ParagraphModel';

export type ContentModel = ParagraphModel | ImageModel | BreakLineModel | LinkModel;

export default class DocumentModel {
  @observable
  public contents: Array<ContentModel>;

  constructor() {
    makeAutoObservable(this);

    this.contents = [];
  }

  @action.bound
  public addModel(model: ContentModel): void {
    this.contents.push(model);
  }

  @boundMethod
  public getContents(): Array<ContentModel> {
    return this.contents;
  }
}
