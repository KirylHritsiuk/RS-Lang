/* eslint-disable import/no-unresolved */
import { IWord, WordCard } from './pages/textbook/wordlist/worldcard/index';
import './styles/card/style.css';
import './styles/textnote/style.css';

async function startCard() {
  const response = await fetch('https://new-learnword.herokuapp.com/words?group=2&page=2');
  const data:IWord[] = await response.json();
  // const list = document.createElement('div');
  const list = <HTMLDivElement>document.querySelector('.words-list');
  data.forEach((data) => {
    const card = new WordCard(data);
    list.append(card.render());
  });
  // document.body.append(list);
  // console.log(card);
//   return card;
}

startCard();
