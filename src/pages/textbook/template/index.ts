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

  protected wordsList: HTMLElement;

  protected groups: HTMLElement;

  protected loader: HTMLElement;

  protected filter: HTMLElement;

  protected color: string;

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

  constructor(protected group: number = 0) {
    this.container = document.createElement('div');
    this.wordsList = document.createElement('div');
    this.container.classList.add(Page.MainClass.container);
    this.color = groupData[group];
    this.games = new GameBar(group).render();
    this.paginationTop = new Pagination(group).render();
    this.paginationBottom = new Pagination(group).render();
    this.loader = new Loader(group).render();
    this.filter = new Filter(group).render();
    this.groups = new Groups(group).render();
  }

  protected createBlock(className: string, block: HTMLElement) {
    const container = document.createElement('div');
    container.className = className;
    container.append(block);
    return container;
  }
}
