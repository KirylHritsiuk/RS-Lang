import '../../style/statistics.css';

export class Statistics {
  protected container: HTMLElement;

  static TextObject = {
    containerWrapperName: 'statistics-wrapper',
    containerToday: 'today-wrapper',
    containerAll: 'today-wrapper',
  };

  constructor() {
    this.container = <HTMLElement>document.createElement('div');
    this.container.className = Statistics.TextObject.containerWrapperName;
  }

  static createContainerToday() {
    const container = <HTMLDivElement>document.createElement('div');
    container.className = Statistics.TextObject.containerAll;
    container.innerHTML = `
            <div class="today">
                <div class="title-h3 title-today">Today</div>
            </div>
            <div class="container-card">
                <div class="global-wrap">
                    <div class="words-wrapper">
                        <div class="words-content">
                            <div class="title-h2 indent">0</div>
                            <div class="words-wrap">
                                <div class="words title-h3">words</div>
                                <span class="learned">were learned</span>
                            </div>
                        </div>
                    </div>
                    <div class="accurasy-wrapper">
                        <div class="title-h3">Accuraty</div>
                        <div class="diagram"></div>
                    </div>
                </div>
                <div class="container-games-card">
                    <div class="card">
                        <div class="name-game">
                            <img src="./assets/img/headphones.png" class="img" alt="lion">
                            <div class="title-h4 position">Audio challenge</div>
                        </div>
                        <div class="audio-challenge-underline"></div>
                        <div class="words-game">
                            <div class="amount all-text">0</div>
                            <div class="all-text">words</div>
                        </div>
                        <div class="accuracy-game">
                            <div class="amount all-text">0%</div>
                            <div class="all-text">accuracy</div>
                        </div>
                        <div class="row-game">
                            <div class="amount all-text">0</div>
                            <div class="all-text">in a row</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="name-game">
                            <img src="./assets/img/shoes.png" class="img" alt="lion">
                            <div class="title-h4 position">Sprint</div>
                        </div>
                        <div class="sprint-underline"></div>
                        <div class="words-game">
                            <div class="amount all-text">0</div>
                            <div class="all-text">words</div>
                        </div>
                        <div class="accuracy-game">
                            <div class="amount all-text">0%</div>
                            <div class="all-text">accuracy</div>
                        </div>
                        <div class="row-game">
                            <div class="amount all-text">0</div>
                            <div class="all-text">in a row</div>
                        </div>
                    </div>
                </div>
    </div>`;
    return container;
  }

  static createContainerAllTime() {
    const container = <HTMLDivElement>document.createElement('div');
    container.className = Statistics.TextObject.containerAll;
    container.innerHTML = `
            <div class="today">
                <div class="title-h3 title-today">All time</div>
            </div>
            <div class="container-card">
                <div class="global-wrap">
                    <div class="words-wrapper">
                        <div class="words-content">
                            <div class="title-h2 indent">0</div>
                            <div class="words-wrap">
                                <div class="words title-h3">words</div>
                                <span class="learned">were learned</span>
                            </div>
                        </div>
                    </div>
                    <div class="accurasy-wrapper">
                        <div class="title-h3">Accuraty</div>
                        <div class="diagram"></div>
                    </div>
                </div>
                <div class="container-games-card">
                    <div class="card">
                        <div class="name-game">
                            <img src="./assets/img/headphones.png" class="img" alt="lion">
                            <div class="title-h4 position">Audio challenge</div>
                        </div>
                        <div class="audio-challenge-underline"></div>
                        <div class="words-game">
                            <div class="amount all-text">0</div>
                            <div class="all-text">words</div>
                        </div>
                        <div class="accuracy-game">
                            <div class="amount all-text">0%</div>
                            <div class="all-text">accuracy</div>
                        </div>
                        <div class="row-game">
                            <div class="amount all-text">0</div>
                            <div class="all-text">in a row</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="name-game">
                            <img src="./assets/img/shoes.png" class="img" alt="lion">
                            <div class="title-h4 position">Sprint</div>
                        </div>
                        <div class="sprint-underline"></div>
                        <div class="words-game">
                            <div class="amount all-text">0</div>
                            <div class="all-text">words</div>
                        </div>
                        <div class="accuracy-game">
                            <div class="amount all-text">0%</div>
                            <div class="all-text">accuracy</div>
                        </div>
                        <div class="row-game">
                            <div class="amount all-text">0</div>
                            <div class="all-text">in a row</div>
                        </div>
                    </div>
                </div>
    </div>`;
    return container;
  }

  render() {
    this.container.append(Statistics.createContainerToday(), Statistics.createContainerAllTime());
    return this.container;
  }
}
