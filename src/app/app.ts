import { Textbook } from '../pages/textbook/index';

export class App {
  protected textBook: Textbook;

  constructor() {
    this.textBook = new Textbook();
  }

  async run() {
    const textBook = document.body.append(await this.textBook.render());
    return textBook;
  }
}
