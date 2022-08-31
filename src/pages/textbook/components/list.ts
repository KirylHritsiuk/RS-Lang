import { groupQuery, pageQuery } from '../../../common/query';
import api from '../../../utils/api';
import { Block } from './blockTemplate';
import { IWord, WordCard } from './card';

export class List extends Block {
  protected data: Promise<IWord[]>;

  constructor(group: number) {
    super(group);
    this.group = group;
    this.container.className = 'list_container';
    this.data = api.getWords([groupQuery, pageQuery]);
  }

  render() {
    this.container.innerHTML = '';
    this.data
      .then((val) => {
        const loader = <HTMLDivElement>document.getElementById('loader');
        loader.remove();
        val.forEach((wordData) => {
          const card = new WordCard(wordData, this.group);
          this.container.append(card.render());
        });
      });
    return this.container;
  }
}
