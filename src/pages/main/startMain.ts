export class StartMain{
    protected container: HTMLElement;
    static TextObject = {
        containerClassName: ''
    }

    constructor(){
        this.container = <HTMLDivElement>document.createElement('div');
        this.container.className = 'page-content'
    }

    protected createStartMain(){
        this.container.innerHTML = `<div class="header-wrapper">
        </div>
        </header>
        <main class="main">
            <div class="wrapper-man-and-lang">
                <div class="svg-man-wrapper">
                    <img class="svg-man img-saze-computer" src="./assets/man.svg" alt="svg">
                </div>
                <div class="rs-lang-wrapper">
                    <span class="big-text">RS Lang</span>
                    <span class="text blond" style="margin-top: 20px;">Learning English has never been so easy</span>
                    <p class="text">Memorizing English words can be fun and challenging.<br> Play games, listen to
                        pronunciation, improve your<br> knowledge. With our app, learning is a joy</p>
                    <a href="https://rss-lang-team-53.web.app/textbook"><button class="button">let's start</button></a>
                </div>
            </div>
            <div class="advantages-wrapper">
                <h2 class="style-h2">Advantages</h2>
                <div class="advantag-wrap"> </div>
            </div>
            <div class="posibilities-wrapper">
                <h2 class="style-h2">All posibilities</h2>
                <iframe class="video" src="https://www.youtube.com/embed/AD7eMN2phjc" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

            <div class="not-forget-wrapper">
                <span class="big-text">Don't forget</span>
                <div class="text-center">If you want to see statistics for all time and have <br> access to the
                    dictionary, please login or sign up first.</div>
                <div class="button-wrapper">
                    <a href="https://rss-lang-team-53.web.app/textbook"><button
                            class="button small new-color">login</button></a>
                    <a href="https://rss-lang-team-53.web.app/textbook"><button class="button small">sing
                            up</button></a>
                </div>
                <img class="img-saze-computer" src="./assets/computer.svg" alt="computer">
            </div>
            <div class="team-wrapper">
                <h2 class="style-h2">Our team</h2>
                <div class="our-team"></div>
            </div>`

            return this.container
    }

    render(){
        const pageContainer = <HTMLDivElement>document.querySelector('.footer')
        pageContainer.before(this.createStartMain())
    }
}