import { MainHeader } from '../pages/components/header';

export class App {
  private initialPage: MainHeader;

  constructor() {
    this.initialPage = new MainHeader();
  }

  run() {
    const header = this.initialPage.render();
    return header;
  }
}
