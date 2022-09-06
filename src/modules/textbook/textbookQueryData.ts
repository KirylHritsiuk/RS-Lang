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
import { Query } from '../../common/queryTemplate';

export class TextbookQueryData {
  protected local: LocalStorage<IQueryParameters[]>;

  protected localData: IQueryParameters[] | null;

  constructor() {
    if (user.getItemLocalStorage() === null) {
      this.local = textbook;
    } else {
      this.local = textbookUser;
    }
    this.localData = this.local.getItemLocalStorage();
    if (this.localData === null && this.local instanceof LocalStorageTextbookUser) {
      this.local.addItemLocalStorage(this.getQuery());
    } else if (this.localData === null) {
      this.local.addItemLocalStorage(this.getQuery());
    } else {
      this.updateQuery();
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
      return [groupQuery, pageQuery, wordsPerPageQuery, filterQuery];
    }
    return [groupQuery, pageQuery];
  }

  updateQuery() {
    let query: Query[] = [];
    if (this.local instanceof LocalStorageTextbookUser) {
      query = [groupQuery, pageQuery, wordsPerPageQuery, filterQuery];
    } else {
      query = [groupQuery, pageQuery];
    }
    this.localData!.forEach((item, index) => {
      query[index].set(item.value);
    });
  }

  updateLocal() {
    if (this.local instanceof LocalStorageTextbookUser) {
      this.local.addItemLocalStorage([groupQuery, pageQuery, wordsPerPageQuery, filterQuery]);
    } else {
      this.local.addItemLocalStorage([groupQuery, pageQuery]);
    }
  }
}

export default new TextbookQueryData();
