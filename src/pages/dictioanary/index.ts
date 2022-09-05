import { Textbook } from '../textbook/textbook';
import { Page } from '../textbook/template/index';

export class Dictionary extends Textbook {
  render() {
    this.container.classList.add(Dictionary.MainClass.dictionary);
    this.container.append(
      this.createBlock(Page.MainClass.games, this.games),
      this.createBlock(Page.MainClass.filter, this.filter),
      this.createBlock(Page.MainClass.wordsList, this.loader),
    );
    return this.container;
  }
}
