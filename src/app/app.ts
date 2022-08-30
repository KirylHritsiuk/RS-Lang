/* eslint-disable no-unused-vars */
// import { Burger } from '../pages/components/burger';
import { PageContent } from '../pages/components/pageContent';
import { Dictionary } from '../pages/dictioanary/index';
import { MainPage } from '../pages/main/main';
import { MiniGame } from '../pages/minigames/minigames';
import { Statistics } from '../pages/statistics/statistics';
import { WorldList } from '../pages/textbook/components/list';
import { Modal } from '../pages/components/modal';
import { Textbook } from '../pages/textbook/index';
import burger from '../pages/components/burger';

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
  protected modal: Modal;

  static pageContainer: HTMLElement;

  private static renderNewPage(idPage: string) {
    const pageContainer = <HTMLElement>document.getElementById('main');
    const title = <HTMLTitleElement>document.getElementById('headerTitle');
    title.textContent = idPage;
    let page: MainPage | Textbook | Statistics | MiniGame | null = null;
    let wordList: WorldList | null = null;
    if (idPage === PageId.main || idPage === '') {
      page = new MainPage();
      title.textContent = PageId.main;
    } else if (idPage === PageId.textbook) {
      page = new Textbook('red');
      wordList = new WorldList('red');
    } else if (idPage === PageId.dictionary) {
      page = new Dictionary('purple');
      wordList = new WorldList('purple');
    } else if (idPage === PageId.minigames) {
      page = new MiniGame();
    } else if (idPage === PageId.statistics) {
      page = new Statistics();
    } else {
      pageContainer.innerHTML = '<h2>Ooops! Something wrong! Enter Correct address</h2>';
    }
    if (page) {
      pageContainer.innerHTML = '';
      const pageHTML = page.render();
      pageContainer.append(<HTMLDivElement>pageHTML);
      if (wordList) {
        const container = <HTMLElement>document.querySelector('.words-list');
        container.append(wordList.render());
      }
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
    this.modal = new Modal();
  }

  async run() {
    const hash = window.location.hash.slice(1);
    const pageContentHTML = this.pageContent.render();
    document.body.append(pageContentHTML);
    App.renderNewPage(hash);
    App.routeChange();
    burger.controlBurger();
    this.modal.render();
  }
}
