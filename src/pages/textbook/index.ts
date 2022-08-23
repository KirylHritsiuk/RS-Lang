import { Pagination } from './components/pagination';
import { Page } from './template/textbook';
import { GameBar } from './components/gamebar';
import { WorldList } from './components/list';
import { Groups } from './components/groups';

export class Textbook extends Page {
  protected games: GameBar;

  protected paginationTop: Pagination;

  protected paginationBottom: Pagination;

  protected wordList: WorldList;

  protected groups: Groups;

  constructor() {
    super();
    this.games = new GameBar();
    this.paginationTop = new Pagination();
    this.paginationBottom = new Pagination();
    this.wordList = new WorldList();
    this.groups = new Groups();
  }

  async render() {
    const [gameBar,
      paginationTop,
      wordList,
      groups,
      paginationBottom] = [
      this.createBlock(Page.MainClass.games, this.games.render()),
      this.createBlock(Page.MainClass.paginationTop, this.paginationTop.render()),
      this.createBlock(Page.MainClass.wordsList, await this.wordList.render()),
      this.createBlock(Page.MainClass.groups, this.groups.render()),
      this.createBlock(Page.MainClass.paginationBottom, this.paginationBottom.render()),
    ];
    this.container.append(gameBar, paginationTop, wordList, groups, paginationBottom);

    return this.container;
  }
}
