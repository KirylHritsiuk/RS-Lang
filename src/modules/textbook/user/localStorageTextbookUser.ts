import { LocalStorage } from '../../../utils/localStorage';
import { IQueryParameters } from '../../../types/types';

export class LocalStorageTextbookUser extends LocalStorage<IQueryParameters[]> {
  constructor(key: string = 'rslang-textbook') {
    super(key);
  }
}

export default new LocalStorageTextbookUser();
