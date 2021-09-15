import { boundMethod } from 'autobind-decorator';

class AppStateModel {
  private ui: string;

  private document: string;

  private test: string;

  constructor() {
    this.ui = '';
    this.document = '';
    this.test = 'test';
  }

  @boundMethod
  public getTest(): string {
    return this.test;
  }

  @boundMethod
  public setTest(str: string): void {
    this.test = str;
  }
}

export default new AppStateModel();
