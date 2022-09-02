import { LocalStorage } from '../../utils/localStorage';
import { IQueryParameters } from '../../types/types';

class LocalStorageDictionary extends LocalStorage<IQueryParameters[]> {
  constructor(key: string = 'dictionary') {
    super(key);
  }
}

export default new LocalStorageDictionary();
