export abstract class Block {
  protected container: HTMLElement;

  protected color: string;

  static textObject = {
    containerClass: '',
  };

  constructor(tag: string, color: string) {
    this.container = document.createElement(tag);
    this.container.className = Block.textObject.containerClass;
    this.color = color;
  }

  render() {
    return this.container;
  }
}
