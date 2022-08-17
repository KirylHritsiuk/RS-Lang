/* eslint-disable import/no-unresolved */
import { IWord, WordCard } from './pages/textbook/wordlist/worldcard/index';
import './styles/card/style.css';

async function startCard() {
  console.log('start');
  const response = await fetch('https://new-learnword.herokuapp.com/words?group=1&page=1');
  const data:IWord[] = await response.json();
  const list = document.createElement('div');
  list.className = 'words-list';
  data.forEach((data) => {
    const card = new WordCard(data);
    list.append(card.render());
  });
  document.body.append(list);
  // console.log(card);
//   return card;
}

startCard();
