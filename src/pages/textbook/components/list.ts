import { getUserId } from '../../../modules/user/getUserId';
import { getUserToken } from '../../../modules/user/getUserToken';
import { IQueryParameters, IWord } from '../../../types/types';
import api from '../../../utils/api';
import textbook from '../../../modules/textbook/anonymous/localStorageTextbook';
import textbookUser from '../../../modules/textbook/user/localStorageTextbookUser';
import { Block } from './blockTemplate';
import { WordCard } from './card/card';

export class List extends Block {
  static textObject: { containerClass: string; } = {
    containerClass: 'list_container',
  };

  protected words: Promise<IWord[]>;

  constructor() {
    super();
    this.container.className = List.textObject.containerClass;
    if (this.user === '') {
      this.words = api.getWords(textbook.getItemLocalStorage()!);
    } else {
      this.words = api.getUserAggregatedWords(
        getUserId(),
        getUserToken(),
        textbookUser.getItemLocalStorage()!,
      ).then((val) => val[0].paginatedResults);
    }
  }

  get words() {
    return this.data; 
  }

  render() {
    this.container.innerHTML = '';
    this.words
      .then((val) => {
        const loader = <HTMLDivElement>document.getElementById('loader');
        loader.remove();
        val.forEach((wordData) => {
          const card = new WordCard(wordData);
          this.container.append(card.render());
        });
      });
    return this.container;
  }
}
