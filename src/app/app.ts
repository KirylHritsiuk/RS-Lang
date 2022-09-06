import { PageContent } from '../pages/components/pageContent';
import { MainPage } from '../pages/main/main';
import { MiniGame } from '../pages/minigames/minigames';
import { Statistics } from '../pages/statistics/statistics';
import { Modal } from '../pages/components/modal';
import { Textbook } from '../pages/textbook/textbook';
import burger from '../pages/components/burger';
import { changeList } from '../utils/changeList';
import { DictionaryList } from '../pages/textbook/components/dictionary/list';
import dictionaryLocal from '../modules/dictionary/dictionary';
import User from '../modules/user/user';

const enum PageId {
  main = 'main',
  textbook = 'textbook',
  minigames = 'minigames',
  statistics = 'statistics',
}

export class App {
  protected pageContent: PageContent;

  protected modal: Modal;
  
  constructor() {
    this.pageContent = new PageContent();
    this.modal = new Modal();
  }

  static pageContainer: HTMLElement;

  static async renderNewPage(idPage: string) {
    const pageContainer = <HTMLElement>document.getElementById('main');
    const title = <HTMLTitleElement>document.querySelector('#headerTitle');
    title.textContent = idPage;
    let page: MainPage | Textbook | Statistics | MiniGame | null = null;
    if (idPage === PageId.main || idPage === '') {
      page = new MainPage();
      title.textContent = PageId.main;
    } else if (idPage === PageId.textbook) {
      page = new Textbook();
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
      if (idPage === PageId.textbook) {
        if (dictionaryLocal.getItemLocalStorage() === null) {
          changeList();
        } else {
          changeList(new DictionaryList());
        }
      }
      if ('listenerGames' in page) {
        page.listenerGames();
      }
    }
    const footerVisibility = document.querySelector('.footer') as HTMLElement;
    await User.checkLogin();
    if (idPage === 'minigames') footerVisibility.style.visibility = 'hidden';
    else footerVisibility.style.visibility = 'initial';
  }

  private static routeChange() {
    window.addEventListener('hashchange', async () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  async run() {
    const hash = window.location.hash.slice(1);
    const pageContentHTML = this.pageContent.render();
    document.body.append(pageContentHTML);
    App.renderNewPage(hash);
    App.routeChange();
    burger.controlBurger();
    this.modal.render();
    await User.checkLogin();
  }
}
