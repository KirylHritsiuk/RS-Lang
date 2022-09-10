import { Api } from '../../utils/api';
import localStorageUser, { LocalStorageUser } from './localStorageUser';
import { IUserSchema, IGetUserToken } from '../../types/types';
import { changeList } from '../../utils/changeList';

export class User extends Api {
  protected client: IUserSchema;

  protected local: LocalStorageUser;

  logoutUserTemp() {
    this.client.name = '';
    this.client.password = '';
    this.client.email = '';
    this.client.avatar = '';
    this.local.clearItemLocalStorage();
  }

  constructor() {
    super();
    this.client = {
      name: '',
      avatar: '',
      email: '',
      password: '',
      complete: false,
    };
    this.local = new LocalStorageUser('rslang-user');
  }

  async checkLogin() {
    const result = localStorageUser.getItemLocalStorage();
    const login = document.querySelector('#login') as HTMLElement;
    if (result) {
      const hash = window.location.hash.slice(1);
      // if (hash === 'textbook') changeList();
      const data = await this.getUser(result.userId, result.token);
      if (login.classList.contains('hidden')) {
        const text = document.querySelector('.text-login') as HTMLDivElement;
        text.innerHTML = `<span>${data.name}</span><span>${data.email}</span>`;
        const img = document.querySelector('avatar-minim') as HTMLImageElement;
        if (data.avatar === ' ') img.src = 'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg';
        else img.src = data.avatar as string;
      } else {
        const logPole = document.querySelector('.log-pole') as HTMLElement;
        const autorize = document.createElement('div') as HTMLDivElement;
        autorize.classList.add('user-autorize');
        const text = document.createElement('div') as HTMLDivElement;
        text.classList.add('text-login');
        text.innerHTML = `<span>${data.name}</span><span>${data.email}</span>`;
        const img = document.createElement('img') as HTMLImageElement;
        img.classList.add('img-avatar');
        img.classList.add('avatar-minim');
        if (data.avatar === ' ') img.src = 'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg';
        else img.src = data.avatar as string;
        autorize.append(text, img);
        logPole.insertAdjacentElement('afterbegin', autorize);
        login.classList.add('hidden');
      }
    } else if (login.classList.contains('hidden')) {
      login.classList.remove('hidden');
      const autorize: HTMLDivElement | null = document.querySelector('.user-autorize') as HTMLDivElement;
      if (autorize) autorize.remove();
    }
  }

  changeLoginHeader() {
    const login = document.querySelector('#login') as HTMLElement;
    const logPole = document.querySelector('.log-pole') as HTMLElement;
    if (login.classList.contains('hidden')) {
      logPole.firstElementChild?.remove();
      login.classList.remove('hidden');
    } else {
      const autorize = document.createElement('div') as HTMLDivElement;
      autorize.classList.add('user-autorize');
      const text = document.createElement('div') as HTMLDivElement;
      text.classList.add('text-login');
      text.innerHTML = `<span>${this.client.name}</span><span>${this.client.email}</span>`;
      const img = document.createElement('img') as HTMLImageElement;
      img.classList.add('img-avatar');
      img.classList.add('avatar-minim');
      // img.src = this.client.avatar ? this.client.avatar : 'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg';
      autorize.append(text, img);
      logPole.insertAdjacentElement('afterbegin', autorize);
      login.classList.add('hidden');
    }
  }

  registerUser = async (user: IUserSchema) => {
    const data = await this.createUser(user);
    if (!data.complete) return false;
    this.client.name = user.name;
    this.client.password = user.password;
    this.client.email = user.email;
    this.client.avatar = user.avatar;
    const userToken: IGetUserToken = await this.signin({
      email: user.email,
      password: user.password,
    });
    if (userToken.token) {
      this.local.addItemLocalStorage(userToken);
      this.checkLogin();
      this.logout();
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
      this.local.addItemLocalStorage(userToken);
      const userData: IUserSchema = await this.getUser(userToken.userId, userToken.token);
      this.client.name = userData.name;
      this.client.password = user.password;
      this.client.email = user.email;
      this.client.avatar = userData.avatar;
      this.checkLogin();
      this.logout();
      return userToken;
    }
    return userToken;
  }

  logout() {
    const listenerLogout = (ev: MouseEvent) => {
      ev.preventDefault();
      this.logoutUserTemp();
      const logout = document.querySelector('#logout') as HTMLElement;
      this.checkLogin();
      logout.removeEventListener('click', listenerLogout);
    };
    const logout = document.querySelector('#logout') as HTMLElement;
    logout.addEventListener('click', listenerLogout);
  }
}

export default new User();
