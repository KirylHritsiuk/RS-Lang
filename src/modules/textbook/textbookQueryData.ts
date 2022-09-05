import user from '../user/localStorageUser';
import textbook from './anonymous/localStorageTextbook';
import textbookUser, { LocalStorageTextbookUser } from './user/localStorageTextbookUser';
import { IQueryParameters } from '../../types/types';
import { LocalStorage } from '../../utils/localStorage';
import {
  filterQuery,
  groupQuery,
  pageQuery,
  wordsPerPageQuery,
} from '../../common/query';

export class TextbookQueryData {
  protected local: LocalStorage<IQueryParameters[]>;

  protected localData: IQueryParameters[] | null;

  constructor() {
    if (user.getItemLocalStorage() === null) {
      this.local = textbook;
      console.log('user null');
    } else {
      this.local = textbookUser;
      console.log('user done');
    }
    this.localData = this.local.getItemLocalStorage();
    if (this.localData === null && this.local instanceof LocalStorageTextbookUser) {
      this.local.addItemLocalStorage([groupQuery, pageQuery, wordsPerPageQuery, filterQuery]);
      console.log('textbookUser', [groupQuery, pageQuery, wordsPerPageQuery, filterQuery]);
    } else if (this.localData === null) {
      this.local.addItemLocalStorage([groupQuery, pageQuery]);
      console.log('textbook', [groupQuery, pageQuery]);
    }
  }

  getGroupe() {
    if (this.localData !== null) {
      return Number(this.localData[0].value);
    }
    return 0;
  }

  getPage() {
    if (this.localData !== null) {
      return Number(this.localData[1].value);
    }
    return 0;
  }

  getWordsPerPage() {
    if (this.localData !== null && this.local instanceof LocalStorageTextbookUser) {
      return Number(this.localData[2].value);
    }
    return 0;
  }

  getFilter() {
    if (this.localData !== null && this.local instanceof LocalStorageTextbookUser) {
      return this.localData[3].value;
    }
    return '';
  }

  setGroup(val: string | number) {
    groupQuery.set(val);
  }

  setPage(page: string | number) {
    pageQuery.set(page);
  }

  setWordsPerPage(val: string | number) {
    wordsPerPageQuery.set(val);
  }

  setFilter(val: string) {
    filterQuery.set(val);
  }

  getQuery() {
    if (this.local instanceof LocalStorageTextbookUser) {
      console.log('user', this.local);
      return [groupQuery, pageQuery, wordsPerPageQuery, filterQuery];
    }
    console.log('get q noUser', this.local);
    return [groupQuery, pageQuery];
  }

  updateLocal() {
    if (this.local instanceof LocalStorageTextbookUser) {
      this.local.addItemLocalStorage([groupQuery, pageQuery, wordsPerPageQuery, filterQuery]);
      console.log('update user');
    } else {
      this.local.addItemLocalStorage([groupQuery, pageQuery]);
      console.log('update anonim');
    }
  }
}

export default new TextbookQueryData();
