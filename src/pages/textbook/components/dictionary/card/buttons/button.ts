import { getUserId } from '../../../../../../modules/user/getUserId';
import { getUserToken } from '../../../../../../modules/user/getUserToken';
import { IWord } from '../../../../../../types/types';
import api from '../../../../../../utils/api';
import { Block } from '../../../blockTemplate';

export class DeleteBtn extends Block {
  static textObject = {
    containerClass: 'button-card',
    contentText: 'удалить',
    contentClass: 'delete',
  };

  constructor(protected wordData: IWord, protected name: string) {
    super();
    this.container = document.createElement('button');
    this.container.textContent = DeleteBtn.textObject.contentText;
    this.container.className = DeleteBtn.textObject.containerClass;
    this.container.classList.add(`${DeleteBtn.textObject.containerClass}-${DeleteBtn.textObject.contentClass}`);
    this.container.classList.add(`${DeleteBtn.textObject.containerClass}_${DeleteBtn.modificationClass.sizeL}`);
    this.container.addEventListener('click', () => {
      const card = <HTMLDivElement>document.getElementById(wordData.word);
      card.remove();
      api.updateUserWord(getUserId(), wordData._id, getUserToken(), { difficulty: name });
    });
  }
}
