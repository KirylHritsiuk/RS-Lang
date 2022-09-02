import { getGroup } from '../../../modules/textbook/getGroup';
import { getPage } from '../../../modules/textbook/getPage';
import { createQuery } from '../../../modules/textbook/queryTextbook';
import { Block } from './blockTemplate';
import localStorageTextbook from '../../../modules/textbook/localStorageTextbook';
import { changeList } from '../../../utils/changeList';
import { svg } from '../../../common/svg';

export class Pagination extends Block {
  static textObject = {
    containerClass: 'pagination',
    itemClass: 'pag-item',
    disableMod: 'pag-item-disabled',
    activeMod: 'active-',
    buttonName: 'pagButton',
    hoverMod: 'pag-item-hover-',
  };

  static createButton(page: number | string) {
    const container = document.createElement('button');
    if (typeof page === 'number') {
      container.textContent = (page + 1).toString();
    } else {
      container.textContent = page;
    }
    container.className = Pagination.textObject.itemClass;
    return container;
  }

  constructor(private pages: number = 30, private step: number = 5) {
    super();
    this.container.className = Pagination.textObject.containerClass;
    this.pages = pages - 1;
    this.step = step - 1;
    // this.pagPages = pages/step
  }

  createPageButton(page: number) {
    const container = Pagination.createButton(page);
    container.name = 'page';
    container.dataset.page = page.toString();
    container.classList.add(`${Pagination.textObject.hoverMod}${this.color}`);
    container.addEventListener('click', () => {
      // const btn = <HTMLButtonElement>e.currentTarget;
      localStorageTextbook.addItemLocalStorage(
        createQuery(
          getGroup(),
          page,
        ),
      );
      changeList();
      const container = [
        <HTMLDivElement>document.querySelector('.pagination-top'),
        <HTMLDivElement>document.querySelector('.pagination-bottom')];
      container.forEach((elem) => {
        elem.innerHTML = '';
        elem.append(new Pagination().render());
      });
    });
    return container;
  }

  createControlButtonPrev() {
    const container = Pagination.createButton('');
    container.name = 'prev';
    if (this.page === 0) {
      container.disabled = true;
      container.dataset.count = this.page.toString();
      container.classList.add(Pagination.textObject.disableMod);
    } else container.classList.add(`${Pagination.textObject.hoverMod}${this.color}`);
    container.innerHTML = svg.chevron_left;
    container.addEventListener('click', () => {
      const page = getPage() - 1;
      if (page === 0) {
        this.setDisabledStatusToControls('prev', true);
      }
      localStorageTextbook.addItemLocalStorage(
        createQuery(
          getGroup(),
          page,
        ),
      );
      this.changePageButton();
      changeList();
      this.setDisabledStatusToControls('next', false);
    });
    return container;
  }

  createControlButtonDoublePrev() {
    const container = Pagination.createButton('');
    container.name = 'double_prev';
    if (this.page < this.step) {
      container.disabled = true;
      container.classList.add(Pagination.textObject.disableMod);
    } else container.classList.add(`${Pagination.textObject.hoverMod}${this.color}`);
    container.innerHTML = svg.chevron_double_left;
    container.addEventListener('click', () => {
      localStorageTextbook.addItemLocalStorage(
        createQuery(
          getGroup(),
          (getPage() - this.step - 1),
        ),
      );
      changeList();
      const container = [
        <HTMLDivElement>document.querySelector('.pagination-top'),
        <HTMLDivElement>document.querySelector('.pagination-bottom')];
      container.forEach((elem) => {
        elem.innerHTML = '';
        elem.append(new Pagination().render());
      });
    });
    return container;
  }

  createControlButtonNext() {
    const container = Pagination.createButton('');
    container.name = 'next';
    container.dataset.count = (this.pages - this.page).toString();
    if (this.page === this.pages) {
      container.disabled = true;
      container.classList.add(Pagination.textObject.disableMod);
    } else container.classList.add(`${Pagination.textObject.hoverMod}${this.color}`);
    container.innerHTML = svg.chevron_right;
    container.addEventListener('click', () => {
      const page = getPage() + 1;
      if (page === this.pages) {
        this.setDisabledStatusToControls('next', true);
      }
      localStorageTextbook.addItemLocalStorage(
        createQuery(
          getGroup(),
          page,
        ),
      );
      this.changePageButton();
      changeList();
      this.setDisabledStatusToControls('prev', false);
      // const hh = <HTMLButtonElement>document.querySelector('button[name]="prev"');
      // if (hh.dataset.count)
      const prevCount = <NodeListOf<HTMLButtonElement>>document.getElementsByName('prev');
      const nextCount = <NodeListOf<HTMLButtonElement>>document.getElementsByName('next');
      prevCount.forEach((elem) => {
        elem.dataset.count = (Number(elem.dataset.count) + 1).toString();
      });
      nextCount.forEach((elem) => {
        elem.dataset.count = (Number(elem.dataset.count) - 1).toString();
      });
    });
    return container;
  }

