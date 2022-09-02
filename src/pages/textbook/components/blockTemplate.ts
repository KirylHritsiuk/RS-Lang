import { groupData } from '../../../common/groups';
import { getGroup } from '../../../modules/textbook/getGroup';
import { getPage } from '../../../modules/textbook/getPage';

export abstract class Block {
  protected container: HTMLElement;

  protected color: string;

  protected group: number;

  protected page: number;

  static textObject = {
    containerClass: '',
  };

  static modificationClass = {
    bgModificationClass: 'bg-',
    colorModificationClass: 'color-',
    borderModificationClass: 'border-',
    borderLeftModificationClass: 'border-left-',
    hoverModificationClass: 'hover-',
    displayNone: 'ds-none',
  };

  constructor() {
    this.container = document.createElement('div');
    this.container.className = Block.textObject.containerClass;
    this.group = getGroup();
    this.page = getPage();
    this.color = groupData[this.group];
  }

  render() {
    return this.container;
  }
}
