import { Textbook } from '../textbook/index';
import { Page } from '../textbook/template/textbook';

export class Dictionary extends Textbook {
  constructor(protected color:string) {
    super(color);
  }

  render() {
    this.container.classList.add(Dictionary.MainClass.dictionary);
    this.container.append(
      this.createBlock(Page.MainClass.games, this.games),
      this.createBlock(Page.MainClass.paginationTop, this.paginationTop),
      this.createBlock(Page.MainClass.filter, this.filter),
      this.createBlock(Page.MainClass.wordsList, this.loader),
      this.createBlock(Page.MainClass.groups, this.groups),
      this.createBlock(Page.MainClass.paginationBottom, this.paginationBottom),
    );
    return this.container;
  }
}
