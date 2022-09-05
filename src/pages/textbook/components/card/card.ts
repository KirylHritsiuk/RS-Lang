import { Block } from '../blockTemplate';
import '../../../../style/card/style.css';
import '../../../../style/colorModifications/style.css';
import { IWord } from '../../../../types/types';
import { baseUrl } from '../../../../utils/api';
import { AudioBlock } from './audio/AudioBlock';
import { TextContent } from './text/text';

export class WordCard extends Block {
  static ClassNameData = {
    container: 'word-card',
  };

  protected group: number;

  protected audioBlock: HTMLElement;

  protected text: HTMLElement;

  constructor(protected data: IWord) {
    super();
    this.container.className = WordCard.ClassNameData.container;
    this.container.id = data.word;
    this.data = data;
    this.group = data.group;
    this.audioBlock = new AudioBlock(data).render();
    this.text = new TextContent(data).render();
    if (this.data.userWord !== null) {
      this.container.classList.add(`${Block.modificationClass.bgModificationClass}${this.data.userWord?.difficulty}`);
    }
  }

  create() {
    this.container.innerHTML = `<img class="word-card_image" src="${baseUrl}${this.data.image}" alt="${this.data.word}">`;
    this.container.append(this.text, this.audioBlock);
    return this.container;
  }

  render() {
    const card = this.create();
    return card;
  }
}
