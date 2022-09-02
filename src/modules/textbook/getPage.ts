import local from './localStorageTextbook';

export function getPage(): number {
  const data = local.getItemLocalStorage();
  if (data === null) {
    return 0;
  }
  return +data[1].value;
}
