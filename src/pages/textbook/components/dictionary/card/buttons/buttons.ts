import { IWord } from '../../../../../../types/types';
import { Block } from '../../../blockTemplate';
import { CardButtons } from '../../../card/buttons/buttons';
import { DeleteBtn } from './button';

export class CardButton extends Block {
  static textObject = {
    containerClass: 'card-buttons',
    difficultNormal: 'normal',
  };

  protected delete: HTMLElement;

  constructor(protected data: IWord) {
    super();
    this.container.className = CardButtons.textObject.containerClass;
    this.delete = new DeleteBtn(data, CardButton.textObject.difficultNormal).render();
    this.container.append(this.delete);
  }
}
