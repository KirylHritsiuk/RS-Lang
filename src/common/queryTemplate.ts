import { IQueryParameters } from '../types/types';

export abstract class Query implements IQueryParameters {
  constructor(
      public value: number | string,
      public readonly key: number | string,
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
