/* eslint-disable max-classes-per-file */
import { Block } from '../blockTemplate';
import { PagLi } from './pagLi';

export class Pagination extends Block {
  static textObject = {
    containerClass: 'pagination',
    itemClass: 'pag-item',
    disableMod: 'pag-item-disabled',
    buttonName: 'pagButton',
    hoverMod: 'pag-item-hover-',
  };

  public list: HTMLElement;

  constructor(private pages: number = 30) {
    super();
    this.container.className = Pagination.textObject.containerClass;
    this.list = new PagLi(pages).createPagination(this.page + 1);
    this.container.append(this.list);
  }
}
