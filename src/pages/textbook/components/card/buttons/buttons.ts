import { IWord } from '../../../../../types/types';
import { Block } from '../../blockTemplate';
import api from '../../../../../utils/api';
import { Button } from './button';

export class CardButtons extends Block {
  static textObject = {
    containerClass: 'card-buttons',
    difficultHard: 'hard',
    difficultEasy: 'easy',
    difficultNormal: 'normal',
  };

  protected difficult: HTMLElement;

  protected easy: HTMLElement;

  constructor(protected data: IWord) {
    super();
    this.container.className = CardButtons.textObject.containerClass;
    if (this.user === ''
    || data.userWord?.difficulty !== CardButtons.textObject.difficultNormal) {
      this.container.classList.add(Block.modificationClass.displayNone);
    }
    this.difficult = new Button(data, CardButtons.textObject.difficultHard).render();
    this.easy = new Button(data, CardButtons.textObject.difficultEasy).render();
    this.container.append(this.difficult, this.easy);
    [this.difficult, this.easy].forEach((btn) => {
      btn.addEventListener('click', async () => {
        this.addedCard();
        if (data.userWord === undefined) {
          await api.createUserWord(
            this.user,
            this.token,
            data._id,
            { difficulty: (btn.textContent as string) },
          );
        } else {
          await api.updateUserWord(
            this.user,
            data._id,
            this.token,
            { difficulty: (btn.textContent as string) },
          );
        }
      });
    });
  }

  addedCard() {
    this.easy.classList.add(Block.modificationClass.bgDisabled);
    this.difficult.classList.add(Block.modificationClass.bgDisabled);
    (this.difficult as HTMLButtonElement).disabled = true;
    (this.easy as HTMLButtonElement).disabled = true;
  }
}
