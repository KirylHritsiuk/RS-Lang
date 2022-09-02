import { Groups } from '../../pages/textbook/components/groups';
import { groupData } from '../../common/groups';
import { App } from '../../app/app';
import { Api as API, baseUrl } from '../../utils/api';
import { IWord, IStatisticGame } from '../../types/types';

const Api = new API();

export class AudioChellenge {
  protected page: HTMLElement | null;

  protected progress: number | null;

  protected step: number;

  protected word: IWord | null;

  protected words: IWord[];

  protected rand: number;

  protected statistics: IStatisticGame;

  constructor() {
    this.page = null;
    this.progress = null;
    this.step = 0;
    this.word = null;
    this.words = [];
    this.statistics = {
      maxRow: 0,
      wrong: 0,
      correctly: 0
    };
    this.rand = Math.floor(Math.random() * this.words.length);
  }

  initial() {
    this.page = document.querySelector('#main');
    if (this.page) this.page.innerHTML = '';
  }

  renderStartPage() {
    const group = new Groups('red');
    if (this.page) {
      if (this.page) {
        this.page.innerHTML = `
          <div class="chellenge-start">
            <div class="chellenge-start-page">
              <h2 class="chellenge-header">Audio chellenge</h2>
              <div class="chellenge-direction">Select the Level</div>
              <div class="chellenge-multi-buttons">
              </div>
              <dutton class="chellenge-button-back" id="back_games">Back</button>
            </div>
          </div>`;
      }
    }
    const groups = document.querySelector('.chellenge-multi-buttons') as HTMLDivElement;
    for (let i = 0; i < groupData.length; i++) {
      groups.append(group.createLink(i + 1, groupData[i]));
    }
  }
  
  progressIncrement() {
    const progressText = document.querySelector('.audio-progress-text') as HTMLDivElement;
    const tempText: string | null = progressText.textContent;
    if (tempText) {
      const progTextArray = [parseInt(tempText.split('/')[0]) + 1, tempText.split('/')[1]];
      progressText.textContent = progTextArray.join('/');
    }
    const progress = document.querySelector('.audio-progress-path') as HTMLElement;
    if (!this.progress) {
      const stroke = progress.style.strokeDasharray.replace('px', '').replace('px', '').split(',');
      this.progress = parseFloat(stroke[0]);
      this.step = parseFloat(stroke[0]) / 20;
    }
    this.progress -= this.step;
    progress.style.strokeDashoffset = `${this.progress}px`;
  }

  listenerAudioButton() {
    const audio: HTMLAudioElement | null = document.querySelector('#audio');
    const buttonAudio = document.querySelector('.audio-button') as HTMLButtonElement;
    buttonAudio.addEventListener('click', () => audio ? audio.play() : false);
  }

  nextWord() {

    return `
    <audio id="audio" src="${baseUrl}${this.words[this.rand].audio}" autoplay=""><track kind="captions"></audio>
    <div class="audio-option">
      ${this.randomWords(this.words, this.rand)}
    </div>`;
  }

  randomWords(arrWords: IWord[], selection: number) {
    const arr = [];
    const pick = arrWords[selection];
    arrWords.slice(selection, 1);
    const one = Math.floor(Math.random() * (arrWords.length - 1));
    const oneArr = arrWords[one];
    arrWords.slice(selection, 1);
    const two = Math.floor(Math.random() * (arrWords.length - 1));
    const twoArr = arrWords[two];
    arrWords.slice(selection, 1);
    const three = Math.floor(Math.random() * (arrWords.length - 1));
    const threeArr = arrWords[three];
    arr.push(pick);
    arr.push(oneArr);
    arr.push(twoArr);
    arr.push(threeArr);
    arr.sort(() => Math.random() - 0.5);
    return `
    <div class="audio-option-word" data-word="${arr[0].wordTranslate}">1 <span>&ensp;${arr[0].wordTranslate}</span></div>
    <div class="audio-option-word" data-word="${arr[0].wordTranslate}">2 <span>&ensp;${arr[1].wordTranslate}</span></div>
    <div class="audio-option-word" data-word="${arr[0].wordTranslate}">3 <span>&ensp;${arr[2].wordTranslate}</span></div>
    <div class="audio-option-word" data-word="${arr[0].wordTranslate}">4 <span>&ensp;${arr[3].wordTranslate}</span></div>`;
  }

