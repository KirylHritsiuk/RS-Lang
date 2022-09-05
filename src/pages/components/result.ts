import { IResultGames, IWord } from '../../types/types';
import { svg, svgMethods } from '../../common/svg';
import { App } from '../../app/app';
import AudioChellenge from '../../modules/minigames/audioChellenge';
import { baseUrl } from '../../utils/api';

const svgAudio = svgMethods.audio;
const svgCross = svgMethods.cross;
const svgResult = svgMethods.results;

export class Result {
  protected body: HTMLElement;

  protected words: IWord[];

  constructor() {
    this.body = document.querySelector('.body')!;
    this.words = [];
  }

  private createSVG(id: string): string {
    return svgAudio(id, 'svg-result');
  }

  private createLineWord(id: string, iWordTranslate: string, iWordEnglish: string): HTMLLIElement {
    const lineWord = document.createElement('li') as HTMLLIElement;
    lineWord.classList.add('item-word');
    const wordTranslate = document.createElement('span') as HTMLSpanElement;
    wordTranslate.classList.add('word-translate');
    wordTranslate.textContent = iWordTranslate;
    const wordEnglish = document.createElement('span') as HTMLSpanElement;
    wordEnglish.classList.add('word-english');
    wordEnglish.innerHTML = `&ensp;-&nbsp;${iWordEnglish}`;
    lineWord.innerHTML = this.createSVG(id);
    lineWord.append(wordTranslate, wordEnglish);
    return lineWord;
  }

  protected createWordsRepeated(data: string): HTMLDivElement {
    const totalWords = document.createElement('div') as HTMLDivElement;
    totalWords.classList.add('total-words');
    const totalWordsContent = document.createElement('div') as HTMLDivElement;
    totalWordsContent.classList.add('total-words-content');
    totalWordsContent.classList.add('word-blue');
    totalWordsContent.textContent = data;
    totalWords.append(totalWordsContent);
    totalWords.insertAdjacentHTML('beforeend', 'words were repeated');
    return totalWords;
  }

  protected createAnswerWordsResult(currentWord: string, wordsArray: IWord[]): HTMLDivElement {
    const wordsAnswer = document.createElement('div') as HTMLDivElement;
    wordsAnswer.classList.add('answer-words-result');
    const wordsMistake = document.createElement('div') as HTMLDivElement;
    wordsMistake.classList.add('mistake-word');
    const wordsSpan = document.createElement('span') as HTMLSpanElement;
    wordsSpan.textContent = currentWord === 'Mistakes' ? 'Mistakes' : 'Correct Answers';
    const wordsMistakeContent = document.createElement('div') as HTMLDivElement;
    wordsMistakeContent.classList.add('total-words-content');
    wordsMistakeContent.classList.add(currentWord === 'Mistakes' ? 'word-yelloy' : 'word-blue');
    wordsMistakeContent.textContent = wordsArray.length.toString();
    wordsMistake.append(wordsSpan, wordsMistakeContent);
    const ulWords = document.createElement('ul') as HTMLUListElement;
    ulWords.classList.add('res-words');
    ulWords.append(...wordsArray.map((line) => this.createLineWord(line.word, line.word, line.wordTranslate)));
    wordsAnswer.append(wordsMistake, ulWords);
    return wordsAnswer;
  }

  protected resultTransition(data: IResultGames) {
    const circle = document.querySelector('.audio-progress-path') as HTMLElement;
    const allCircle: number = parseInt(circle.style.strokeDashoffset);
    const procent = Math.round(data.statistics.correctly / this.words.length * 100);
    const allTempCircle: number = allCircle * procent / 100;
    circle.style.strokeDashoffset = (allCircle - allTempCircle).toString();
    const text = document.querySelector('.audio-progress-text') as HTMLElement;
    text.innerText = `${procent.toString()}%`;
    const inARow = document.querySelector('.schedule-row') as HTMLLIElement;
    inARow.style.width = `${(data.statistics.maxRow / this.words.length * 100).toString()}%`;
    const right = document.querySelector('.schedule-right') as HTMLLIElement;
    right.style.width = `${(data.statistics.correctly / this.words.length * 100).toString()}%`;
    const wrong = document.querySelector('.schedule-mistake') as HTMLLIElement;
    wrong.style.width = `${(data.statistics.wrong / this.words.length * 100).toString()}%`;
  }

