import { boundMethod } from 'autobind-decorator';
import { action, makeAutoObservable, observable } from 'mobx';
import moment from 'moment';
import ResourceModel from '../resource/ResourceModel';

export default class AppStateModel {
  public test: number;

  private ui: string;

  private document: string;

  private resources: Set<string>;

  @observable
  private resourceViewModel: Array<ResourceModel>;

  @observable
  private sectionViewModel: Array<ResourceModel>;

  constructor() {
    makeAutoObservable(this);

    this.test = 1;

    // use context style로 바꿔 보기 CONTEXT화.. 필수구나
    this.ui = '';
    this.document = '';

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
        'What is property',
        'Earth.svg',
        '',
        '2018-09-09T00:22:11+09:00',
      ),
      new ResourceModel(
        'https://central-library.tistory.com/44',
        'What is property',
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
    } else {
      // console.log('DUPLICATE url');
    }
  }

  @boundMethod
  public getSectionModel(): Array<ResourceModel> {
    return this.sectionViewModel;
  }

  @action.bound
  public inc(): void {
    this.test += 1;
  }
}
