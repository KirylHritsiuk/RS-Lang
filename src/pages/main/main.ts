import {
  arrAdvantages,
  team,
  IArrAdvantages,
  ITeam,
} from '../components/dataPageMain';

export class MainPage {
  protected container: HTMLElement;

  static TextObject = {
    teamClassName: 'person',
    nameLinkClassName: 'our-team',
    manAndLangClassName: 'wrapper-man-and-lang',
    advantagesClassName: 'advantag',
    advantagesWrapperClassName: 'advantages-wrapper',
    advantagWrapClassName: 'advantag-wrap',
    posibilitiesWrapperClassName: 'posibilities-wrapper',
    notForgetWrapperClassName: 'not-forget-wrapper',
    teamWrapperClassName: 'team-wrapper',
    ourTeam: 'our-team',
  };

  constructor() {
    this.container = document.createElement('div');
  }

  static createBlock(data: string | HTMLElement) {
    const container = <HTMLDivElement>document.createElement('div');
    if (data === 'string') {
      container.innerHTML = data;
    } else {
      container.append(data);
    }
    return container;
  }

  static createManAndLang() {
    const container = <HTMLDivElement>document.createElement('div');
    container.className = MainPage.TextObject.manAndLangClassName;
    container.innerHTML = `<div class="svg-man-wrapper">
    <img class="svg-man img-saze-computer" src="./assets/png/man.png" alt="svg">
</div>
<div class="rs-lang-wrapper">
    <span class="big-text">RS Lang</span>
    <span class="text blond" style="margin-top: 20px;">Выучить английский язык просто</span>
    <p class="text">Запоминание английских слов может быть увлекательным и сложным.</br>
    Играйте в игры, слушайте произношение, улучшайте свои
    знания.<br> С нашим приложением учиться в радость.</p>
    <a href="#textbook"><button class="button">Давайте начнем</button></a>
</div>`;
    return container;
  }

  static createAdvantages(data: IArrAdvantages) {
    const container = <HTMLDivElement>document.createElement('div');
    container.className = MainPage.TextObject.advantagesClassName;
    container.innerHTML = `
                    ${data.svg}
                    <h3 class="style-h3">${data.name}</h3>
                    <p class="text-center">${data.text}</p>`;
    return container;
  }

  static createAdvantagesList() {
    const [container, listContainer] = [<HTMLDivElement>document.createElement('div'), <HTMLDivElement>document.createElement('div')];
    container.className = MainPage.TextObject.advantagesWrapperClassName;
    listContainer.className = MainPage.TextObject.advantagWrapClassName;
    container.innerHTML = '<h2 class="style-h2">Преимущества</h2>';
    arrAdvantages.forEach((el) => listContainer.append(MainPage.createAdvantages(el)));
    container.append(listContainer);

    return container;
  }

  static createPossibilities() {
    const container = <HTMLDivElement>document.createElement('div');
    container.className = MainPage.TextObject.posibilitiesWrapperClassName;
    container.innerHTML = `<h2 class="style-h2">Все возможности</h2>
    <iframe class="video" src="https://www.youtube.com/embed/AD7eMN2phjc" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
    return container;
  }

  static createNotForget() {
    const container = <HTMLDivElement>document.createElement('div');
    container.innerHTML = `
                <span class="big-text">Помните</span>
                <div class="text-center">Если вы хотите видеть статистику за все время и иметь <br> доступ к словарю, сначала войдите или зарегистрируйтесь.</div>
                <div class="button-wrapper">
                    <button id="login-bottom" class="button small new-color">Авторизоваться</button>
                    <button id="sing-up-bottom" class="button small">Регистрация</button></a>
                </div>
                <div class = "place-computer">
                <img class="img-saze-computer" src="./assets/png/mans.png" alt="computer">
                </div>`;
    return container;
  }

  static createTeamList() {
    const [container, listContainer] = [<HTMLDivElement>document.createElement('div'), <HTMLDivElement>document.createElement('div')];
    listContainer.className = 'wrapper-persons';
    container.innerHTML = '<h2 class="style-h2">Наша команда</h2>';
    team.forEach((el) => listContainer.append(MainPage.createTeam(el)));
    container.append(listContainer);
    return container;
  }

  static createTeam(data: ITeam) {
    const container = <HTMLDivElement>document.createElement('div');
    container.className = MainPage.TextObject.teamClassName;
    container.innerHTML = `<div class="foto"></div>
                    <div class="information">
                        <h3 class="style-h3">${data.nickName}</h3>
                        <span class="text blond indent">${data.speciality}</span>
                        <span class="text ">${data.contribution}</span>
                        <a href="${data.github}" class="github-logo"><img
  src="./assets/svg/github.svg" alt="github"></a>
                    </div>
                </div>`;
    return container;
  }

  render() {
    this.container.append(
      MainPage.createManAndLang(),
      MainPage.createAdvantagesList(),
      MainPage.createPossibilities(),
      MainPage.createNotForget(),
      MainPage.createTeamList(),
    );
    return this.container;
  }
}
