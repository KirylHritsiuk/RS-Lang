import { Block } from '../../blockTemplate';

export class DictionaryButton extends Block {
  static textObject = {
    containerClass: 'filter__block',
  };

  constructor(protected name: string) {
    super();
    this.container = document.createElement('button');
    this.container.dataset.name = name;
    this.container.textContent = `${name} words`;
    this.container.className = DictionaryButton.textObject.containerClass;
    this.container.addEventListener('click', () => {
      this.container.setAttribute('disabled', 'disabled');
      this.container.classList.add(`${Block.modificationClass.active}${name}`);
    });
  }
}
