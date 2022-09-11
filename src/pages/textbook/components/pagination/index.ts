import { Block } from '../blockTemplate';
import { Item } from './items';

export class Pagination extends Block {
  static textObject = {
    containerClass: 'pagination',
    itemClass: 'pag-item',
    disableMod: 'pag-item-disabled',
    buttonName: 'pagButton',
    hoverMod: 'pag-item-hover-',
  };

  private items: HTMLElement;

  constructor(private pages: number = 30) {
    super();
    this.container.className = Pagination.textObject.containerClass;
    this.items = new Item(pages).createPagination(this.data.getPage() + 1, this.color);
    this.container.append(this.items);
  }
}
