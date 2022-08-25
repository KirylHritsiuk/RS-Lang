export class Groups {
  protected container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'groups_container';
  }

  render(color: string = 'red') {
    this.container.innerHTML = `<div class="groups_title color-${color}">Groups</div>
      <ul class="groups_list">
        <li class="groups_item border-${color}">
          <a class="groups__link bg-red" href="#">1</a>
        </li>
        <li class="groups_item">
          <a class="groups__link bg-orange" href="#">2</a>
        </li>
        <li class="groups_item">
          <a class="groups__link bg-palevioletred" href="#">3</a>
        </li>
        <li class="groups_item">
          <a class="groups__link bg-slateblue" href="#">4</a>
        </li>
        <li class="groups_item">
          <a class="groups__link bg-darkslateblue" href="#">5</a>
        </li>
        <li class="groups_item">
          <a class="groups__link bg-purple" href="#">6</a>
        </li>
      </ul>`;
    return this.container;
  }
}
