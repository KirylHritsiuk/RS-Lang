import { Block } from "../textbook/components/blockTemplate";

export class DictionaryButton extends Block {
  static textObject = {
    containerClass: 'filter__block',
  };

  constructor(protected name: string) {
    super();
    this.container = document.createElement('button');
    this.container.id = `${data.word}-${name}`;
    this.container.textContent = `${name} words`;
    this.container.className = DictionaryButton.textObject.containerClass;
    this.container.addEventListener('click', () => {
      this.container.classList.add(`${Block.modificationClass.active}${name}');
      document.getElementById(`${this.data.word}`)?.classList.toggle(`${Block.modificationClass.bgModificationClass}${name}`);
    });
  }
}
