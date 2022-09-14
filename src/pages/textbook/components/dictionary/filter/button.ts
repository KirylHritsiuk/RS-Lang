import dictionary from '../../../../../modules/dictionary/dictionary';
import { Block } from '../../blockTemplate';
import { Filter } from './filter';

export class DictionaryButton extends Block {
  static textObject = {
    containerClass: 'filter__block',
  };

  constructor(protected name: string) {
    super();
    this.container = document.createElement('button');
    this.container.dataset.name = name;
    this.container.className = `${DictionaryButton.textObject.containerClass} ${Block.modificationClass.hover}${this.color}`;

    if (name === 'hard') {
      this.container.textContent = 'cложные слова';
    } else {
      this.container.textContent = 'легкие слова';
    }
    if (dictionary.getItemLocalStorage() !== null) {
      if (dictionary.getItemLocalStorage()![0].value === name) {
        this.container.setAttribute('disabled', 'disabled');
        this.container.classList.add(`${Block.modificationClass.active}${name}`);
        this.container.classList.add(`${Block.modificationClass.boxShadow}${name}`);
      }
    } else if (dictionary.getItemLocalStorage() === null) {
      if (name === 'hard') {
        this.container.setAttribute('disabled', 'disabled');
        this.container.classList.add(`${Block.modificationClass.active}${name}`);
        this.container.classList.add(`${Block.modificationClass.boxShadow}${name}`);
      }
    }
    this.container.addEventListener('click', () => {
      this.container.setAttribute('disabled', 'disabled');
      this.container.classList.add(`${Block.modificationClass.active}${name}`);
      this.container.classList.add(`${Block.modificationClass.boxShadow}${name}`);
    });
  }
}
