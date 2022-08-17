/* eslint-disable no-unused-vars */
export interface IWord {
    id: string,
    group: number,
    page: number,
    word: string,
    image: string,
    audio: string,
    audioMeaning: string,
    audioExample: string,
    textMeaning: string,
    textExample: string,
    transcription: string,
    wordTranslate: string,
    textMeaningTranslate: string,
    textExampleTranslate: string,
}

export const enum backendData {
  url = 'https://new-learnword.herokuapp.com/',
}
export class WordCard {
  static ClassNameData = {
    container: 'card',
  };

  protected container: HTMLDivElement;

  constructor(protected data: IWord) {
    this.container = document.createElement('div');
    this.container.className = WordCard.ClassNameData.container;
    this.container.id = data.id;
    this.data = data;
  }

  protected createCard() {
    this.container.innerHTML = `
    <img class="card_image" src="${backendData.url}${this.data.image}" alt="${this.data.word}">
    <div class="card-content">
      <div class="card-title">
        <div class="title-word">
          <div class="title-word">
            <span class="title-word__item">${this.data.word.slice(0, 1).toUpperCase()}${this.data.word.slice(1)}</span>
            <span class="title-word__transcription">${this.data.transcription}</span>
          </div>
          <div class="title-word__translate title-word__translate_translate">${this.data.wordTranslate}</div>
        </div>
        <div class="word-audio word-audio_title">
          <audio src="${backendData.url}${this.data.audio}" controls>click</audio>
        </div>
      </div>
      <div class="card-main">
      <div class="word-meaning word-meaning_definition">
        <div>
          <div class="word-meaning__sentence">${this.data.textMeaning}</div>
            <div class="word-audio word-audio_main">
              <audio src="${backendData.url}${this.data.audioMeaning}" controls>click</audio>
            </div>
          </div>
          <div class="word-meaning__translate word-meaning__translate_translate">${this.data.textMeaningTranslate}</div>
        </div>
        <div class="word-example word-example_">
          <div class="">
            <div class="word-example__sentence">${this.data.textExample}</div>
              <div class="word-audio word-audio_main">
                <audio src="${backendData.url}${this.data.audioExample}" controls>click</audio>
              </div>
            </div>
            <div class="word_example__translate word_example__translate_translate">${this.data.textExampleTranslate}</div>
          </div>
        </div>
      </div>
    `;
    return this.container;
  }

  render() {
    const card = this.createCard();
    return card;
  }
}
