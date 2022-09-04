import { Block } from './blockTemplate';

export class Filter extends Block {
  constructor() {
    super();
    this.container.className = 'filter-container';
  }

  render() {
    this.container.innerHTML = `
        <div class="filter__block active-${this.color}">Difficult words</div>
        <div class="filter__block">Easy words</div>`;
    return this.container;
  }
}
