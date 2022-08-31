import local from './localStorageTextbook';

export function getGroup(): number {
  const data = local.getItemLocalStorage();
  if (data === null) {
    return 0;
  }
  return +data[0].value;
}
