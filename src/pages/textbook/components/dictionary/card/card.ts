import { IWord } from '../../../../../types/types';
import { WordCard } from '../../card/card';
import { TextContentDictionary } from './text/text';

export class DictionaryCard extends WordCard {
  constructor(protected data: IWord) {
    super(data);
    this.text = new TextContentDictionary(data).render();
  }
}
