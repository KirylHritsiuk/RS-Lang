import { groupData } from '../../../common/groups';
import textbookQueryData, { TextbookQueryData } from '../../../modules/textbook/textbookQueryData';
import { getUserId } from '../../../modules/user/getUserId';
import { getUserToken } from '../../../modules/user/getUserToken';
import dictionaryLocal from '../../../modules/dictionary/dictionary';

export abstract class Block {
  protected container: HTMLElement;

  protected color: string;

  protected group: number;

  protected page: number;

  protected filter: string | number;

  protected user: string;

  protected token: string;

  static textObject = {
    containerClass: '',
  };

  protected data: TextbookQueryData;

  static modificationClass = {
    bg: 'bg-',
    color: 'color-',
    border: 'border-',
    borderLeft: 'border-left-',
    borderTop: 'border-top-',
    boxShadow: 'box-shadow-',
    hover: 'hover-',
    displayNone: 'ds-none',
    bgDisabled: 'bg-disabled',
    active: 'active-',
    sizeL: 'large',
  };

  constructor() {
    this.container = document.createElement('div');
    this.container.className = Block.textObject.containerClass;
    this.data = textbookQueryData;
    this.group = this.data.getGroupe();
    this.page = this.data.getPage();
    this.filter = this.data.getFilter();
    this.user = getUserId();
    this.token = getUserToken();
    if (dictionaryLocal.getItemLocalStorage() === null) this.color = groupData[this.group];
    else this.color = groupData[groupData.length - 1];
  }

  isLearnedPage() {
    const cards = Array.from(document.querySelectorAll('.word-card'));
    const styleArr = cards.map((el) => el.className).filter((el) => el.includes('hard') || el.includes('easy'));
    if (styleArr.length !== 0 && (styleArr.length === cards.length)) {
      return true;
    }
    return false;
  }

  changeLearnPage() {
    const pagPage = document.querySelectorAll(`.active-${this.color}`);
    const list = document.querySelectorAll('.game_link');
    const main = document.querySelector('.main_content');
    if (this.isLearnedPage() === true) {
      list?.forEach((el) => {
        el.classList.add(Block.modificationClass.bgDisabled);
        el.setAttribute('disabled', 'disabled');
      });
      pagPage?.forEach((el) => {
        el.classList.add(Block.modificationClass.bgDisabled);
      });
      main?.classList.add(`bg-textbook-${this.color}`);
      return;
    }
    list?.forEach((el) => {
      el.classList.remove(Block.modificationClass.bgDisabled);
      el.removeAttribute('disabled');
    });
    pagPage?.forEach((el) => {
      el.classList.remove(Block.modificationClass.bgDisabled);
    });
    main?.classList.remove(`bg-textbook-${this.color}`);
  }

  render() {
    return this.container;
  }
}
