import { boundMethod } from 'autobind-decorator';
import { action, makeAutoObservable, observable } from 'mobx';
import { v4 } from 'uuid';
import DocumentModel, { ContentModel } from '../document/DocumentModel';
import ResourceModel from '../resource/ResourceModel';
import documentModelMock from '../mock/DocumentModelMock';
import ParagraphModel from '../document/ParagraphModel';
import ImageModel from '../document/ImageModel';
import fetchResource from '../../handler/pasteHandler';
import resourceStub from '../mock/ResourceModelMock';

export default class AppStateModel {
  private isSplitViewOn: boolean;

  private documentId: string;

  private resources: Map<string, ResourceModel>;

  private visibleModels: ContentModel[];

  @observable
  private resourceViewModel: Array<ResourceModel>;

  @observable
  private sectionViewModel: Array<ResourceModel>;

  @observable
  private documentModel: DocumentModel;

  constructor() {
    makeAutoObservable(this);

    this.isSplitViewOn = false;
    this.documentId = v4();

    this.resources = new Map();
    this.visibleModels = [];
    this.sectionViewModel = [];
    this.resourceViewModel = resourceStub;

    this.documentModel = documentModelMock;

    // 임시 초기화
    resourceStub.forEach((resModel) => {
      this.resources.set(resModel.getUrl(), resModel);
    });
    // fetchResource('https://developers.google.com/web/fundamentals/performance/critical-rendering-path?hl=ko', this);
    // fetchResource('https://developers.google.com/web/updates/2018/09/inside-browser-part3?hl=ko', this);
    // fetchResource('https://ivorycode.tistory.com/entry/브라우저-렌더링-과정', this);
    // fetchResource('https://blog.buildit.kr/post/3', this);
    // fetchResource('https://subicura.com/2018/02/14/javascript-debugging.html', this);
    // fetchResource('https://ko.wikipedia.org/wiki/더닝-크루거_효과', this);
    // fetchResource('https://www.huskyhoochu.com/how-browser-works/', this);
    // fetchResource('https://d2.naver.com/helloworld/59361', this);
    // fetchResource('https://sculove.github.io/slides/improveBrowserRendering/#/', this);
    // fetchResource('https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations?hl=ko', this);
    // fetchResource('https://stackoverflow.com/questions/25724126/chrome-devtools-timeline-update-layer-tree-event', this);
    // fetchResource('https://groups.google.com/a/chromium.org/g/blink-dev/c/j7YQtj0Yyxs', this);
    // fetchResource('https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model?hl=ko', this);
    // fetchResource('https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/paint/README.md#Current-compositing-algorithm-CompositeBeforePaint', this);
  }

  @boundMethod
  public isSplitOn(): boolean {
    return this.isSplitViewOn;
  }

  @boundMethod
  public getResources(): Array<ResourceModel> {
    return this.resourceViewModel;
  }

  @action.bound
  public addResource(url: string, resourceModel: ResourceModel): void {
    if (this.resources.has(url) === false) {
      this.resources.set(url, resourceModel);

      if (this.resourceViewModel.length === 0) {
        this.resourceViewModel.push(resourceModel);
        return;
      }

      let insertIdx = -1;
      for (let i = 0; i < this.resourceViewModel.length; i += 1) {
        insertIdx = i;
        if (this.resourceViewModel[i].getDate() < resourceModel.getDate()) {
          break;
        }
      }
      if (this.resourceViewModel.length === 0 || insertIdx !== -1) {
        this.resourceViewModel.splice(insertIdx, 0, resourceModel);
      }
    }
  }

  @action.bound
  public isDuplicate(url: string): boolean {
    return this.resources.has(url);
  }

  @action.bound
  public removeModel(url: string): void {
    const model = this.resources.get(url);
    if (model) {
      this.resources.delete(url);
    } else {
      console.log('Invalid status');
    }
  }

  @boundMethod
  public getSectionModel(): ResourceModel[] {
    return this.sectionViewModel;
    // return this.sectionViewModel.filter(model => model.getImg() !== 'NoImage.svg');
  }

  @boundMethod
  public getDocument(): DocumentModel {
    return this.documentModel;
  }

  @action.bound
  public addVisible(model: ContentModel): void {
    if (model instanceof ParagraphModel || model instanceof ImageModel) {
      const resModels: ResourceModel[] = [];
      model.getLinks().forEach((link) => {
        if (this.sectionViewModel.find((m: ResourceModel) => m.getUrl() === link) === undefined) {
          const resModel = this.resources.get(link);
          // resource map에 없는 링크일 경우
          if (resModel === undefined) {
            fetchResource(link, this, true);
            return;
          }
          resModels.push(resModel);
        }
      });
      resModels.forEach((resModel) => this.sectionViewModel.push(resModel));
      this.visibleModels.push(model);
    }
  }

  @action.bound
  public removeVisible(model: ContentModel): void {
    const idx = this.visibleModels.findIndex((m) => m === model);
    if (idx !== -1) {
      this.visibleModels.splice(idx, 1);
      if (model instanceof ParagraphModel || model instanceof ImageModel) {
        model.getLinks().forEach((link) => {
          const targetResModel = this.resources.get(link);
          if (targetResModel && this.isUsedLink(link) === false) {
            this.removeSectionViewModel(targetResModel);
          }
        });
      }
    }
  }

  @action.bound
  public removeSectionViewModel(model: ResourceModel): void {
    const idx = this.sectionViewModel.findIndex((m) => m === model);
    if (idx !== -1) {
      this.sectionViewModel.splice(idx, 1);
    }
  }

  @boundMethod
  public isUsedLink(targetLink: string): boolean {
    let result = false;
    this.visibleModels.forEach((model) => {
      if (model instanceof ParagraphModel || model instanceof ImageModel) {
        if (model.getLinks().some((link) => targetLink === link)) {
          result = true;
        }
      }
    });
    return result;
  }
}
