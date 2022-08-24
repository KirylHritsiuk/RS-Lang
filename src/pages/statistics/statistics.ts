import '../../style/statistics.css';


export class Statistics{
    protected container: HTMLElement;
    protected containerTitle: HTMLElement;
    protected containerCard: HTMLElement
    static TextObject = {
        containerWrapperName: 'statistics-wrapper',
        // containerTitleName: 'statistics-title',
        // containerCardName: 'statistics-card'
    }

    constructor(){
        this.container = <HTMLElement>document.createElement('div');
        this.container.className = Statistics.TextObject.containerWrapperName;

    }

    protected createContainer(){
        this.container.innerHTML = `<div class="statistics-wrapper">
        <div class="today-wrapper">
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
                            <img src="./assets/img/lion.png" class="img" alt="lion">
                            <div class="title-h4 position">Savannah</div>
                        </div>
                        <div class="name-game-underline"></div>
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
    
                    <div class="card">
                        <div class="name-game">
                            <img src="./assets/img/nature.png" class="img" alt="lion">
                            <div class="title-h4 position">Imaginarium</div>
                        </div>
                        <div class="maginarium-underline"></div>
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
            </div>
        </div>
    </div>`
        return this.container
    }

    render(){
        const pageContainer = <HTMLDivElement>document.querySelector('.footer')
        pageContainer.before(this.createContainer())
    }
}

