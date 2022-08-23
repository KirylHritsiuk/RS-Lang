import { MainHeader } from '../pages/components/header';
import { Modal } from '../pages/components/modal';
import { Textbook } from '../pages/textbook/index';

export class App {
  private initialPage: MainHeader;
  private initialModal: Modal;
  protected textBook: Textbook;

  constructor() {
    this.initialPage = new MainHeader();
    this.initialModal = new Modal();
    this.textBook = new Textbook();
  }

  run() {
    const header = this.initialPage.render();
    this.initialModal.render()
    return header;
  }
}