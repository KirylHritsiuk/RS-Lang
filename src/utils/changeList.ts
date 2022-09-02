import { List } from '../pages/textbook/components/list';
import { Loader } from '../pages/textbook/components/loader';

export function changeList() {
  const [
    list,
    loader,
    container,
  ] = [
    new List(),
    new Loader(),
      <HTMLElement>document.querySelector('.words-list'),
  ];
  container.innerHTML = '';
  container.append(
    loader.render(),
    list.render(),
  );
}
