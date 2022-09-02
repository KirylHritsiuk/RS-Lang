import { createQuery } from '../../../modules/textbook/queryTextbook';
import { IWord } from '../../../types/types';
import api from '../../../utils/api';
import { Block } from './blockTemplate';
import { WordCard } from './card';

export class List extends Block {
  protected data: Promise<IWord[]>;

  constructor() {
    super();
    this.container.className = 'list_container';
    this.data = api.getWords(createQuery());
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
