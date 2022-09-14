import { IWord } from '../../../../../types/types';
import { Block } from '../../blockTemplate';

export class Button extends Block {
  static textObject = {
    containerClass: 'button-card',
  };

  constructor(protected wordData: IWord, protected name: string, protected text: string) {
    super();
    this.container = document.createElement('button');
    this.container.id = `${wordData.word}-${name}`;
    this.container.textContent = text;
    this.container.dataset.category = name;
    this.container.className = Button.textObject.containerClass;
    this.container.classList.add(`${Button.textObject.containerClass}-${name}`);
    this.container.classList.add(`${Button.textObject.containerClass}_${Block.modificationClass.sizeL}`);
    this.container.addEventListener('click', () => {
      this.container.parentElement!.classList.add(Block.modificationClass.displayNone);
      document.getElementById(`${this.wordData.word}`)?.classList.toggle(`${Block.modificationClass.bg}${name}`);
    });
  }
}
