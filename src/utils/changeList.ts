import { DictionaryList } from '../pages/textbook/components/dictionary/list';
import { List } from '../pages/textbook/components/list';
import { Loader } from '../pages/textbook/components/loader';
import { Textbook } from '../pages/textbook/textbook';

export function changeList(list: List | DictionaryList = new List()) {
  const [
    loader,
    container,
  ] = [
    new Loader().render(),
      <HTMLElement>document.querySelector(`.${Textbook.MainClass.wordsList}`),
  ];
  container.innerHTML = '';
  container.append(
    loader,
    list.render(),
  );
}
