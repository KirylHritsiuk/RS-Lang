import '../../style/miniGame.css';
import AudioChellenge from '../../modules/minigames/audioChellenge';

export class MiniGame {
  protected container: HTMLDivElement;

  static TextObject = {
    containerClassName: 'wrapper-minigames',
  };

  constructor() {
    this.container = <HTMLDivElement>document.createElement('div');
    this.container.className = MiniGame.TextObject.containerClassName;
  }

  listenerGames() {
    const listenAudioChellenge = document.querySelector('#audio_chellenge') as HTMLButtonElement;
    listenAudioChellenge.addEventListener('click', () => {
      AudioChellenge.run();
    });
  }

  render() {
    this.container.innerHTML = `
        <div class="minigame">
            <div class="minigame__icon">
                <img src="./assets/img/headphones.png" class="minigame__img" alt="lion">
            </div>
            <div class="title">
                <span class="game-h2">Audio challenge</span>
            </div>
            <div class="game-text-wrapper">
                <p class="game-text">Check your listening skills, trying to pick the right meaning after hearing a
                    word. Be careful, as you just have one guess.</p>
            </div>
            <div class="game-btn-wrapper">
                <button class="game-btn audio-btn-color" id="audio_chellenge">
                    <span class="game-btn-text">play</span>
                </button></a>
            </div>
        </div>
        <div class="minigame">
            <div class="minigame__icon">
                <img src="./assets/img/shoes.png" class="minigame__img" alt="lion">
            </div>
            <div class="title">
                <span class="game-h2">Sprint</span>
            </div>
            <div class="game-text-wrapper">
                <p class="game-text">Check how much points you can get in one minute, making educated guesses about what is right and what is wrong.</p>
            </div>
            <div class="game-btn-wrapper">
                <button class="game-btn sprint-btn-color">
                    <span class="game-btn-text">play</span>
                </button>
            </div>
        </div>
    `;
    return this.container;
  }
}
