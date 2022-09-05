import { DictionaryList } from '../pages/dictioanary/list';
import { List } from '../pages/textbook/components/list';
import { Loader } from '../pages/textbook/components/loader';

export function changeList(list: List | DictionaryList = new List()) {
  const [
    loader,
    container,
  ] = [
    new Loader().render(),
      <HTMLElement>document.querySelector('.words-list'),
  ];
  container.innerHTML = '';
  container.append(
    loader,
    list.render(),
  );
}
