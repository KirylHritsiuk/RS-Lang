/* eslint-disable no-unused-vars */
// import { Burger } from '../pages/components/burger';
import { PageContent } from '../pages/components/pageContent';
import { MainPage } from '../pages/main/main';
import { Statistics } from '../pages/statistics/statistics';
// import { Modal } from '../pages/components/modal';
import { Textbook } from '../pages/textbook/index';

const enum PageId {
  main = 'main',
  textbook = 'textbook',
  dictionary = 'dictionary',
  minigames = 'minigames',
  statistics = 'statistics',
}
export class App {
  private static container: HTMLElement = document.createElement('div');

  protected pageContent: PageContent;

  static pageContainer: HTMLElement;

  private static async renderNewPage(idPage: string) {
    const pageContainer = <HTMLElement> document.getElementById('main');
    const title = <HTMLTitleElement>document.getElementById('headerTitle');
    title.textContent = idPage;
    let page: MainPage | Textbook | Statistics |null = null;

    if (idPage === PageId.main || idPage === '') {
      page = new MainPage();
      title.textContent = PageId.main;
    } else if (idPage === PageId.textbook) {
      page = new Textbook();
    } else if (idPage === PageId.dictionary) {
      page = new Textbook();
    // } else if (idPage === PageId.minigames) {
    } else if (idPage === PageId.statistics) {
      page = new Statistics();
    } else {
      pageContainer.innerHTML = '<h2>Ooops! Something wrong! Enter Correct address</h2>';
    }
    if (page) {
      pageContainer.innerHTML = '';
      const pageHTML = await page.render();
      pageContainer.append(<HTMLDivElement>pageHTML);
    }
  }

  private static routeChange() {
    window.addEventListener('hashchange', async () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.pageContent = new PageContent();
  }

  async run() {
    const hash = window.location.hash.slice(1);
    const pageContentHTML = this.pageContent.render();
    document.body.append(pageContentHTML);
    App.renderNewPage(hash);
    App.routeChange();
  }
}
