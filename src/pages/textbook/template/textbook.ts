export abstract class Page {
  protected container: HTMLDivElement;

  static TextObject = {};

  static MainClass = {
    container: 'main_content',
    games: 'games',
    filter: 'filter',
    paginationTop: 'pagination-top',
    wordsList: 'words-list',
    groups: 'groups',
    paginationBottom: 'pagination-bottom',
  };

  constructor() {
    this.container = document.createElement('div');
    this.container.className = Page.MainClass.container;
  }

  protected createBlock(className: string, elem: HTMLElement) {
    const container = document.createElement('div');
    container.className = className;
    container.append(elem);
    return container;
  }

  async render() {
    return this.container;
  }
}
