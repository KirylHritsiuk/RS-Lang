import { LocalStorage } from '../../utils/localStorage';
import { IGetUserToken } from '../../types/types';

export class LocalStorageUser extends LocalStorage<IGetUserToken> {
  constructor(key: string = 'rslang-user') {
    super(key);
  }
}

export default new LocalStorageUser();