  protected createSchedule(data: IResultGames): HTMLDivElement {
    const schedule = document.createElement('div') as HTMLDivElement;
    schedule.classList.add('answer-stat-schedule');

    const scheduleLines = document.createElement('ul') as HTMLUListElement;
    scheduleLines.classList.add('schedule-lines');

    const inARow = document.createElement('li') as HTMLLIElement;
    inARow.classList.add('schedule-row');
    inARow.style.width = '0%';

    const right = document.createElement('li') as HTMLLIElement;
    right.classList.add('schedule-right');
    right.style.width = '0%';

    const wrong = document.createElement('li') as HTMLLIElement;
    wrong.classList.add('schedule-mistake');
    // wrong.style.width = '0%';

    scheduleLines.append(inARow, right, wrong);

    const scheduleNumbers = document.createElement('ul') as HTMLUListElement;
    scheduleNumbers.classList.add('schedule-numbers');

    scheduleNumbers.insertAdjacentHTML('afterbegin', `
      <li class="schedule-num schedule-num-row">
        <div type="inARow" class="circle-row"></div><span
          class="styled__LegendItemText-cxwx3m-14 dQUEPs">In a row&nbsp;</span><span
          class="styled__LegendItemText-cxwx3m-14 dQUEPs">${data.statistics.maxRow}</span>
      </li>
      <li class="schedule-num schedule-num-right">
        <div type="right" class="circle-right"></div><span
          class="styled__LegendItemText-cxwx3m-14 dQUEPs">Right answers&nbsp;</span><span
          class="styled__LegendItemText-cxwx3m-14 dQUEPs">${data.statistics.correctly}</span>
      </li>
      <li class="schedule-num schedule-num-mistake">
        <div type="wrong" class="circle-mistake"></div><span
          class="styled__LegendItemText-cxwx3m-14 dQUEPs">Mistakes&nbsp;</span><span
          class="styled__LegendItemText-cxwx3m-14 dQUEPs">${data.statistics.wrong}</span>
      </li>`);
    schedule.append(scheduleLines, scheduleNumbers);
    return schedule;
  }

  protected createModalElement(data: IResultGames) {
    const modal = document.createElement('div') as HTMLDivElement;
    modal.classList.add('modal-wrapper');
    const modalRes = document.createElement('div') as HTMLDivElement;
    modalRes.classList.add('modal-result');
    const result = document.createElement('div') as HTMLDivElement;
    result.classList.add('result');
    const resultTitle = document.createElement('div') as HTMLDivElement;
    resultTitle.classList.add('result-title');
    resultTitle.innerHTML = `
      <h3>Results</h3>
      <button class="game-btn btn-result-again" id="playAgain">play again</button>`;
    const bodyResult = document.createElement('div') as HTMLDivElement;
    bodyResult.classList.add('body-result');
    const answerStat = document.createElement('div') as HTMLDivElement;
    answerStat.classList.add('answer-stat');
    const answerStatCircle = document.createElement('div') as HTMLDivElement;
    answerStatCircle.classList.add('answer-stat-circle');
    answerStatCircle.innerHTML = `
      ${svgResult(`${(Math.round(data.statistics.correctly / this.words.length * 100)).toString()}%`)}
      <span class="text-under-circle">Accuracy</span>`;
    answerStat.append(answerStatCircle, this.createSchedule(data));
    bodyResult.append(
      answerStat,
      this.createWordsRepeated((data.mistakeWords.length + data.correctWords.length).toString()),
      this.createAnswerWordsResult('Mistakes', data.mistakeWords),
      this.createAnswerWordsResult('Correct Answer', data.correctWords),
    );
    result.append(resultTitle, bodyResult);
    modalRes.append(result);
    modal.append(modalRes);
    modal.insertAdjacentHTML('beforeend', svgCross('cross'));
    return modal;
  }

  listener() {
    const modalListen = document.querySelector('.modal-wrapper') as HTMLDivElement;
    const cross = document.querySelector('#cross') as HTMLDivElement;
    const body = document.querySelector('body') as HTMLBodyElement;
    cross.addEventListener('click', () => { modalListen.remove(); this.renderPageMinigames(); });
    const listenerBody = (ev: MouseEvent) => {
      const td = ev.target as HTMLElement;
      const audio = td.dataset.word;
      const clickOnModal = td.closest('.modal-wrapper');
      const again = td.closest('.btn-result-again');
      if (audio) {
        const takeAudio = this.words.filter((line) => line.word === audio);
        const newAudioWord = new Audio(baseUrl + takeAudio[0].audio);
        newAudioWord.play();
      }

      if (!clickOnModal) {
        modalListen.remove();
        this.renderPageMinigames();
        body.removeEventListener('click', listenerBody);
      }
      if (again) {
        modalListen.remove();
        AudioChellenge.run();
        body.removeEventListener('click', listenerBody);
      }
    };
    body.addEventListener('click', listenerBody);
  }

  renderPageMinigames() {
    const hash = window.location.hash.slice(1);
    App.renderNewPage(hash);
  }

  render(data: IResultGames): void {
    console.log(data);
    this.words = data.correctWords.concat(data.mistakeWords);
    this.body.append(this.createModalElement(data));
    setTimeout(() => {
      this.resultTransition(data);
      this.listener();
    }, 100);
  }
}
