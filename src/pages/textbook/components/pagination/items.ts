import { groupData } from '../../../../common/groups';
import { svg } from '../../../../common/svg';
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

  createItem(btn: string, page?: number, color: string = 'red') {
    const li = document.createElement('li');
    li.className = `${Item.textObject.itemClass} ${Item.textObject.itemClass}-${Item.modificationClass.hover}${color}`;
    switch (btn.trim()) {
      case Item.textObject.prev:
        li.innerHTML = svg.chevron_left;
        break;
      case Item.textObject.first:
        li.innerHTML = '<span>1</span>';
        break;
      case Item.textObject.dots:
        li.innerHTML = '<span>...</span>';
        break;
      case `${Item.textObject.numb} ${Item.textObject.active}`:
        li.innerHTML = `<span>${page}</span>`;
        li.classList.add(`${Block.modificationClass.active}${color}`);
        break;
      case Item.textObject.numb:
        li.innerHTML = `<span>${page}</span>`;
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
    li.addEventListener('click', () => {
      this.container.innerHTML = '';
      this.createPagination(page, groupData[this.data.getGroupe()]);
      this.data.setPage(page! - 1);
      this.data.updateLocal();
      this.data.updateQuery();
      changeList();
    });
    return li;
  }

  createPagination(page: number = this.page, color: string = 'red') {
    let active: string;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) {
      this.container.append(this.createItem(Item.textObject.prev, page - 1, color));
    }
    if (page > 2) {
      this.container.append(this.createItem(Item.textObject.first, 1, color));
      if (page > 3) {
        this.container.append(this.createItem(Item.textObject.dots, page - 2, color));
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
      this.container.append(this.createItem(`${Item.textObject.numb} ${active}`, pagLength, color));
    }

    if (page < this.pages - 1) {
      if (page < this.pages - 2) {
        this.container.append(this.createItem(Item.textObject.dots, page + 2, color));
      }
      this.container.append(this.createItem(Item.textObject.last, this.pages, color));
    }

    if (page < this.pages) {
      this.container.append(this.createItem(Item.textObject.next, page + 1, color));
    }
    return this.container;
  }
}
