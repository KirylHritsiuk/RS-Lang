import { Api } from '../utils/api/api';
import { LocalStorage } from '../modules/localStorage';
import {
  IUserSchema,
  IGetUserToken,
} from '../types/types';

export class User extends Api {
  protected client: IUserSchema;
  protected local: LocalStorage;

  constructor() {
    super();
    this.client = {
      name: '',
      email: '',
      password: '',
      complete: false,
    };
    this.local = new LocalStorage()
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
      this.local.addUserLocalStorage(userToken);
      this.listenerLogout()
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
      this.local.addUserLocalStorage(userToken);
      const userData: IUserSchema = await this.getUser(userToken.userId, userToken.token);
      this.listenerLogout()
      return userToken;
    }
    return userToken;
  }

  listenerLogout() {
    const logout = document.querySelector('.a-nav') as HTMLLinkElement
    logout.addEventListener('click', (ev) => {
      ev.preventDefault()
      this.logoutUser()
    })
  }

  logoutUser() {
    this.local.clearUserLocalStorage();
  }
}
