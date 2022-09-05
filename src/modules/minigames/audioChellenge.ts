import { Groups } from '../../pages/textbook/components/groups';
import { Result } from '../../pages/components/result';
import { groupData } from '../../common/groups';
import { App } from '../../app/app';
import { Api as API, baseUrl } from '../../utils/api';
import { IWord, IStatisticGame } from '../../types/types';
import { svgMethods } from "../../common/svg";

const svgAudio = svgMethods.audio;
const svgResult = svgMethods.results('0/20');

const Api = new API();

export class AudioChellenge {
  protected page: HTMLElement | null;

  protected progressWords: number | null;

  protected step: number;
  
  protected wordAnswer: boolean;
  
  protected word: IWord | null;

  protected words: IWord[];

  protected wordsTemp: IWord[];

  protected mistakeWords: IWord[];

  protected correctWords: IWord[];

  protected rand: number;

  protected currentWord: number;

  protected statistics: IStatisticGame;

  protected btnContainer: HTMLDivElement | null;

  protected wasWords: string[];

  protected result: Result;

  constructor() {
    this.wasWords = []
    this.mistakeWords = []
    this.correctWords = []
    this.btnContainer = null;
    this.page = null;
    this.progressWords = null;
    this.step = 0;
    this.currentWord = 0;
    this.word = null;
    this.words = [];
    this.wordsTemp = [];
    this.wordAnswer = false;
    this.result = new Result;
    this.statistics = {
      maxRow: 0,
      wrong: 0,
      correctly: 0
    };
    this.rand = Math.floor(Math.random() * this.words.length);
  }

  clearVar() {
    this.wasWords = []
    this.mistakeWords = []
    this.correctWords = []
    this.btnContainer = null;
    this.page = null;
    this.progressWords = null;
    this.step = 0;
    this.currentWord = 0;
    this.word = null;
    this.words = [];
    this.wordsTemp = [];
    this.result = new Result;
    this.statistics = {
      maxRow: 0,
      wrong: 0,
      correctly: 0,
    };
    this.rand = Math.floor(Math.random() * this.words.length);
  }

  initial() {
    this.page = document.querySelector('#main');
    if (this.page) this.page.innerHTML = '';
  }

  renderStartPage() {
    const group = new Groups();
    if (this.page) {
      this.page.innerHTML = `
        <div class="chellenge-start">
          <div class="chellenge-start-page">
            <h2 class="chellenge-header">Audio chellenge</h2>
            <div class="chellenge-direction">Select the Level</div>
            <div class="chellenge-multi-buttons"></div>
            <dutton class="chellenge-button-back" id="back_games">Back</button>
          </div>
        </div>`;
    }
    const groups = document.querySelector('.chellenge-multi-buttons') as HTMLDivElement;
    for (let i = 0; i < groupData.length; i++) {
      groups.append(group.createLink(i, groupData[i]));
    }
  }

  progressIncrement(flag: boolean) {
    const progressText = document.querySelector('.audio-progress-text') as HTMLDivElement;
    const tempText: string | null = progressText.textContent;
    if (tempText) {
      if (flag) {
        const progTextArray = [parseInt(tempText.split('/')[0]) + 1, tempText.split('/')[1]];
        progressText.textContent = progTextArray.join('/');
        this.wordAnswer = false;
      } else {
        const progTextArray = [parseInt(tempText.split('/')[0]), tempText.split('/')[1]];
        progressText.textContent = progTextArray.join('/');
      }
    }
    const progress = document.querySelector('.audio-progress-path') as HTMLElement;
    
    const stroke = progress.style.strokeDashoffset.replace('px', '');
    if (!this.progressWords) {
      this.progressWords = parseFloat(stroke);
      this.step = Math.floor((parseFloat(stroke) / 20) *100) /100;
    }
    this.progressWords -= this.step;
    progress.style.strokeDashoffset = `${this.progressWords}px`;
  }

  listenerAudioButton() {
    const audio: HTMLAudioElement | null = document.querySelector('#audio');
    const buttonAudio = document.querySelector('.audio-button') as HTMLButtonElement;
    buttonAudio.addEventListener('click', () => (audio ? audio.play() : false));
  }

