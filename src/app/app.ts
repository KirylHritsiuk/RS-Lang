import { MainHeader } from '../pages/components/header';
import { Modal } from '../pages/components/modal';

export class App {
  private initialPage: MainHeader;
  private initialModal: Modal;

  constructor() {
    this.initialPage = new MainHeader();
    this.initialModal = new Modal();
  }

  run() {
    const header = this.initialPage.render();
    this.initialModal.render()
    return header;
  }
}
