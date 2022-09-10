import { groupData } from '../../../../../common/groups';
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
      this.container.parentElement!.classList.add(Block.modificationClass.displayNone);
      document.getElementById(`${this.data.word}`)?.classList.toggle(`${Block.modificationClass.bg}${name}`);
    });
  }
}
