import { Block } from './blockTemplate';

export class Pagination extends Block {
  static textObject = {
    containerClass: 'pagination',
    itemClass: 'pag-item',
  };

  constructor(group: number) {
    super(group);
    this.container.className = Pagination.textObject.containerClass;
  }

  render() {
    this.container.innerHTML = `<button class="${Pagination.textObject.itemClass} pag-item-disabled" name="pagButton" disabled>
    <svg viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5V7z"></path></svg>
  </button>
  <button class="${Pagination.textObject.itemClass} active-${this.color}" name="pagButton">1</button>
  <button class="${Pagination.textObject.itemClass} ${Block.modificationClass.hoverModificationClass}${this.color}" name="pagButton">...</button>
  <button class="${Pagination.textObject.itemClass} ${Block.modificationClass.hoverModificationClass}${this.color}" name="pagButton">2</button>
  <button class="${Pagination.textObject.itemClass} ${Block.modificationClass.hoverModificationClass}${this.color}" name="pagButton">3</button>
  <button class="${Pagination.textObject.itemClass} ${Block.modificationClass.hoverModificationClass}${this.color}" name="pagButton">4</button>
  <button class="${Pagination.textObject.itemClass} ${Block.modificationClass.hoverModificationClass}${this.color}" name="pagButton">5</button>
  <button class="${Pagination.textObject.itemClass} ${Block.modificationClass.hoverModificationClass}${this.color}" name="pagButton">6</button>
  <button class="${Pagination.textObject.itemClass} ${Block.modificationClass.hoverModificationClass}${this.color}" name="pagButton">...</button>
  <button class="${Pagination.textObject.itemClass} ${Block.modificationClass.hoverModificationClass}${this.color}" name="pagButton">30</button>
  <button class="${Pagination.textObject.itemClass} ${Block.modificationClass.hoverModificationClass}${this.color}" name="pagButton">
    <svg viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"></path></svg>
  </button>
    `;
    return this.container;
  }
}
