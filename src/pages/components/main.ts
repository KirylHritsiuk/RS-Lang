export class Main {
  protected container: HTMLElement;

  static TextObject = {
    ClassName: 'main',
  };

  constructor() {
    this.container = document.createElement('main');
    this.container.className = Main.TextObject.ClassName;
    this.container.id = Main.TextObject.ClassName;
  }

  render() {
    return this.container;
  }
}
