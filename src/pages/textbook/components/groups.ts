import { groupData } from '../../../common/groups';
import { Block } from './blockTemplate';

export class Groups extends Block {
  static classNames = {
    mainContainer: 'groups_container',
    listClass: 'groups_list',
    titleClass: 'groups_title',
    itemClass: 'groups_item',
    itemLinkClass: 'groups__link',
    bgModificationClass: 'bg-',
    colorModificationClass: 'color-',
  };

  constructor(protected color: string) {
    super(color);
    this.container.className = Groups.classNames.mainContainer;
  }

  createTitle() {
    const container = document.createElement('div');
    container.className = `${Groups.classNames.titleClass} ${Groups.classNames.colorModificationClass + this.color}`;
    container.textContent = 'Groups';
    return container;
  }

  createGroup() {
    const container = document.createElement('ul');
    container.className = Groups.classNames.listClass;
    for (let i = 0; i < groupData.length; i++) {
      container.append(this.createItem(i + 1, groupData[i]));
    }
    return container;
  }

  createItem(group: number, color: string) {
    const item = document.createElement('li');
    item.className = Groups.classNames.itemClass;
    item.append(this.createLink(group, color));
    return item;
  }

  createLink(group: number, color: string) {
    const container = document.createElement('button');
    container.className = `${Groups.classNames.itemLinkClass} ${Groups.classNames.bgModificationClass}${color}`;
    container.textContent = group.toString();
    container.dataset.group = group.toString();
    return container;
  }

  render() {
    this.container.append(this.createTitle(), this.createGroup());
    return this.container;
  }
}