  clearPage() {
    if (this.page) {
      const child = this.page.firstElementChild as HTMLDivElement;
      child.innerHTML = '';
    }
  }

  nextWord() {
    const audioCurrent = document.querySelector('#audio') as HTMLAudioElement;
    const changeButtons = document.querySelector('.audio-option') as HTMLDivElement;
    this.words = this.words.filter((line, index) => index === this.rand ? false : line);
    if (!this.btnContainer) this.btnContainer = document.querySelector('.audio-button-container') as HTMLDivElement;
    if (this.words.length === 0) {
      this.removeListenerButtonNext();
      this.removeListenerButtons();
      setTimeout(() => {
        this.result.render({ 
          statistics: this.statistics, 
          mistakeWords: this.mistakeWords, 
          correctWords: this.correctWords
        });
        this.clearPage()
        this.clearVar();
      }, 1000);
    } else {
      this.rand = Math.floor(Math.random() * this.words.length);
      this.word = this.words[this.rand];
      audioCurrent.src = `${baseUrl}${this.words[this.rand].audio}`;
      changeButtons.innerHTML = this.randomWords(this.wordsTemp.filter(line => line.word !== this.word?.word));
      if (this.btnContainer.children.length === 3) {
        this.btnContainer.lastElementChild?.remove();
        this.btnContainer.firstElementChild?.remove();
        this.btnContainer.firstElementChild?.classList.remove('audio-min');
        this.btnContainer.classList.remove('game-grid');
        this.listenerButtons();
      }
      this.listenerAudioButton();      
    }
    console.log({
      words: this.words,
      word: this.word,
      wordsTemp: this.wordsTemp,
      rand: this.rand,
      mistakeWords: this.mistakeWords,
      correctWords: this.correctWords,
      btnContainer: this.btnContainer,
      page: this.page,
      progressWords: this.progressWords,
      step: this.step,
      currentWord: this.currentWord,
      result: this.result,
      statistics: this.statistics,  
    });
  }

  randomWords(arrWords: IWord[]) {
    const arr = [];
    const one = Math.floor(Math.random() * (arrWords.length - 1));
    const oneArr = arrWords[one];
    arrWords = arrWords.filter((line, index) => one !== index);
    const two = Math.floor(Math.random() * (arrWords.length - 1));
    const twoArr = arrWords[two];
    arrWords = arrWords.filter((line, index) => two !== index);
    const three = Math.floor(Math.random() * (arrWords.length - 1));
    const threeArr = arrWords[three];
    arrWords = arrWords.filter((line, index) => three !== index);
    if (this.word) arr.push(this.word);
    arr.push(oneArr);
    arr.push(twoArr);
    arr.push(threeArr);
    arr.sort(() => Math.random() - 0.5);
    return `
      <div class="audio-option-word" data-word="${arr[0].wordTranslate}">1&ensp;${arr[0].wordTranslate}</div>
      <div class="audio-option-word" data-word="${arr[1].wordTranslate}">2&ensp;${arr[1].wordTranslate}</div>
      <div class="audio-option-word" data-word="${arr[2].wordTranslate}">3&ensp;${arr[2].wordTranslate}</div>
      <div class="audio-option-word" data-word="${arr[3].wordTranslate}">4&ensp;${arr[3].wordTranslate}</div>`;
  }

  showWord() {
    if (!this.btnContainer) {
      this.btnContainer = document.querySelector('.audio-button-container') as HTMLDivElement;
    }
    this.btnContainer.classList.add('game-grid');
    const tempButton = `
      <button class="audio-button">
        <svg class="audio-game-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
        </svg>
      </button>`;
    this.btnContainer.innerHTML =  `
      <div class="word-image">
        <img class="word-image-current" src="${baseUrl}${this.word?.image}" alt="${this.word?.word}">
      </div>
      ${tempButton}
      <div class="word-text">${this.word?.word}</div>`;
    const buttonAudio = document.querySelector('.audio-button') as HTMLButtonElement;
    buttonAudio.classList.add('audio-min');
    this.listenerAudioButton();
  }

