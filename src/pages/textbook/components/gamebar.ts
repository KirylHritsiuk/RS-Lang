export class GameBar {
  protected container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'game_bar';
  }

  render(color: string = 'red') {
    this.container.innerHTML = `<a class="game_link game_link-hover-${color}" href="/games/sprint">
        <div class="game">
          <img 
            class="game__icon"
            src="./assets/png/sprint.png" 
            alt="#" />
          <span class="game__title">Sprint</span>
        </div>
      </a>
      <a class="game_link game_link-hover-${color}" href="/games/audio-challenge">
        <div class="game">
          <img
            class="game__icon"
            src="./assets/png/audio-challenge.png"
            alt="#"
          />
          <span class="game__title">Audio-challenge</span>
        </div>
      </a>`;
    return this.container;
  }
}
