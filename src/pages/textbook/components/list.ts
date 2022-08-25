import { IWord, WordCard } from './card';

export class WorldList {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'list_container';
  }

  async render() {
    const response = await fetch('https://new-learnword.herokuapp.com/words?group=2&page=2');
    const data:IWord[] = await response.json();
    data.forEach((data) => {
      const card = new WordCard(data);
      this.container.append(card.render());
    });
    return this.container;
  }
}
