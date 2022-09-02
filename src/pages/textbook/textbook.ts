import '../../style/textbook/style.css';
import { Page } from './template/index';
import localStorage from '../../modules/textbook/localStorageTextbook';
import { createQuery } from '../../modules/textbook/queryTextbook';

export class Textbook extends Page {
  checkStorage() {
    if (localStorage.getItemLocalStorage() === null) {
      localStorage.addItemLocalStorage(createQuery());
    }
  }

  render() {
    this.checkStorage();
    this.container.classList.add(Textbook.MainClass.textbook);
    this.container.append(
      this.createBlock(Page.MainClass.games, this.games),
      this.createBlock(Page.MainClass.paginationTop, this.paginationTop),
      this.createBlock(Page.MainClass.wordsList, this.loader),
      this.createBlock(Page.MainClass.groups, this.groups),
      this.createBlock(Page.MainClass.paginationBottom, this.paginationBottom),
    );
    return this.container;
  }
}
