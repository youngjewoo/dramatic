import { boundMethod } from 'autobind-decorator';
import { observable } from 'mobx';
import ResourceModel from '../resource/ResourceModel';

class AppStateModel {
  private ui: string;

  private document: string;

  @observable.shallow
  private resources: Map<string, ResourceModel>;

  @observable.shallow
  private sectionViewModel: Map<string, ResourceModel>;

  constructor() {
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
        '',
        '',
        new Date().toDateString(),
      ),
    );
    this.resources.set(
      'https://balmostory.tistory.com/50',
      new ResourceModel(
        'https://balmostory.tistory.com/50',
        'ogs ',
        '',
        '',
        new Date().toDateString(),
      ),
    );
    this.resources.set(
      'https://central-library.tistory.com/4',
      new ResourceModel(
        'https://central-library.tistory.com/4',
        'What is property',
        '',
        '',
        new Date().toDateString(),
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
    }
  }

  @boundMethod
  public getSectionModel(): Map<string, ResourceModel> {
    return this.sectionViewModel;
  }
}

export default new AppStateModel();
