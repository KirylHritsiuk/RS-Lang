/* eslint-disable no-use-before-define */
import { groupData } from '../../../common/groups';
import { changeList } from '../../../utils/changeList';
import { Block } from './blockTemplate';
import { DictionaryList } from './dictionary/list';
import DictionaryLocal from '../../../modules/dictionary/dictionary';
import { DictionaryQuery } from '../../../common/query';
import { getUserId } from '../../../modules/user/getUserId';
import { Pagination } from './pagination/index';

export class Groups extends Block {
  static classNames = {
    mainContainer: 'groups_container',
    listClass: 'groups_list',
    titleClass: 'groups_title',
    itemClass: 'groups_item',
    itemLinkClass: 'groups__link',
  };

  static toDefaultItem() {
    const groupsList = Array.from(document
      .getElementsByClassName(Groups.classNames.itemClass));
    for (let i = 0; i < groupsList.length; i++) {
      groupsList[i].className = Groups.classNames.itemClass;
    }
  }

  static changeColorTame(color: string) {
    const [
      games,
      pag,
      title,
    ] = [
      Array.from(document.getElementsByName('game')),
      Array.from(document.querySelectorAll(`.${Pagination.textObject.itemClass}`)),
      document.querySelector(`.${Groups.classNames.titleClass}`),
    ];

    replaceClasses(games, color, Block.modificationClass.hoverModificationClass);
    replaceClasses(pag, color, Pagination.textObject.hoverMod);
    const pos = title!.className.indexOf(Groups.modificationClass.colorModificationClass);
    // eslint-disable-next-line no-param-reassign
    title!.className = `${title!.className.slice(0, pos)} ${Groups.modificationClass.colorModificationClass}${color}`;
  }

  constructor() {
    super();
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
    // todo  add dictionary
    if (group === 6) {
      container.textContent = 'D';
      container.addEventListener('click', () => {
        if (DictionaryLocal.getItemLocalStorage() === null) {
          DictionaryLocal.addItemLocalStorage([DictionaryQuery]);
        }
        changeList(new DictionaryList());
        Groups.toDefaultItem();
        container
          .parentElement?.classList
          .add(Block.modificationClass.borderModificationClass + color);
        Groups.changeColorTame(color);
        const pagination = Array.from(document.querySelectorAll('.pagination'));
        pagination.forEach((el) => {
          el.classList.add(Block.modificationClass.displayNone);
        });
      });
      if (getUserId() === '') container.classList.add(Block.modificationClass.displayNone);
    } else {
      container.textContent = (group + 1).toString();
      container.addEventListener('click', () => {
        Block.textbookQueryData.setGroup(group);
        Block.textbookQueryData.updateLocal();
        changeList();
        Groups.toDefaultItem();
        container
          .parentElement?.classList
          .add(Block.modificationClass.borderModificationClass + color);
        Groups.changeColorTame(color);
        const pagination = Array.from(document.querySelectorAll('.pagination'));
        pagination.forEach((el) => {
          el.classList.remove(Block.modificationClass.displayNone);
          if (DictionaryLocal.getItemLocalStorage() !== null) {
            DictionaryLocal.clearItemLocalStorage();
          }
        });
      });
    }

    return container;
  }

  render() {
    this.container.append(this.createTitle(), this.createGroup());
    return this.container;
  }
}
// todo fix change active classs
function replaceClasses(arr: Element[], color: string, modif: string) {
  arr.forEach((item) => {
    const pos = item.className.indexOf(modif);
    if (item.className.indexOf(Pagination.textObject.disableMod) === -1) {
      if (item.className.indexOf('active-') === -1) {
        item.className = `${item.className.slice(0, pos)} ${modif}${color}`;
      } else {
        const pos = item.className.indexOf(modif);
        item.className = `${item.className.slice(0, pos)} ${'active-'}${color}`;
      }
    }
  });
}
