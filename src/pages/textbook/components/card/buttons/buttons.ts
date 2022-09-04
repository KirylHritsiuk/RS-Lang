import { IWord } from '../../../../../types/types';
import { Block } from '../../blockTemplate';

export class CardButtons extends Block {
  static textObject = {
    containerClass: 'card-buttons ds-none',
    difficultName: 'difficult',
    easyName: 'easy',
  };

  constructor(protected data: IWord) {
    super();
    this.container.className = CardButtons.textObject.containerClass;
    this.container.addEventListener('click', (e) => {
      const button = <HTMLButtonElement>e.target;
      switch (button.getAttribute('name')) {
        case CardButtons.textObject.difficultName:
          break;
        case CardButtons.textObject.easyName:
          break;
      }
    });
  }

  render(): HTMLElement {
    this.container.innerHTML = `<button class="button-card button-card_large bg-${this.color}" data-set-color="${this.color}" name="${CardButtons.textObject.difficultName}">${CardButtons.textObject.difficultName}</button>
       <button class="button-card button-card_large button-card-easy name="${CardButtons.textObject.easyName}">${CardButtons.textObject.easyName}</button>`;
    return this.container;
  }
}
