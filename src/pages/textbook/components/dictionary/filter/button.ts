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
    if (name === 'hard') {
      this.container.textContent = 'cложные слова';
    } else {
      this.container.textContent = 'легкие слова';
    }
    this.container.className = DictionaryButton.textObject.containerClass;
    this.container.addEventListener('click', () => {
      this.container.setAttribute('disabled', 'disabled');
      this.container.classList.add(`${Block.modificationClass.active}${name}`);
    });
  }
}
