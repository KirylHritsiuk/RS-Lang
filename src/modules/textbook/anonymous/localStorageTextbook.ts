import { LocalStorage } from '../../../utils/localStorage';
import { IQueryParameters } from '../../../types/types';

export class LocalStorageTextbook extends LocalStorage<IQueryParameters[]> {
  constructor(key: string = 'textbook') {
    super(key);
  }
}

export default new LocalStorageTextbook();
