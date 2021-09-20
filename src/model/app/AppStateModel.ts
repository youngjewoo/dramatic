import { boundMethod } from 'autobind-decorator';
import { observable } from 'mobx';
import ResourceModel from '../resource/ResourceModel';

class AppStateModel {
  private ui: string;

  private document: string;

  @observable
  private resources: Map<string, ResourceModel>;

  @observable
  private sectionViewModel: Map<string, ResourceModel>;

  constructor() {
    // makeObservable(this);
    // use context style로 바꿔 보기
    this.ui = '';
    this.document = '';

    this.resources = new Map();
    this.sectionViewModel = new Map();

    // 임시 초기화
    this.resources.set(
      'https://tistory.github.io/document-tistory-skin/',
      new ResourceModel(
        'https://tistory.github.io/document-tistory-skin/',
        'skin guide',
        'Earth.svg',
        '',
        new Date().toISOString().split('T')[0],
      ),
    );
    this.resources.set(
      'https://balmostory.tistory.com/50',
      new ResourceModel(
        'https://balmostory.tistory.com/50',
        'ogs ',
        'Earth.svg',
        '',
        new Date().toISOString().split('T')[0],
      ),
    );
    this.resources.set(
      'https://central-library.tistory.com/4',
      new ResourceModel(
        'https://central-library.tistory.com/4',
        'What is property',
        'Earth.svg',
        '',
        '2018-09-09',
      ),
    );
  }

  @boundMethod
  public getResources(): Map<string, ResourceModel> {
    return this.resources;
  }

  @boundMethod
  public addResource(url: string, resourceModel: ResourceModel): void {
    if (this.resources.has(url) === false) {
      this.resources.set(url, resourceModel);
      console.log(this.resources.size);
    } else {
      console.log('DUPLICATe url');
    }
    console.log([...this.resources]);
  }

  @boundMethod
  public getSectionModel(): Map<string, ResourceModel> {
    return this.sectionViewModel;
  }
}

export default new AppStateModel();
