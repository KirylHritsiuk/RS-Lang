import { groupQuery, pageQuery } from '../../common/query';
import { getPage } from './getPage';
import { getGroup } from './getGroup';
import { IQueryParameters } from '../../types/types';

export function createQuery(
  group: number = getGroup(),
  page: number = getPage(),
) : IQueryParameters[] {
  groupQuery.value = group;
  pageQuery.value = page;
  const queryParameters = [];
  queryParameters.push(groupQuery, pageQuery);
  return queryParameters;
}
