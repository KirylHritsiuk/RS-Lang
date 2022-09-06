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

  static textbookQueryData: TextbookQueryData = textbookQueryData;

  static modificationClass = {
    bgModificationClass: 'bg-',
    colorModificationClass: 'color-',
    borderModificationClass: 'border-',
    borderLeftModificationClass: 'border-left-',
    hoverModificationClass: 'hover-',
    displayNone: 'ds-none',
    bgDisabled: 'bg-disabled',
    active: 'active-',
    sizeL: 'large',
  };

  constructor() {
    this.container = document.createElement('div');
    this.container.className = Block.textObject.containerClass;
    this.group = Block.textbookQueryData.getGroupe();
    this.page = Block.textbookQueryData.getPage();
    this.filter = Block.textbookQueryData.getFilter();
    console.log('getpage', Block.textbookQueryData.getPage());
    this.user = getUserId();
    this.token = getUserToken();
    if (dictionaryLocal.getItemLocalStorage() === null) this.color = groupData[this.group];
    else this.color = groupData[groupData.length - 1];
  }

  render() {
    return this.container;
  }
}
