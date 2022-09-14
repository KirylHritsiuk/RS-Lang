import { IGetUserToken } from '../../types/types';
import userLocal from './localStorageUser';

export const getUserToken = () => {
  const data: IGetUserToken | null = userLocal.getItemLocalStorage();
  if (data) {
    return data.token;
  }
  return '';
};
