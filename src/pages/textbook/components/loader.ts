import { Block } from './blockTemplate';

export class Loader extends Block {
  static textObject = {
    containerClass: 'loader',
    borderTopModificationClass: 'border-top-',
  };

  constructor(protected color: string) {
    super(color);
    this.container.classList.add(
      Loader.textObject.containerClass,
      Loader.textObject.borderTopModificationClass + this.color,
    );
  }
}
