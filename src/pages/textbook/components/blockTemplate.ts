import { groupData } from '../../../common/groups';

export abstract class Block {
  protected container: HTMLElement;

  protected color: string;

  protected group: number;

  static textObject = {
    containerClass: '',
  };

  static modificationClass = {
    bgModificationClass: 'bg-',
    colorModificationClass: 'color-',
    borderModificationClass: 'border-',
    borderLeftModificationClass: 'border-left-',
    hoverModificationClass: 'hover-',
  };

  constructor(group: number, tag: string = 'div') {
    this.container = document.createElement(tag);
    this.container.className = Block.textObject.containerClass;
    this.color = groupData[group];
    this.group = group;
  }

  render() {
    return this.container;
  }
}
