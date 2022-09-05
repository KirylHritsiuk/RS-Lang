import { Query } from './queryTemplate';

export class QueryItem extends Query {
}

export const groupQuery = new QueryItem(0, 'group');
export const pageQuery = new QueryItem(0, 'page');
export const wordsPerPageQuery = new QueryItem(20, 'wordsPerPage');
export const filterQuery = new QueryItem('', 'filter');
