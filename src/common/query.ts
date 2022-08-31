/* eslint-disable max-classes-per-file */
import { IQueryParameters } from '../types/types';

abstract class QueryItem implements IQueryParameters {
  constructor(
    public key: number | string,
    public value: number | string,
  ) {
    this.key = key;
    this.value = value;
  }
}

class GroupQuery extends QueryItem {
  constructor(key = 'group', value = 0) {
    super(key, value);
  }
}
class PageQuery extends QueryItem {
  constructor(key = 'page', value = 0) {
    super(key, value);
  }
}
class WordsPerPage extends QueryItem {
  constructor(key = 'wordsPerPage', value = 20) {
    super(key, value);
  }
}
class FilterQuery extends QueryItem {
  constructor(key = 'filter', value = '') {
    super(key, value);
  }
}

export const groupQuery = new GroupQuery();
export const pageQuery = new PageQuery();
export const wordsPerPage = new WordsPerPage();
export const filter = new FilterQuery();
