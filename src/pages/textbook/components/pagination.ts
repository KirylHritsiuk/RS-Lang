export class Pagination {
  protected container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'pagination';
  }

  render() {
    this.container.innerHTML = `<button class="pag-item pag-item-disabled" disabled>
    <svg viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5V7z"></path></svg>
  </button>
  <button class="pag-item pag-item-active">1</button>
  <button class="pag-item">...</button>
  <button class="pag-item">2</button>
  <button class="pag-item">3</button>
  <button class="pag-item">4</button>
  <button class="pag-item">5</button>
  <button class="pag-item">6</button>
  <button class="pag-item">...</button>
  <button class="pag-item">30</button>
  <button class="pag-item">
    <svg viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"></path></svg>
  </button>
    `;
    return this.container;
  }
}
