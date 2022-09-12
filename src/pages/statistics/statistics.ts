import '../../style/statistics.css';
import Api from '../../utils/api';
import { LocalStorageUser } from '../../modules/user/localStorageUser';
import { IGetUserToken } from '../../types/types';

export class Statistics {
  protected container: HTMLElement;

  public dataLocalUser: IGetUserToken;

  static TextObject = {
    containerWrapperName: 'statistics-wrapper',
    containerToday: 'today-wrapper',
    containerAll: 'today-wrapper',
  };

  static dataLocalUser: IGetUserToken;

  constructor() {
    this.dataLocalUser = new LocalStorageUser().getItemLocalStorage() as IGetUserToken;
    this.container = <HTMLElement>document.createElement('div');
    this.container.className = Statistics.TextObject.containerWrapperName;
  }

  static createContainerToday() {
    const userlocalStorage = localStorage.getItem('rslang-user');
    const container = <HTMLDivElement>document.createElement('div');
    container.className = Statistics.TextObject.containerAll;
    container.innerHTML = `
            <div class="wrapp-sory">
            <img class="sory-img"src="./assets/jpg/inform.jpg" alt="jpg">
            <p class="sory">Упс!!!  произошла ошибка,<br> мы работаем над ее устранением</p>
            </div>`;

    return container;
  }

  render() {
    this.container.append(Statistics.createContainerToday());
    return this.container;
  }
}
