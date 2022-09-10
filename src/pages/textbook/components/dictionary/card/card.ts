import { IWord } from '../../../../../types/types';
import { WordCard } from '../../card/card';
import { TextContentDictionary } from './text/text';

export class DictionaryCard extends WordCard {
  constructor(protected wordData: IWord) {
    super(wordData);
    this.text = new TextContentDictionary(wordData).render();
  }
}
