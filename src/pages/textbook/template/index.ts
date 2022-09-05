import { Filter } from '../../dictioanary/filter';
import { GameBar } from '../components/gamebar';
import { Groups } from '../components/groups';
import { Loader } from '../components/loader';
import { Pagination } from '../components/pagination';

export abstract class Page {
  protected container: HTMLDivElement;

  protected games: HTMLElement;

  protected paginationTop: HTMLElement;

  protected paginationBottom: HTMLElement;

  protected wordsList: HTMLElement;

  protected groups: HTMLElement;

  protected loader: HTMLElement;

  protected filter: HTMLElement;

  static TextObject = {};

  static MainClass = {
    container: 'main_content',
    textbook: 'textbook',
    dictionary: 'dictionary',
    games: 'games',
    filter: 'filter',
    paginationTop: 'pagination-top',
    wordsList: 'words-list',
    groups: 'groups',
    paginationBottom: 'pagination-bottom',
    loader: 'loader',
  };

  constructor() {
    this.container = document.createElement('div');
    this.wordsList = document.createElement('div');
    this.container.classList.add(Page.MainClass.container);
    this.games = new GameBar().render();
    this.paginationTop = new Pagination().render();
    this.paginationBottom = new Pagination().render();
    this.loader = new Loader().render();
    this.filter = new Filter().render();
    this.groups = new Groups().render();
  }

  protected createBlock(className: string, block: HTMLElement) {
    const container = document.createElement('div');
    container.className = className;
    container.append(block);
    return container;
  }
}