  private listenBtn = (event: MouseEvent) => {
    const select = event.target as HTMLDivElement;
    select.classList.add('choise');
    if(this.word) {
      if (this.word.wordTranslate === select.dataset.word) {
        this.currentWord += 1;
        this.statistics.maxRow = Math.max(this.currentWord, this.statistics.maxRow)
        this.statistics.correctly += 1;
        this.correctWords.push(this.word)
        select.insertAdjacentHTML('afterend', this.getAudio(true));
        this.wordAnswer = true;
      } else {
        this.mistakeWords.push(this.word)
        this.currentWord = 0;
        this.statistics.wrong += 1;
        select.insertAdjacentHTML('afterend', this.getAudio(false));
        this.wordAnswer = false;
      }
    }
    this.showWord();
    this.changeButton('change');
    this.removeListenerButtons()
  }

  listenerButtons() {
    const btnWordsAll = document.querySelector('.audio-option') as HTMLElement;
    btnWordsAll.addEventListener('click', this.listenBtn);
  }

  removeListenerButtons() {
    const btnWordsAll = document.querySelector('.audio-option') as HTMLElement;
    btnWordsAll.removeEventListener('click', this.listenBtn);
  }

  private nextListener = () => {
    this.progressIncrement(this.wordAnswer);
    this.changeButton('next');
    this.nextWord();
  }

  listenerButtonNext() {
    const next = document.querySelector('#next') as HTMLButtonElement;
    next.addEventListener('click', this.nextListener);
  }

  removeListenerButtonNext() {
    const next = document.querySelector('#next') as HTMLButtonElement;
    next.removeEventListener('click', this.nextListener);
  }

  getAudio(flag: boolean): string {
    return `<audio id="audio-choise" 
        src="${baseUrl}files/${ flag ? 'correct' : 'error' }.mp3" autoplay="">
        <track kind="captions">
      </audio>`;
  }

  changeButton(selector: string) {
    const next = document.querySelector('#next') as HTMLButtonElement;
    if (selector === 'next') next.textContent = 'i don\`t know';
    if (selector === 'change') next.textContent = 'next word';
  }

  renderGame() {
    this.word = this.words[this.rand];
    if (this.page) {
      this.page.innerHTML = `
        <div class="wrapper_audio_game">
          <div class="audio-game">
            <div class="audio-game-content">
              <div class="audio-game-progress">
                ${svgResult}
              </div>
              <div class="audio-button-container">
                <button class="audio-button">
                  ${svgAudio('', 'audio-game-svg')}
                </button>
              </div>
              <audio id="audio" src="${baseUrl}${this.words[this.rand].audio}" autoplay=""><track kind="captions"></audio>
              <div class="audio-option">
                ${this.randomWords(this.words)}
              </div>
              <button class="game-btn audio-game-btn" id="next">i don\`t know</button>
            </div>
          </div>
        </div>`;
    }
  }

  startGame() {
    this.initial();
    this.renderGame();
    this.listenerAudioButton();
    this.listenerButtons();
    this.listenerButtonNext();
  }

  listenerAudio() {
    const buttonBack = document.querySelector('#back_games') as HTMLButtonElement;
    const buttonBackListener = () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
      buttonBack.removeEventListener('click', buttonBackListener);
    }
    buttonBack.addEventListener('click', buttonBackListener);
    const groupButtonsContainer = document.querySelector('.chellenge-multi-buttons') as HTMLDivElement;
    const groupButtonsContainerListener = async (event: MouseEvent) => {
      const clickButton = event.target as HTMLElement;
      if (clickButton.dataset.group) {
        this.clearVar();
        this.clearPage();
        const rand = Math.floor(Math.random() * 30);
        const data = await Api.getWords([
          { key: 'group', value: (parseInt(clickButton.dataset.group)).toString() },
          { key: 'page', value: rand },
        ]);
        this.words = Array.from(data);
        this.wordsTemp = Array.from(data);
        this.rand = Math.floor(Math.random() * this.words.length);
        this.startGame();
      }
      groupButtonsContainer.removeEventListener('click', groupButtonsContainerListener);
    }
    groupButtonsContainer.addEventListener('click', groupButtonsContainerListener);
  }

  run() {
    this.initial();
    this.renderStartPage();
    this.listenerAudio();
  }
}

export default new AudioChellenge();
