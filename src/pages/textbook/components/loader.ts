import { Block } from './blockTemplate';

export class Loader extends Block {
  static textObject = {
    containerClass: 'loader',
    borderTopModificationClass: 'border-top-',
  };

  constructor() {
    super();
    this.container.classList.add(
      Loader.textObject.containerClass,
      Loader.textObject.borderTopModificationClass + this.color,
    );
    this.container.id = Loader.textObject.containerClass;
  }
}
