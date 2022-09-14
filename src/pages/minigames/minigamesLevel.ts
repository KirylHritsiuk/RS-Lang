import '../../style/miniGame.css';

export class MinigameLevel {
  protected container: HTMLDivElement;

  static TextObject = {
    containerClassName: 'wrapper-level',
  };

  constructor() {
    this.container = <HTMLDivElement>document.createElement('div');
    this.container.className = MinigameLevel.TextObject.containerClassName;
  }

  createGameLevel() {
    this.container.innerHTML = `
            <p class="name-game">Audio challenge</p>
            <p class="level-text">Select the Level</p>
            <div class="wrapper-select">
                <div class="circle one-color"><span class="circle-select">1</span></div>
                <div class="circle two-color"><span class="circle-select">2</span></div>
                <div class="circle three-color"><span class="circle-select">3</span></div>
                <div class="circle four-color"><span class="circle-select">4</span></div>
                <div class="circle five-color"><span class="circle-select">5</span></div>
                <div class="circle six-color"><span class="circle-select">6</span></div>
            </div>
            <button class="btn-back audio-btn-color"><span class="btn-back-text">BACK TO GAMES</span></button>
           `;
    return this.container;
  }

  render() {
    return this.container;
  }
}
