import { svg } from '../../../../common/svg';
import textbookQuery from '../../../../modules/textbook/textbookQueryData';
import { changeList } from '../../../../utils/changeList';
import { Block } from '../blockTemplate';

export class PagLi extends Block {
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

  createLi(btn: string, page?: number) {
    const li = document.createElement('li');
    li.className = `${PagLi.textObject.itemClass} ${PagLi.textObject.itemClass}-${PagLi.modificationClass.hoverModificationClass}${this.color}`;
    switch (btn.trim()) {
      case PagLi.textObject.prev:
        li.innerHTML = svg.chevron_left;
        break;
      case PagLi.textObject.first:
        li.innerHTML = '<span>1</span></li>';
        break;
      case PagLi.textObject.dots:
        li.innerHTML = '<span>...</span>';
        break;
      case `${PagLi.textObject.numb} ${PagLi.textObject.active}`:
        li.innerHTML = `<span>${page}</span></li>`;
        li.classList.add(`${Block.modificationClass.active}${this.color}`);
        break;
      case PagLi.textObject.numb:
        li.innerHTML = `<span>${page}</span></li>`;
        break;
      case PagLi.textObject.last:
        li.innerHTML = `<span>${this.pages}</span>`;
        break;
      case PagLi.textObject.next:
        li.innerHTML = svg.chevron_right;
        break;
      default:
        li.innerHTML = `<span>${page}</span>`;
    }
    li.addEventListener('click', () => {
      this.container.innerHTML = '';
      this.createPagination(page);
      textbookQuery.setPage(page! - 1);
      textbookQuery.updateLocal();
      changeList();
    });
    return li;
  }

  createPagination(page: number = this.page) {
    let active: string;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) {
      this.container.append(this.createLi(PagLi.textObject.prev, page - 1));
    }
    if (page > 2) {
      this.container.append(this.createLi(PagLi.textObject.first, 1));
      if (page > 3) {
        this.container.append(this.createLi(PagLi.textObject.dots));
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
      this.container.append(this.createLi(`numb ${active}`, pagLength));
    }

    if (page < this.pages - 1) {
      if (page < this.pages - 2) {
        this.container.append(this.createLi(PagLi.textObject.dots));
      }
      this.container.append(this.createLi(PagLi.textObject.last, this.pages));
    }

    if (page < this.pages) {
      this.container.append(this.createLi(PagLi.textObject.next, page + 1));
    }
    return this.container;
  }
}
