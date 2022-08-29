import { Block } from './blockTemplate';

export class Filter extends Block {
  constructor(protected color: string) {
    super(color);
    this.container.className = 'filter-container';
  }

  render() {
    this.container.innerHTML = `
        <div class="filter__block border-left-color-${this.color}"><input class="filter__block_radio" id="difficult" type="radio" name="filter" checked><label for="difficult">Difficult words</label></div>
        <div class="filter__block border-left-color-"><input class="filter__block_radio" id="learning" type="radio" name="filter"><label for="learning">Learning words</label></div>
        <div class="filter__block border-left-color-"><input class="filter__block_radio" id="delete" type="radio" name="filter"><label for="delete">Delete words</label></div>`;
    return this.container;
  }
}
