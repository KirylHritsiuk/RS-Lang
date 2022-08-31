import { Block } from './blockTemplate';
import '../../../style/card/style.css';
import { IWord } from '../../../types/types';
import { baseUrl } from '../../../utils/api';
/* eslint-disable no-unused-vars */
export class WordCard extends Block {
  static ClassNameData = {
    container: 'word-card',
  };

  protected group: number;

  constructor(protected data: IWord, group: number) {
    super(group);
    this.container.className = WordCard.ClassNameData.container;
    this.container.id = data.id;
    this.data = data;
    this.group = data.group;
  }

  protected createCard() {
    this.container.innerHTML = `
    <img class="word-card_image" src="${baseUrl}${this.data.image}" alt="${this.data.word}">
    <div class="word-card-content">
      <div class="word-card-title border-left-${this.color}" name="borderLeft">
        <div class="title-word">
          <div class="word-group">
            <span class="title-word__item">${this.data.word}</span>
            <span class="title-word__item title-word__item_transcription">${this.data.transcription}</span>
          </div>
          <span class="title-word__item title-word__item_translate translate">${this.data.wordTranslate}</span>
        </div>
        <div class="word-audio word-audio_title">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"
              width="1.5em" height="1.5em">
              <path d="M2,6A2,2,0,0,0,0,8v8a2,2,0,0,0,2,2H4.8L12,23.977V.017L4.8,6Z"/>
              <path d="M20,12a5.006,5.006,0,0,0-5-5H14V9h1a3,3,0,0,1,0,6H14v2h1A5.006,5.006,0,0,0,20,12Z"/>
              <path d="M15,3H14V5h1a7,7,0,0,1,0,14H14v2h1A9,9,0,0,0,15,3Z"/>
            </svg>
              <audio src="${baseUrl}${this.data.audio}"></audio>
            </div>
      </div>
      <div class="card-meaning">
          <div class="word-text">
            <div class="word-meaning__sentence">${this.data.textMeaning}</div>
              <div class="word-audio word-audio_main">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="meaning-play" style="display: block" viewBox="0 0 24 24"
                width="1em" height="1em">
                <path d="M2,6A2,2,0,0,0,0,8v8a2,2,0,0,0,2,2H4.8L12,23.977V.017L4.8,6Z"/>
                <path d="M20,12a5.006,5.006,0,0,0-5-5H14V9h1a3,3,0,0,1,0,6H14v2h1A5.006,5.006,0,0,0,20,12Z"/>
                <path d="M15,3H14V5h1a7,7,0,0,1,0,14H14v2h1A9,9,0,0,0,15,3Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="meaning-stop" style="display: none" viewBox="0 0 24 24" 
                width="1em" height="1em"><rect width="24" height="24"/></svg>
              <audio src="${baseUrl}${this.data.audioMeaning}">    
            </audio>
            </div>
          </div>
          <div class="word-meaning__translate translate">${this.data.textMeaningTranslate}</div>
      </div>
        <div class="card-example">
          <div class="word-text">
            <div class="word-example__sentence">${this.data.textExample}</div>
              <div class="word-audio word-audio_main">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="example-play" style="display: block" viewBox="0 0 24 24"
                  width="1em" height="1em">
                  <path d="M2,6A2,2,0,0,0,0,8v8a2,2,0,0,0,2,2H4.8L12,23.977V.017L4.8,6Z"/>
                  <path d="M20,12a5.006,5.006,0,0,0-5-5H14V9h1a3,3,0,0,1,0,6H14v2h1A5.006,5.006,0,0,0,20,12Z"/>
                  <path d="M15,3H14V5h1a7,7,0,0,1,0,14H14v2h1A9,9,0,0,0,15,3Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="example-stop" style="display: none" viewBox="0 0 24 24" 
                width="1em" height="1em"><rect width="24" height="24"/></svg>
                <audio src="${baseUrl}${this.data.audioExample}"></audio>
              </div>
            </div>
            <div class="word_example__translate translate">${this.data.textExampleTranslate}</div>
          </div>
          </div>
          </div>
          `;
        // <div class="card-buttons">
        // <button class="button-card button-card_large bg-${this.color}" data-set-color="${this.color}" name="difficult">Difficult</button>
          // <button class="button-card button-card_large button-card-del name="delete">Delete</button>
          // </div>
    return this.container;
  }

  render() {
    const card = this.createCard();
    return card;
  }
}
