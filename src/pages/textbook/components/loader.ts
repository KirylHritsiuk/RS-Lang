import { Block } from './blockTemplate';

export class Loader extends Block {
  static textObject = {
    containerClass: 'loader',
  };

  constructor() {
    super();
    this.container.classList.add(
      Loader.textObject.containerClass,
      Block.modificationClass.borderTop + this.color,
    );
    this.container.id = Loader.textObject.containerClass;
  }
}
