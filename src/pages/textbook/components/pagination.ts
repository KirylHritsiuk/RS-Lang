import { Block } from './blockTemplate';

export class Pagination extends Block {
  static textObject = {
    containerClass: 'pagination',
    itemClass: 'pag-item',
    modificationClass: 'hover-',
  };

  constructor(color: string) {
    super(color);
    this.container.className = Pagination.textObject.containerClass;
  }

  render() {
    this.container.innerHTML = `<button class="${Pagination.textObject.itemClass} pag-item-disabled" disabled>
    <svg viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5V7z"></path></svg>
  </button>
  <button class="${Pagination.textObject.itemClass} active-${this.color}">1</button>
  <button class="${Pagination.textObject.itemClass} ${Pagination.textObject.modificationClass}${this.color}">...</button>
  <button class="${Pagination.textObject.itemClass} ${Pagination.textObject.modificationClass}${this.color}">2</button>
  <button class="${Pagination.textObject.itemClass} ${Pagination.textObject.modificationClass}${this.color}">3</button>
  <button class="${Pagination.textObject.itemClass} ${Pagination.textObject.modificationClass}${this.color}">4</button>
  <button class="${Pagination.textObject.itemClass} ${Pagination.textObject.modificationClass}${this.color}">5</button>
  <button class="${Pagination.textObject.itemClass} ${Pagination.textObject.modificationClass}${this.color}">6</button>
  <button class="${Pagination.textObject.itemClass} ${Pagination.textObject.modificationClass}${this.color}">...</button>
  <button class="${Pagination.textObject.itemClass} ${Pagination.textObject.modificationClass}${this.color}">30</button>
  <button class="${Pagination.textObject.itemClass} ${Pagination.textObject.modificationClass}${this.color}">
    <svg viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"></path></svg>
  </button>
    `;
    return this.container;
  }
}
