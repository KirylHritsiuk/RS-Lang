import '../../style/miniGame.css'

export class Minigame{
    protected container: HTMLDivElement;

    static TextObject= {
        containerClassName: 'wrapper-game',
    }

    constructor(){
        this.container = <HTMLDivElement>document.createElement('div');
        this.container.className = Minigame.TextObject.containerClassName;
    }

    createGame(){
        this.container.innerHTML = `
        <div class="game">
            <div class="icon">
                <img src="./assets/img/headphones.png" class="game-img" alt="lion">
            </div>
            <div class="title">
                <span class="game-h2">Audio challenge</span>
            </div>
            <div class="game-text-wrapper">
                <p class="game-text">Check your listening skills, trying to pick the right meaning after hearing a
                    word. Be careful, as you just have one guess.</p>
            </div>
            <div class="game-btn-wrapper">
                <button class="game-btn audio-btn-color">
                    <span class="game-btn-text">play</span>
                </button>
            </div>
        </div>
        <div class="game">
            <div class="icon">
                <img src="./assets/img/shoes.png" class="img" alt="lion">
            </div>
            <div class="title">
                <span class="game-h2">Sprint</span>
            </div>
            <div class="game-text-wrapper">
                <p class="game-text">Check how much points you can get in one minute, making educated guesses about what is right and what is wrong.</p>
            </div>
            <div class="game-btn-wrapper">
                <button class="game-btn sprint-btn-color">
                    <span class="game-btn-text">play</span>
                </button>
            </div>
        </div>
    `
        return this.container
    }

    render(){
        this.container.append(this.createGame())
        return this.container;
    }
}