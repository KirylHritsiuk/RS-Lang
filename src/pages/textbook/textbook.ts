import dictionary from '../../modules/dictionary/dictionary';
import '../../style/textbook/style.css';
import { Block } from './components/blockTemplate';
import { Page } from './template/index';

export class Textbook extends Page {
  static isTextbook() {
    if (dictionary.getItemLocalStorage() === null) return true;
    return false;
  }

  toChange() {
    if (!Textbook.isTextbook()) {
      [this.games, this.paginationBottom, this.paginationTop].forEach((el) => {
        el.classList.add(Block.modificationClass.displayNone);
      });
    } else {
      this.filter.classList.add(Block.modificationClass.displayNone);
    }
  }

  render() {
    this.container.classList.add(Textbook.MainClass.textbook);
    this.toChange();
    this.container.append(
      this.createBlock(Page.MainClass.games, this.games, this.filter),
      this.createBlock(Page.MainClass.paginationTop, this.paginationTop),
      this.createBlock(Page.MainClass.wordsList, this.loader),
      this.createBlock(Page.MainClass.groups, this.groups),
      this.createBlock(Page.MainClass.paginationBottom, this.paginationBottom),
    );
    return this.container;
  }
}
