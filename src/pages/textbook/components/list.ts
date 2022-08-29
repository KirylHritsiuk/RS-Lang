import { Block } from './blockTemplate';
import { IWord, WordCard } from './card';

export class WorldList extends Block {
  protected data: Promise<IWord[]>;

  constructor(color: string) {
    super(color);
    this.container.className = 'list_container';
    this.data = (async function getData() {
      const response = await fetch('https://new-learnword.herokuapp.com/words?group=3&page=0');
      const data:IWord[] = await response.json();
      return data;
    }());
  }

  render() {
    const wordsData = this.data;
    this.container.innerHTML = '';
    wordsData
      .then((val) => {
        const loader = <HTMLDivElement>document.querySelector('.loader');
        loader.remove();
        val.forEach((wordData) => {
          const card = new WordCard(wordData, this.color);
          this.container.append(card.render());
        });
      });
    return this.container;
  }
}
