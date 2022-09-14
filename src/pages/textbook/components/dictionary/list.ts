import { getUserId } from '../../../../modules/user/getUserId';
import { getUserToken } from '../../../../modules/user/getUserToken';
import { IUserWordSchema } from '../../../../types/types';
import api from '../../../../utils/api';
import { List } from '../list';
import { DictionaryCard } from './card/card';

export class DictionaryList extends List {
  protected aggData: Promise<IUserWordSchema[]>;

  constructor() {
    super();
    this.container.className = 'list_container';
    this.aggData = api.getUserWords(getUserId(), getUserToken());
  }

  render() {
    this.container.innerHTML = '';
    this.aggData
      .then((item) => item.map((el) => api.getUserAggregatedWordById(
        getUserId(),
        getUserToken(),
        el.wordId!,
      )))
      .then((val) => {
        const loader = <HTMLDivElement>document.getElementById('loader');
        loader.remove();
        val.forEach((wordData) => {
          wordData.then((val) => {
            if (val[0].userWord?.difficulty !== 'normal') {
              const card = new DictionaryCard(val[0]);
              this.container.append(card.render());
            }
          });
        });
      });
    return this.container;
  }
}
