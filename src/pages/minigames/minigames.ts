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
                <span class="minigame-h2">Аудиовызов</span>
            </div>
            <div class="game-text-wrapper">
                <p class="game-text">Проверьте свои навыки слушания, пытаясь подобрать правильное значение после услышанного слова. </p>
            </div>
            <div class="game-btn-wrapper">
                <button class="game-btn audio-btn-color" id="audio_chellenge">
                    <span class="game-btn-text">играть</span>
                </button></a>
            </div>
        </div>
        <div class="minigame">
            <div class="minigame__icon">
                <img src="./assets/img/shoes.png" class="minigame__img" alt="lion">
            </div>
            <div class="title">
                <span class="minigame-h2">Спринт</span>
            </div>
            <div class="game-text-wrapper">
                <p class="game-text">Проверьте, сколько очков вы можете получить за одну минуту, выбирая правельные ответы.</p>
            </div>
            <div class="game-btn-wrapper">
                <button class="game-btn sprint-btn-color">
                    <span class="game-btn-text">играть</span>
                </button>
            </div>
        </div>
    `;
    return this.container;
  }
}
