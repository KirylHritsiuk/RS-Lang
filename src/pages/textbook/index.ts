import { Page } from './template/textbook';

export class Textbook extends Page {
  constructor(protected color:string) {
    super(color);
  }

  render() {
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
