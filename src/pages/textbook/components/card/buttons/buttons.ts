import { IWord } from '../../../../../types/types';
import { Block } from '../../blockTemplate';
import api from '../../../../../utils/api';
import { Button } from './button';

export class CardButtons extends Block {
  static textObject = {
    containerClass: 'card-buttons',
    difficultHard: 'hard',
    difficultHardRu: 'сложно',
    difficultEasy: 'easy',
    difficultEasyRu: 'легко',
    difficultNormal: 'normal',
  };

  protected difficult: HTMLElement;

  protected easy: HTMLElement;

  constructor(protected wordData: IWord) {
    super();
    this.container.className = CardButtons.textObject.containerClass;
    if (this.user === '' && (wordData.userWord === undefined
        || wordData.userWord?.difficulty !== CardButtons.textObject.difficultNormal)) {
      this.container.classList.add(Block.modificationClass.displayNone);
    } else if (wordData.userWord?.difficulty === CardButtons.textObject.difficultEasy
        || wordData.userWord?.difficulty === CardButtons.textObject.difficultHard) {
      this.container.classList.add(Block.modificationClass.displayNone);
    }
    this.difficult = new Button(
      wordData,
      CardButtons.textObject.difficultHard,
      CardButtons.textObject.difficultHardRu,
    ).render();
    this.easy = new Button(
      wordData,
      CardButtons.textObject.difficultEasy,
      CardButtons.textObject.difficultEasyRu,
    ).render();
    this.container.append(this.difficult, this.easy);
    [this.difficult, this.easy].forEach((btn) => {
      btn.addEventListener('click', async () => {
        this.addedCard();
        this.changeLearnPage();
        if (wordData.userWord === undefined) {
          await api.createUserWord(
            this.user,
            this.token,
            wordData._id,
            { difficulty: btn.dataset.category! },
          );
        } else {
          await api.updateUserWord(
            this.user,
            wordData._id,
            this.token,
            { difficulty: btn.dataset.category! },
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
