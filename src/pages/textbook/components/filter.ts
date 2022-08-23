export class Filter {
  protected container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'filter';
  }

  render(color: string = 'red') {
    this.container.innerHTML = `   <div class="filter">
      <div class="filter-container">
        <div class="filter-block"><input id="learning" type="radio" name="filter"><label for="learning">Learning words</label></div>
        <div class="filter-block"><input id="difficult" type="radio" name="filter"><label for="difficult">Difficult words</label></div>
        <div class="filter-block"><input id="delete" type="radio" name="filter"><label for="delete">Delete words</label></div>
      </div>
    </div>`;
    return this.container;
  }
}
