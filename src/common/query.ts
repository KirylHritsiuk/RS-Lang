/* eslint-disable max-classes-per-file */
import { IQueryParameters } from '../types/types';

export abstract class QueryItem implements IQueryParameters {
  constructor(
    public value: number | string,
    public key: number | string,
  ) {
    this.key = key;
    this.value = value;
  }

  get() {
    return this.value;
  }

  set(val: number | string) {
    this.value = val;
  }
}

class GroupQuery extends QueryItem {
  constructor(value = 3, key = 'group') {
    super(value, key);
  }
}
class PageQuery extends QueryItem {
  constructor(value = 3, key = 'page') {
    super(value, key);
  }
}
class WordsPerPage extends QueryItem {
  constructor(value = 20, key = 'wordsPerPage') {
    super(value, key);
  }
}
class FilterQuery extends QueryItem {
  constructor(value = '', key = 'filter') {
    super(value, key);
  }
}

export const groupQuery = new GroupQuery();
export const pageQuery = new PageQuery();
export const wordsPerPage = new WordsPerPage();
export const filter = new FilterQuery();
