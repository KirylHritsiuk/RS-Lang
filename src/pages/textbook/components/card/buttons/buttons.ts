import user from '../../../../../modules/user/localStorageUser';
import { IWord } from '../../../../../types/types';
import { Block } from '../../blockTemplate';
import { WordCard } from '../card';
import api from '../../../../../utils/api';
import { Button } from './button';

export class CardButtons extends Block {
  static textObject = {
    containerClass: 'card-buttons',
    difficultName: 'difficult',
    easyName: 'easy',
  };

  protected difficult: HTMLElement;

  protected easy: HTMLElement;

  constructor(protected data: IWord) {
    super();
    this.container.className = CardButtons.textObject.containerClass;
    if (user.getItemLocalStorage() === null) {
      this.container.classList.add(Block.modificationClass.displayNone);
    }
    this.difficult = new Button(data, CardButtons.textObject.difficultName).render();
    this.easy = new Button(data, CardButtons.textObject.easyName).render();
    this.container.append(this.difficult, this.easy);
    this.difficult.addEventListener('click', () => {
      this.easy.classList.remove(`${Block.modificationClass.bgModificationClass}${CardButtons.textObject.easyName}`);
      this.difficult.classList.add(Block.modificationClass.displayNone);
      // this.easy.classList.remove(`${Block.modificationClass.bgDisabled}`);
      (this.easy as HTMLButtonElement).disabled = false;
    });
    this.easy.addEventListener('click', () => {
      // this.difficult.classList.remove(`${Block.modificationClass.bgModificationClass}${CardButtons.textObject.easyName}`);
      this.difficult.classList.remove(`${Block.modificationClass.bgDisabled}`);
      this.container.classList.remove(`${Button.modificationClass.bgModificationClass}${CardButtons.textObject.difficultName}`);
      this.difficult.classList.remove(Block.modificationClass.displayNone);
    });
    // this.container.addEventListener('click', (e) => {
    //   const button = <HTMLButtonElement>e.target;
    //   const parent = document.getElementById(data.word);
    //   switch (button.getAttribute('name')) {
    //     case CardButtons.textObject.difficultName:
    //       parent?.classList.add(`${Block.modificationClass.bgModificationClass}${CardButtons.textObject.difficultName}`);
    //       parent?.classList.remove(`${Block.modificationClass.bgModificationClass}${CardButtons.textObject.easyName}`);
    //       button.disabled = true;
    //       button.classList.add(Block.modificationClass.bgDisabled);
    //       console.log(button);
    //       // api.updateUserWord();
    //       break;
    //     case CardButtons.textObject.easyName:
    //       parent?.classList.add(`${Block.modificationClass.bgModificationClass}${CardButtons.textObject.easyName}`);
    //       parent?.classList.remove(`${Block.modificationClass.bgModificationClass}${CardButtons.textObject.difficultName}`);
    //       console.log(button);
    //       button.disabled = true;
    //       button.classList.add(Block.modificationClass.bgDisabled);
    //       // eslint-disable-next-line no-case-declarations
    //       const btnDif = <HTMLButtonElement>button.previousElementSibling;
    //       btnDif.disabled = false;
    //       button.previousElementSibling?.classList.remove(Block.modificationClass.bgDisabled);
    //       break;
    //     default:
    //       console.log('button def');
    //   }
    // });
  }

  // render(): HTMLElement {
  //   this.container.innerHTML = `<button id="${this.data.word}-${CardButtons.textObject.difficultName}" class="button-card button-card_large bg-${this.color}" name="${CardButtons.textObject.difficultName}">${CardButtons.textObject.difficultName}</button>
  //      <button id="${this.data.word}-${CardButtons.textObject.easyName}" class="button-card button-card_large button-card-easy" name="${CardButtons.textObject.easyName}">${CardButtons.textObject.easyName}</button>`;
  //   return this.container;
  // }
}
