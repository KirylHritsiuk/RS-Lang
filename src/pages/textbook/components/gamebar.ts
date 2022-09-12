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

  constructor() {
    super();
    this.container.className = GameBar.textObject.mainContainerClass;
  }
  protected create(game: IGames) {
    console.log(game);
    const element: string = `
      <button class="${GameBar.textObject.linkClass} ${GameBar.textObject.modificationClass}${this.color}" name="game">
        <div class="${GameBar.textObject.containerClass}">
          <img 
            class="${GameBar.textObject.iconClass}"
            src="${game.img}" 
            alt="${game.name}"/>
          <span class="${GameBar.textObject.titleClass}">${game.name}</span>
        </div>
      </button>`;
    return element;
  }

  render() {
    gamesData.forEach((game) => this.container.insertAdjacentHTML('afterbegin', this.create(game)));
    return this.container;
  }
}
