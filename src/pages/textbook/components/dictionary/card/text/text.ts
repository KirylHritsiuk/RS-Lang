import { IWord } from '../../../../../../types/types';
import { TextContent } from '../../../card/text/text';
import { CardButton } from '../buttons/buttons';

export class TextContentDictionary extends TextContent {
  protected buttons: HTMLElement;

  constructor(protected wordData: IWord) {
    super(wordData);
    this.container.className = TextContent.textObject.containerClass;
    this.buttons = new CardButton(wordData).render();
  }
}
