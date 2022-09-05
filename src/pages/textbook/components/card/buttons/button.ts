import { IWord } from '../../../../../types/types';
import { Block } from '../../blockTemplate';

export class Button extends Block {
  static textObject = {
    containerClass: 'button-card',
  };

  constructor(protected data: IWord, protected name: string) {
    super();
    this.container = document.createElement('button');
    this.container.id = `${data.word}-${name}`;
    this.container.textContent = name;
    this.container.className = Button.textObject.containerClass;
    this.container.classList.add(`${Button.textObject.containerClass}-${name}`);
    this.container.classList.add(`${Button.textObject.containerClass}_${Block.modificationClass.sizeL}`);
    this.container.addEventListener('click', () => {
    //   (this.container as HTMLButtonElement).disabled = true;
      this.container.classList.toggle(Block.modificationClass.bgDisabled);
      document.getElementById(`${this.data.word}`)?.classList.toggle(`${Block.modificationClass.bgModificationClass}${name}`);
    });
  }
}
