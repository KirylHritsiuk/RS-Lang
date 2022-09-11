import { groupData } from '../../../common/groups';
import { changeList } from '../../../utils/changeList';
import { Block } from './blockTemplate';
import { DictionaryList } from './dictionary/list';
import DictionaryLocal from '../../../modules/dictionary/dictionary';
import { DictionaryQuery } from '../../../common/query';
import { getUserId } from '../../../modules/user/getUserId';
import { Pagination } from './pagination/index';
import { PageId } from '../../../app/app';
import { Filter } from './dictionary/filter/filter';
import { GameBar } from './gamebar';

export class Groups extends Block {
  static classNames = {
    mainContainer: 'groups_container',
    listClass: 'groups_list',
    titleClass: 'groups_title',
    itemClass: 'groups_item',
    itemLinkClass: 'groups__link',
  };

  static textContent = {
    title: 'Уровень',
  };

  static toDefaultItem() {
    const groupsList = Array.from(document
      .getElementsByClassName(Groups.classNames.itemClass));
    for (let i = 0; i < groupsList.length; i++) {
      groupsList[i].className = Groups.classNames.itemClass;
    }
  }

  static replaceClasses(arr: Element[], color: string, modif: string) {
    arr.forEach((item) => {
      const pos = item.className.indexOf(modif);
      if (item.className.indexOf(Pagination.textObject.disableMod) === -1) {
        if (item.className.indexOf(`${Block.modificationClass.active}`) === -1) {
          item.className = `${item.className.slice(0, pos)} ${modif}${color}`;
        } else {
          const pos = item.className.indexOf(modif);
          item.className = `${item.className.slice(0, pos)} ${`${Block.modificationClass.active}`}${color}`;
        }
      }
    });
  }

  static changeColorTame(color: string) {
    const [
      games,
      pag,
      title,
    ] = [
      Array.from(document.querySelectorAll(`.${GameBar.textObject.linkClass}`)),
      Array.from(document.querySelectorAll(`.${Pagination.textObject.itemClass}`)),
      document.querySelector(`.${Groups.classNames.titleClass}`),
    ];

    Groups.replaceClasses(games, color, Block.modificationClass.hover);
    Groups.replaceClasses(pag, color, Pagination.textObject.hoverMod);
    const pos = title!.className.indexOf(Groups.modificationClass.color);
    title!.className = `${title!.className.slice(0, pos)} ${Groups.modificationClass.color}${color}`;
  }

  constructor() {
    super();
    this.container.className = Groups.classNames.mainContainer;
  }

  createTitle() {
    const container = document.createElement('div');
    container.className = `${Groups.classNames.titleClass} ${Block.modificationClass.color + this.color}`;
    container.textContent = Groups.textContent.title;
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
      item.className = `${Groups.classNames.itemClass} ${Groups.modificationClass.border + color}`;
    } else {
      item.className = Groups.classNames.itemClass;
    }
    item.append(this.createLink(group, color));
    return item;
  }

  createLink(group: number, color: string) {
    const container = document.createElement('button');
    container.className = `${Groups.classNames.itemLinkClass} ${Block.modificationClass.bg}${color}`;

    if (group === 6) {
      container.textContent = (group + 1).toString();
      container.addEventListener('click', () => {
        const [
          filter,
          games,
          pagination,
        ] = [
          <HTMLDivElement>document.querySelector(`.${Filter.textObject.containerClass}`),
          <HTMLDivElement>document.querySelector(`.${GameBar.textObject.containerClass}`),
          Array.from(document.querySelectorAll(`.${Pagination.textObject.containerClass}`)),
        ];
        if (DictionaryLocal.getItemLocalStorage() === null) {
          DictionaryLocal.addItemLocalStorage([DictionaryQuery]);
          games.classList.add(Block.modificationClass.displayNone);
          filter.classList.remove(Block.modificationClass.displayNone);
        }
        changeList(new DictionaryList());
        Groups.toDefaultItem();
        container
          .parentElement?.classList
          .add(Block.modificationClass.border + color);

        Groups.changeColorTame(color);

        pagination.forEach((el) => {
          el.classList.add(Block.modificationClass.displayNone);
        });
      });
      if (getUserId() === '') container.classList.add(Block.modificationClass.displayNone);
    } else {
      container.textContent = (group + 1).toString();

      if (window.location.hash.slice(1) !== PageId.minigames) {
        container.addEventListener('click', () => {
          const [
            filter,
            games,
            pagination,
          ] = [
            <HTMLDivElement>document.querySelector(`.${Filter.textObject.containerClass}`),
            <HTMLDivElement>document.querySelector(`.${GameBar.textObject.containerClass}`),
            Array.from(document.querySelectorAll(`.${Pagination.textObject.containerClass}`)),
          ];
          this.data.setGroup(group);
          this.data.updateLocal();
          this.data.updateQuery();
          changeList();
          Groups.toDefaultItem();
          container
            .parentElement?.classList
            .add(Block.modificationClass.border + color);
          Groups.changeColorTame(color);
          pagination.forEach((el) => {
            el.classList.remove(Block.modificationClass.displayNone);
          });
          if (DictionaryLocal.getItemLocalStorage() !== null) {
            DictionaryLocal.clearItemLocalStorage();
            filter?.classList.add(Block.modificationClass.displayNone);
            games.classList.remove(Block.modificationClass.displayNone);
          }
        });
      }
    }

    return container;
  }

  render() {
    this.container.append(this.createTitle(), this.createGroup());
    return this.container;
  }
}
