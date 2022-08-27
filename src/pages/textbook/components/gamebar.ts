import { gamesData, IGames } from '../../../common/games';
import { Block } from './blockTemplate';

export class GameBar extends Block {
  static textObject = {
    mainContainerClass: 'game_bar',
    linkClass: 'game_link',
    iconClass: 'game__icon',
    titleClass: 'game__title',
    containerClass: 'game',
    modificationClass: 'hover-',
  };

  constructor(tag: string, color: string) {
    super(tag, color);
    this.container.className = GameBar.textObject.mainContainerClass;
  }

  protected create(game: IGames) {
    const element: string = `
      <a class="${GameBar.textObject.linkClass} ${GameBar.textObject.modificationClass}${this.color}" href="${game.href}">
        <div class="${GameBar.textObject.containerClass}">
          <img 
            class="${GameBar.textObject.iconClass}"
            src="${game.img}" 
            alt="${game.name}"/>
          <span class="${GameBar.textObject.titleClass}">${game.name}</span>
        </div>
      </a>`;
    return element;
  }

  render(): HTMLElement {
    gamesData.forEach((game) => this.container.insertAdjacentHTML('afterbegin', this.create(game)));
    return this.container;
  }
}
