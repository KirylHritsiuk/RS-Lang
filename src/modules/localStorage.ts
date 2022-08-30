import { IGetUserToken } from '../types/types';

export class LocalStorage {
  addUserLocalStorage(user: IGetUserToken) {
    localStorage.setItem('rslang-user', JSON.stringify(user));
  }

  getUserLocalStorage(): IGetUserToken | null {
    const result: string | null = localStorage.getItem('rslang-user');
    if (result) {
      return JSON.parse(result);
    }
    return null;
  }

  clearUserLocalStorage(): void {
    localStorage.removeItem('rslang-user');
  }

}