  createControlButtonDoubleNext() {
    const container = Pagination.createButton('');
    container.name = 'doubleNext';

    if ((this.pages - this.page) <= this.step) {
      container.disabled = true;
      container.className = `${Pagination.textObject.itemClass} ${Pagination.textObject.disableMod}`;
    } else {
      container.classList.add(`${Pagination.textObject.hoverMod}${this.color}`);
    }
    container.innerHTML = svg.chevron_double_right;
    container.addEventListener('click', () => {
      localStorageTextbook.addItemLocalStorage(
        createQuery(
          getGroup(),
          (getPage() + this.step + 1),
        ),
      );
      changeList();
      const container = [
        <HTMLDivElement>document.querySelector('.pagination-top'),
        <HTMLDivElement>document.querySelector('.pagination-bottom')];
      container.forEach((elem) => {
        elem.innerHTML = '';
        elem.append(new Pagination().render());
      });
    });
    return container;
  }

  checkActivePage(page: number | string, btn: HTMLButtonElement) {
    if (typeof page === 'string') btn.classList.add(`${Pagination.textObject.hoverMod}${this.color}`);
    if (page === getPage()) {
      // btn.disabled = true;
      btn.classList.add(`${Pagination.textObject.activeMod}${this.color}`);
    } else if (btn.disabled === false) {
      btn.classList.add(`${Pagination.textObject.hoverMod}${this.color}`);
    }
    return btn;
  }

  checkLastPage(): number {
    const start = this.page;
    const end = start + this.step;
    const lastPage = this.pages;
    if (end > lastPage) {
      return lastPage;
    }
    return end;
  }

  changePageButton() {
    const btn = <NodeListOf<HTMLButtonElement>>document.getElementsByName('page');
    btn.forEach((item) => {
      item.classList.remove(`${Pagination.textObject.activeMod}${this.color}`);
      this.checkActivePage(Number(item.dataset.page), item);
        // item.disabled = true;
    })
  }

  setDisabledStatusToControls(name: string, status: boolean) {
    const btn = <NodeListOf<HTMLButtonElement>>document.getElementsByName(name);
    btn.forEach((elem) => {
      elem.disabled = status;
      this.toggleClass(status, elem);
    });
  }

  toggleClass(status: boolean, container: HTMLButtonElement) {
    status
      ? container.className = `${Pagination.textObject.itemClass} ${Pagination.textObject.disableMod}`
      : container.className = `${Pagination.textObject.itemClass} ${Pagination.textObject.hoverMod}${this.color}`;
  }

  generateButtons() {
    const arr = [];
    if (this.page === 0) {
      for (let i = this.page; i <= this.checkLastPage(); i++) {
        arr.push(this.checkActivePage(i, this.createPageButton(i)));
      }
    } else if (this.page === this.pages) {
      for (let i = this.pages - this.step; i <= this.pages; i++) {
        arr.push(this.checkActivePage(i, this.createPageButton(i)));
      }
    } else {
      for (let i = this.page; i <= this.checkLastPage(); i++) {
        arr.push(this.checkActivePage(i, this.createPageButton(i)));
      }
    }
    return arr;
  }

  generateButtonsTest(start: number) {
    const arr = [];
    // if (this.page === 0) {
    //   for (let i = this.page; i <= this.checkLastPage(); i++) {
    //     arr.push(this.checkActivePage(i, this.createPageButton(i)));
    //   }
    // } else if (this.page === this.pages) {
    //   for (let i = this.pages - this.step; i <= this.pages; i++) {
    //     arr.push(this.checkActivePage(i, this.createPageButton(i)));
    //   }
    // } else {
    for (let i = start; i <= this.checkLastPage(); i++) {
      arr.push(this.checkActivePage(i, this.createPageButton(i)));
    }
    // }
    return arr;
  }

  render() {
    this.container.append(
      this.createControlButtonDoublePrev(),
      this.createControlButtonPrev(),
      ...this.generateButtons(),
      this.createControlButtonNext(),
      this.createControlButtonDoubleNext(),
    );
    return this.container;
  }
}
