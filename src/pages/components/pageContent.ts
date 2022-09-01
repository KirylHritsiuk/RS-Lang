import { Main } from './main';
import { Footer } from './footer';
import { Header } from './header';

export class PageContent {
  protected container: HTMLDivElement;

  protected header: Header;

  protected main: Main;

  protected footer: Footer;

  static TextOject = {
    className: 'page-content',
  };

  constructor() {
    this.container = <HTMLDivElement>document.createElement('div');
    this.container.className = PageContent.TextOject.className;
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
  }

  render() {
    const [headerHTML, mainHTML, footerHTML] = [
      this.header.render(),
      this.header.createNameUser(),
      this.main.render(),
      this.footer.render(),
    ];
    this.container.append(headerHTML, mainHTML, footerHTML);
    return this.container;
  }
}
