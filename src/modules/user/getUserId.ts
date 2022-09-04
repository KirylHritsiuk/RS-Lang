import { IGetUserToken } from '../../types/types';
import userLocal from './localStorageUser';

export const getUserId = () => {
  const data: IGetUserToken | null = userLocal.getItemLocalStorage();
  if (data) {
    return data.userId;
  }
  return '';
};
