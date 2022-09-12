import { IWord } from '../../../../../types/types';
import { Block } from '../../blockTemplate';
import { CardButtons } from '../buttons/buttons';

export class TextContent extends Block {
  static textObject = {
    containerClass: 'word-card-content',
  };

  protected buttons: HTMLElement;

  constructor(protected wordData: IWord) {
    super();
    this.container.className = TextContent.textObject.containerClass;
    this.buttons = new CardButtons(wordData).render();
  }

  render() {
    this.container.innerHTML = `<div class="word-card-title border-left-${this.color}" name="borderLeft">
        <div class="title-word">
          <div class="word-group">
            <span class="title-word__item">${this.wordData.word}</span>
            <span class="title-word__item title-word__item_transcription">${this.wordData.transcription}</span>
          </div>
          <span class="title-word__item title-word__item_translate translate">${this.wordData.wordTranslate}</span>
        </div>
      </div>
      <div class="card-meaning">
          <div class="word__text">
            <div class="word-meaning__sentence">${this.wordData.textMeaning}</div>
          </div>
          <div class="word-meaning__translate translate">${this.wordData.textMeaningTranslate}</div>
      </div>
        <div class="card-example">
          <div class="word__text">
            <div class="word-example__sentence">${this.wordData.textExample}</div>
            </div>
            <div class="word_example__translate translate">${this.wordData.textExampleTranslate}</div>
          </div>`;
    this.container.append(this.buttons);
    return this.container;
  }
}
