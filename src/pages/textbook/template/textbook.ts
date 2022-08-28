import { groupData } from '../../../common/groups';
import { Filter } from '../components/filter';
import { GameBar } from '../components/gamebar';
import { Groups } from '../components/groups';
import { Loader } from '../components/loader';
import { Pagination } from '../components/pagination';

export abstract class Page {
  protected container: HTMLDivElement;

  protected games: HTMLElement;

  protected paginationTop: HTMLElement;

  protected paginationBottom: HTMLElement;

  protected wordList: HTMLElement;

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

  constructor(protected color: string = groupData[0]) {
    this.container = document.createElement('div');
    this.container.classList.add(Page.MainClass.container);
    this.color = color;
    this.games = new GameBar(this.color).render();
    this.paginationTop = new Pagination(this.color).render();
    this.paginationBottom = new Pagination(this.color).render();
    this.loader = new Loader(this.color).render();
    this.filter = new Filter(this.color).render();
    this.wordList = document.createElement('div');
    this.groups = new Groups(this.color).render();
  }

  protected createBlock(className: string, block: HTMLElement) {
    const container = document.createElement('div');
    container.className = className;
    container.append(block);
    return container;
  }
}
