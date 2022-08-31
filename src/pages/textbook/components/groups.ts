import { groupData } from '../../../common/groups';
import { groupQuery, pageQuery } from '../../../common/query';
import localStorage from '../../../modules/textbook/localStorageTextbook';
import { Block } from './blockTemplate';
import { List } from './list';
import { Loader } from './loader';

export class Groups extends Block {
  static classNames = {
    mainContainer: 'groups_container',
    listClass: 'groups_list',
    titleClass: 'groups_title',
    itemClass: 'groups_item',
    itemLinkClass: 'groups__link',
  };

  static toDefaultItem() {
    const groupsList = <HTMLCollectionOf<HTMLElement>>document
      .getElementsByClassName(Groups.classNames.itemClass);
    for (let i = 0; i < groupsList.length; i++) {
      groupsList[i].className = Groups.classNames.itemClass;
    }
  }

  constructor(group: number) {
    super(group);
    this.container.className = Groups.classNames.mainContainer;
  }

  createTitle() {
    const container = document.createElement('div');
    container.className = `${Groups.classNames.titleClass} ${Block.modificationClass.colorModificationClass + this.color}`;
    container.textContent = 'Groups';
    return container;
  }

  createGroup() {
    const container = document.createElement('ul');
    container.className = Groups.classNames.listClass;
    for (let i = 0; i < groupData.length; i++) {
      container.append(this.createItem(i, groupData[i]));
    }
    return container;
  }

  createItem(group: number, color: string) {
    const item = document.createElement('li');
    if (color === this.color) {
      item.className = `${Groups.classNames.itemClass} ${Groups.modificationClass.borderModificationClass + color}`;
    } else {
      item.className = Groups.classNames.itemClass;
    }
    item.append(this.createLink(group, color));
    return item;
  }

  createLink(group: number, color: string) {
    const container = document.createElement('button');
    container.className = `${Groups.classNames.itemLinkClass} ${Block.modificationClass.bgModificationClass}${color}`;
    container.textContent = (group + 1).toString();
    container.dataset.group = group.toString();
    container.addEventListener('click', () => {
      groupQuery.value = group;
      localStorage.addItemLocalStorage([groupQuery, pageQuery]);
      const list = new List(group);
      const loader = new Loader(group);
      const cont = <HTMLElement>document.querySelector('.words-list');
      cont.innerHTML = '';
      cont.append(
        loader.render(),
        list.render(),
      );
      Groups.toDefaultItem();
      container
        .parentElement?.classList
        .add(Block.modificationClass.borderModificationClass + color);
    });
    return container;
  }

  render() {
    this.container.append(this.createTitle(), this.createGroup());
    return this.container;
  }
}
