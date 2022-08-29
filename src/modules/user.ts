import { Api } from '../utils/api/api';
import {
  IUserSchema,
  IGetUserToken,
} from '../types/types';

export class User extends Api {
  protected client: IUserSchema;

  constructor() {
    super();
    this.client = {
      name: '',
      email: '',
      password: '',
      complete: false,
    };
  }

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

  registerUser = async (user: IUserSchema) => {
    const data = await this.createUser(user);
    if (!data.complete) {
      return false;
    }
    const userToken: IGetUserToken = await this.signin({
      email: user.email,
      password: user.password,
    });
    if (userToken.token) {
      this.addUserLocalStorage(userToken);
      return data;
    }
    return false;
  };

  async loginUser(user: IUserSchema) {
    const userToken: IGetUserToken = await this.signin({
      email: user.email,
      password: user.password,
    });
    if (userToken.token) {
      this.addUserLocalStorage(userToken);
      const userData: IUserSchema = await this.getUser(userToken.userId, userToken.token);
      return userToken;
    }
    return userToken;
  }

  logoutUser() {
    this.clearUserLocalStorage();
  }
}
