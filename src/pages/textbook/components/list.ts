import { getUserId } from '../../../modules/user/getUserId';
import { getUserToken } from '../../../modules/user/getUserToken';
import { IWord } from '../../../types/types';
import api from '../../../utils/api';
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
      this.words = api.getWords(this.data.getQuery());
    } else {
      this.words = api.getUserAggregatedWords(
        getUserId(),
        getUserToken(),
        this.data.getQuery(),
      ).then((val) => val[0].paginatedResults);
    }
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
