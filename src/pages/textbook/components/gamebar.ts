import { gamesData, IGames } from '../../../common/games';
import { Block } from './blockTemplate';
import audioChallenge from '../../../modules/minigames/audioChellenge';

export class GameBar extends Block {
  static textObject = {
    mainContainerClass: 'game_bar',
    linkClass: 'game_link',
    iconClass: 'game__icon',
    titleClass: 'game__title',
    containerClass: 'game',
  };

  constructor() {
    super();
    this.container.className = GameBar.textObject.mainContainerClass;
  }

  create(game: IGames) {
    const button = document.createElement('button');
    button.className = `${GameBar.textObject.linkClass} ${Block.modificationClass.hover}${this.color}`;
    button.name = game.nameEn;
    if (game.nameEn === gamesData[1].nameEn) {
      button.addEventListener('click', () => audioChallenge.runTextbook());
    }
    const element: string = `
        <div class="${GameBar.textObject.containerClass}">
          <img 
            class="${GameBar.textObject.iconClass}"
            src="${game.img}" 
            alt="${game.name}"/>
          <span class="${GameBar.textObject.titleClass}">${game.name}</span>
        </div>`;
    button.innerHTML = element;
    return button;
  }

  render() {
    gamesData.forEach((game) => this.container.prepend(this.create(game)));
    return this.container;
  }
}
