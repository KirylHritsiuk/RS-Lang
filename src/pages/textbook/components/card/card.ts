import { Block } from '../blockTemplate';
import '../../../../style/card/style.css';
import '../../../../style/colorModifications/style.css';
import { IWord } from '../../../../types/types';
import { baseUrl } from '../../../../utils/api';
import { AudioBlock } from './audio/AudioBlock';
import { TextContent } from './text/text';
import dictionary from '../../../../modules/dictionary/dictionary';

export class WordCard extends Block {
  static ClassNameData = {
    container: 'word-card',
  };

  protected group: number;

  protected audioBlock: HTMLElement;

  protected text: HTMLElement;

  constructor(protected wordData: IWord) {
    super();
    this.container.className = WordCard.ClassNameData.container;
    this.container.id = wordData.word;
    this.group = wordData.group;
    this.audioBlock = new AudioBlock(wordData).render();
    this.text = new TextContent(wordData).render();
    if (wordData.userWord !== undefined) {
      this.container.classList.add(`${Block.modificationClass.bg}${wordData.userWord?.difficulty}`);
      const category = dictionary.getItemLocalStorage();
      if (category !== null) {
        if (category[0].value !== wordData.userWord?.difficulty) {
          this.container.classList.add(Block.modificationClass.displayNone);
        }
        // else this.container.classList.remove(Block.modificationClass.displayNone);
      }
    }
  }

  create() {
    this.container.innerHTML = `<img class="word-card_image" src="${baseUrl}${this.wordData.image}" alt="${this.wordData.word}">`;
    this.container.append(this.text, this.audioBlock);
    return this.container;
  }

  render() {
    const card = this.create();
    this.changeLearnPage();
    return card;
  }
}
