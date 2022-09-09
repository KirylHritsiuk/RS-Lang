import { svg } from '../../../../common/svg';
import textbookQuery from '../../../../modules/textbook/textbookQueryData';
import { changeList } from '../../../../utils/changeList';
import { Block } from '../blockTemplate';

export class Item extends Block {
  static textObject = {
    containerClass: 'pagination',
    itemClass: 'pag-item',
    disableMod: 'pag-item-disabled',
    activeMod: 'active-',
    buttonName: 'pagButton',
    hoverMod: 'pag-item-hover-',
    prev: 'prev',
    next: 'next',
    dots: 'dots',
    numb: 'numb',
    active: 'active',
    first: 'first',
    last: 'last',
  };

  constructor(public pages: number) {
    super();
    this.container = document.createElement('ul');
    this.pages = pages;
  }

  createItem(btn: string, page?: number) {
    const li = document.createElement('li');
    li.className = `${Item.textObject.itemClass} ${Item.textObject.itemClass}-${Item.modificationClass.hover}${this.color}`;
    switch (btn.trim()) {
      case Item.textObject.prev:
        li.innerHTML = svg.chevron_left;
        break;
      case Item.textObject.first:
        li.innerHTML = '<span>1</span></li>';
        break;
      case Item.textObject.dots:
        li.innerHTML = '<span>...</span>';
        break;
      case `${Item.textObject.numb} ${Item.textObject.active}`:
        li.innerHTML = `<span>${page}</span></li>`;
        li.classList.add(`${Block.modificationClass.active}${this.color}`);
        break;
      case Item.textObject.numb:
        li.innerHTML = `<span>${page}</span></li>`;
        break;
      case Item.textObject.last:
        li.innerHTML = `<span>${this.pages}</span>`;
        break;
      case Item.textObject.next:
        li.innerHTML = svg.chevron_right;
        break;
      default:
        li.innerHTML = `<span>${page}</span>`;
    }
    if (btn !== `${Item.textObject.numb} ${Item.textObject.active}`) {
      li.addEventListener('click', () => {
        this.container.innerHTML = '';
        this.createPagination(page);
        textbookQuery.setPage(page! - 1);
        textbookQuery.updateLocal();
        changeList();
      });
    }
    return li;
  }

  createPagination(page: number = this.page) {
    let active: string;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) {
      this.container.append(this.createItem(Item.textObject.prev, page - 1));
    }
    if (page > 2) {
      this.container.append(this.createItem(Item.textObject.first, 1));
      if (page > 3) {
        this.container.append(this.createItem(Item.textObject.dots, page - 2));
      }
    }

    if (page === this.pages) {
      beforePage -= 2;
    } else if (page === this.pages - 1) {
      beforePage -= 1;
    }

    if (page === 1) {
      afterPage += 2;
    } else if (page === 2) {
      afterPage += 1;
    }
    for (let pagLength = beforePage; pagLength <= afterPage; pagLength++) {
      if (pagLength > this.pages) {
        continue;
      }
      if (pagLength === 0) {
        pagLength += 1;
      }
      if (pagLength === page) {
        active = 'active';
      } else {
        active = '';
      }
      this.container.append(this.createItem(`numb ${active}`, pagLength));
    }

    if (page < this.pages - 1) {
      if (page < this.pages - 2) {
        this.container.append(this.createItem(Item.textObject.dots, page + 2));
      }
      this.container.append(this.createItem(Item.textObject.last, this.pages));
    }

    if (page < this.pages) {
      this.container.append(this.createItem(Item.textObject.next, page + 1));
    }
    return this.container;
  }
}
