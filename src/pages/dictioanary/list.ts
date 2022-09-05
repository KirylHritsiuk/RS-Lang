import { getUserId } from '../../modules/user/getUserId';
import { getUserToken } from '../../modules/user/getUserToken';
import { IUserWordSchema, IWord} from '../../types/types';
import api from '../../utils/api';
import { WordCard } from '../textbook/components/card/card';
import { List } from '../textbook/components/list';

export class DictionaryList extends List {
  protected aggData: Promise<IUserWordSchema[]>;

  constructor() {
    super();
    this.container.className = 'list_container';
    this.aggData = api.getUserWords(getUserId(), getUserToken());
    console.log('dic list', this.aggData);
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
            const card = new WordCard(val[0]);
            this.container.append(card.render());
          });
        });
      });
    return this.container;
  }
}
