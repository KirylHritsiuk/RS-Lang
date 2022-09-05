import { Block } from '../../blockTemplate';
import { List } from '../../list';
import { DictionaryButton } from './button';
import dictionaryLocal from '../../../../../modules/dictionary/dictionary';
import { IQueryParameters } from '../../../../../types/types';
import { DictionaryQuery } from '../../../../../common/query';

export class Filter extends Block {
  static textObject = {
    containerClass: 'card-buttons',
    categoryAll: 'all',
    categoryHard: 'hard',
    categoryEasy: 'easy',
  };

  // protected all: HTMLElement;

  // protected hard: HTMLElement;

  // protected easy: HTMLElement;

  static category = dictionaryLocal.getItemLocalStorage();

  static all = new DictionaryButton(Filter.textObject.categoryAll).render();

  static hard = new DictionaryButton(Filter.textObject.categoryHard).render();

  static easy = new DictionaryButton(Filter.textObject.categoryEasy).render();

  constructor() {
    super();
    this.container.className = 'filter-container';

    [Filter.all, Filter.hard, Filter.easy].forEach((el) => {
      el.addEventListener('click', (e) => {
        const btn = <HTMLButtonElement>e.target;
        const cardsEasy = document.querySelectorAll(`.bg-${Filter.textObject.categoryEasy}`);
        const cardsHard = document.querySelectorAll(`.bg-${Filter.textObject.categoryHard}`);
        const list = <HTMLDivElement>document.querySelector(`.${List.textObject.containerClass}`);
        btn.setAttribute('disabled', 'disabled');
        switch (btn.dataset.name) {
          case (Filter.textObject.categoryAll):
            [Filter.easy, Filter.hard].forEach((el) => {
              el.className = DictionaryButton.textObject.containerClass;
              el.removeAttribute('disabled');
            });
            Array.from(list.children).forEach((el) => {
              el.classList.remove(Block.modificationClass.displayNone);
            });
            DictionaryQuery.set(Filter.textObject.categoryAll);
            dictionaryLocal.addItemLocalStorage([DictionaryQuery]);
            break;
          case (Filter.textObject.categoryHard):
            [Filter.all, Filter.easy].forEach((el) => {
              el.className = DictionaryButton.textObject.containerClass;
              el.removeAttribute('disabled');
            });
            cardsEasy.forEach((el) => el.classList.add(Block.modificationClass.displayNone));
            cardsHard.forEach((el) => el.classList.remove(Block.modificationClass.displayNone));
            DictionaryQuery.set(Filter.textObject.categoryHard);
            dictionaryLocal.addItemLocalStorage([DictionaryQuery]);
            break;
          case (Filter.textObject.categoryEasy):
            [Filter.all, Filter.hard].forEach((el) => {
              el.className = DictionaryButton.textObject.containerClass;
              el.removeAttribute('disabled');
            });
            cardsEasy.forEach((el) => el.classList.remove(Block.modificationClass.displayNone));
            cardsHard.forEach((el) => el.classList.add(Block.modificationClass.displayNone));
            DictionaryQuery.set(Filter.textObject.categoryEasy);
            dictionaryLocal.addItemLocalStorage([DictionaryQuery]);
            break;
          default: console.log('filter no btn click');
        }
      });
    });
    this.container.append(Filter.all, Filter.hard, Filter.easy);
    Filter.checkButton();
  }

  static checkButton() {
    if (Filter.category === null || Filter.category[0].value === Filter.textObject.categoryAll) {
      Filter.all.click();
    } else if (Filter.category[0].value === Filter.textObject.categoryHard) {
      Filter.hard.click();
    } else if (Filter.category[0].value === Filter.textObject.categoryEasy) {
      Filter.easy.click();
    }
  }
}
