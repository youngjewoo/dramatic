import { boundMethod } from 'autobind-decorator';
import { action, makeAutoObservable, observable } from 'mobx';
import moment from 'moment';
import { v4 } from 'uuid';
import ResourceModel from '../resource/ResourceModel';

export default class AppStateModel {
  private isSplitViewOn: boolean;

  private documentId: string;

  private resources: Set<string>;

  @observable
  private resourceViewModel: Array<ResourceModel>;

  @observable
  private sectionViewModel: Array<ResourceModel>;

  constructor() {
    makeAutoObservable(this);

    this.isSplitViewOn = false;
    this.documentId = v4();

    this.resources = new Set();
    this.resourceViewModel = [
      new ResourceModel(
        'https://tistory.github.io/document-tistory-skin/',
        'skin guide',
        'Earth.svg',
        '',
        moment().format(),
      ),
      new ResourceModel(
        'https://balmostory.tistory.com/50',
        'ogs ',
        'Earth.svg',
        '',
        moment().format(),
      ),
      new ResourceModel(
        'https://central-library.tistory.com/4',
        'BMW GT 6 the best family touring car',
        'Earth.svg',
        '',
        '2018-09-09T00:22:11+09:00',
      ),
      new ResourceModel(
        'https://central-library.tistory.com/44',
        'What is property asdasdasd',
        'Earth.svg',
        '',
        '2018-09-09T00:22:11+09:00',
      ),
    ];
    this.sectionViewModel = [];

    // 임시 초기화
    this.resources.add('https://tistory.github.io/document-tistory-skin/');
    this.resources.add('https://balmostory.tistory.com/50');
    this.resources.add('https://central-library.tistory.com/4');
    this.resources.add('https://central-library.tistory.com/44');
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
      this.resources.add(url);
      let insertIdx = -1;
      for (let i = 0; i < this.resourceViewModel.length; i += 1) {
        if (this.resourceViewModel[i].getDate() < resourceModel.getDate()) {
          insertIdx = i;
          break;
        }
      }
      if (insertIdx !== -1) {
        this.resourceViewModel.splice(insertIdx, 0, resourceModel);
      }
    }
  }

  @action.bound
  public isDuplicate(url: string): boolean {
    return this.resources.has(url);
  }

  @action.bound
  public replaceTempUrl(url: string): void {
    if (this.resources.has('TEMP')) {
      this.resources.delete('TEMP');
      this.resources.add(url);
    } else {
      console.log('Invalid status');
    }
  }

  @action.bound
  public removeTempModel(): void {
    this.resources.delete('TEMP');
    const idx = this.resourceViewModel.findIndex((model) => model.getUrl() === 'TEMP');
    if (idx !== -1) {
      this.resourceViewModel.splice(idx, 1);
    }
  }

  @boundMethod
  public getSectionModel(): Array<ResourceModel> {
    return this.sectionViewModel;
  }
}
