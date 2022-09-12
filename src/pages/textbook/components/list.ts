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

  protected data: Promise<IWord[]>;

  constructor() {
    super();
    this.container.className = List.textObject.containerClass;
    if (this.user === '') {
      this.data = api.getWords(Block.textbookQueryData.getQuery());
    } else {
      this.data = api.getUserAggregatedWords(
        getUserId(),
        getUserToken(),
        Block.textbookQueryData.getQuery(),
      ).then((val) => val[0].paginatedResults);
    }
  }

  get words() {
    return this.data; 
  }

  render() {
    this.container.innerHTML = '';
    this.data
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