  listenerButtons() {
    const next = document.querySelector('#next') as HTMLButtonElement;
    next.addEventListener('click', () => {
      this.progressIncrement();
      this.statistics.wrong += 1;
      this.nextWord();
    })
    const btnWords = document.querySelectorAll('.audio-option-word') as NodeListOf<HTMLElement>;
    btnWords.forEach(line => {
      line.addEventListener('click', async () => {
        line.classList.add('choise');
        if (this.word?.wordTranslate === line.dataset.word) {
          this.statistics.correctly += 1;
          line.insertAdjacentHTML('afterend', `
          <audio id="audio-choise" 
          src="${baseUrl}files/correct.mp3" 
          autoplay="">
          <track kind="captions">
          </audio>`);
        } else {
          this.statistics.wrong += 1;
          line.insertAdjacentHTML('afterend', `
            <audio id="audio-choise" 
                src="${baseUrl}files/error.mp3" 
                autoplay="">
              <track kind="captions">
            </audio>`);
        }
        setTimeout(() => {
          const audioChoise = document.querySelector('#audio-choise') as HTMLElement;
          audioChoise.remove();
        }, 1000);
        this.nextWord();
      });
    });
  }

  renderGame() {
    console.log(this.words);
    this.word = this.words[this.rand];
    if (this.page) {
      this.page.innerHTML = `
        <div class="wrapper_audio_game">
          <div class="audio-game">
            <div class="audio-game-content">
              <div class="audio-game-progress">
              <svg class="CircularProgressbar " viewBox="0 0 100 100" data-test-id="CircularProgressbar">
              <path class="CircularProgressbar-trail" d="
                M 50,50
                m 0,-46
                a 46,46 0 1 1 0,92
                a 46,46 0 1 1 0,-92
              " stroke-width="8" fill-opacity="0" style="stroke: rgb(255, 255, 255); stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 0px;"></path>
              <path class="audio-progress-path" d="
                M 50,50
                m 0,-46
                a 46,46 0 1 1 0,92
                a 46,46 0 1 1 0,-92
              " stroke-width="8" fill-opacity="0" style="stroke: rgb(242, 105, 92); stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 289.027px;"></path>
              <text class="audio-progress-text" x="50" y="50" style="fill: rgb(242, 105, 92);">0/20</text></svg>
              </div>
              <button class="audio-button">
                <svg class="audio-game-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
                </svg>
              </button>
              ${this.nextWord()}
              <button class="game-btn audio-game-btn" id="next">i don\`t know</button>
            </div>
          </div>
        </div>
      `;
    }
  }

  startGame() {
    this.initial();
    this.renderGame();
    this.listenerAudioButton();
    this.listenerButtons();
  }

  listenerAudio() {
    const buttonBack = document.querySelector('#back_games') as HTMLButtonElement;
    buttonBack.addEventListener('click', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    })
    const groupButtons = document.querySelectorAll('.groups__link') as NodeListOf<HTMLButtonElement>;

    groupButtons.forEach((line) => {
      line.addEventListener('click', async () => {
        const groupNumber: string | undefined = line.dataset.group;
        if (groupNumber) {
          const rand = Math.floor(Math.random() * 30);
          const data = await Api.getWords([
            { key: 'group', value: (parseInt(groupNumber) - 1).toString() },
            { key: 'page', value: rand },
          ]);
          this.words = data;
          this.rand = Math.floor(Math.random() * this.words.length);
          this.startGame();
        }
      });
    });
  }

  run() {
    this.initial();
    this.renderStartPage();
    this.listenerAudio();
  }
}

export default new AudioChellenge();
