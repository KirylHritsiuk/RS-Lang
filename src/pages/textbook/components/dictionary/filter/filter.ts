import { Block } from '../../blockTemplate';
import { List } from '../../list';
import { DictionaryButton } from './button';

export class Filter extends Block {
  static textObject = {
    containerClass: 'card-buttons',
    categoryAll: 'all',
    categoryHard: 'hard',
    categoryEasy: 'easy',
  };

  protected all: HTMLElement;

  protected hard: HTMLElement;

  protected easy: HTMLElement;

  constructor() {
    super();
    this.container.className = 'filter-container';
    this.all = new DictionaryButton(Filter.textObject.categoryAll).render();
    this.hard = new DictionaryButton(Filter.textObject.categoryHard).render();
    this.easy = new DictionaryButton(Filter.textObject.categoryEasy).render();
    [this.all, this.hard, this.easy].forEach((el) => {
      el.addEventListener('click', (e) => {
        const btn = <HTMLButtonElement>e.target;
        const cards = document.querySelectorAll(`.bg-${btn.dataset.name}`);
        const cardsEasy = document.querySelectorAll(`.bg-${Filter.textObject.categoryEasy}`);
        const cardsHard = document.querySelectorAll(`.bg-${Filter.textObject.categoryHard}`);
        const list = <HTMLDivElement>document.querySelector(`.${List.textObject.containerClass}`);
        console.log('list', list, 'cards', cards);
        btn.setAttribute('disabled', 'disabled');
        switch (btn.dataset.name) {
          case (Filter.textObject.categoryAll):
            [this.easy, this.hard].forEach((el) => {
              el.className = DictionaryButton.textObject.containerClass;
              el.removeAttribute('disabled');
            });
            Array.from(list.children).forEach((el) => {
              el.classList.remove(Block.modificationClass.displayNone);
            });
            break;
          case (Filter.textObject.categoryHard):
            [this.all, this.easy].forEach((el) => {
              el.className = DictionaryButton.textObject.containerClass;
              el.removeAttribute('disabled');
            });
            cardsEasy.forEach((el) => el.classList.add(Block.modificationClass.displayNone));
            cardsHard.forEach((el) => el.classList.remove(Block.modificationClass.displayNone));
            break;
          case (Filter.textObject.categoryEasy):
            [this.all, this.hard].forEach((el) => {
              el.className = DictionaryButton.textObject.containerClass;
              el.removeAttribute('disabled');
            });
            cardsEasy.forEach((el) => el.classList.remove(Block.modificationClass.displayNone));
            cardsHard.forEach((el) => el.classList.add(Block.modificationClass.displayNone));
            break;
          default: console.log('filter no btn click');
        }
      });
    });
    this.container.append(this.all, this.hard, this.easy);
  }
}
