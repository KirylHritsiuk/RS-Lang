import {MainHeader} from '../components/header'; 
import {Main} from '../pages/main/main';
import {Footer} from '../components/footer';
import {Burger} from '../components/burger';
import {Body} from '../components/createBody';
import {Statistics} from '../pages/statistics/statistics';


export class App {
private initialHeader: MainHeader;
private initialMain: Main;
private initialFooter: Footer;
private initialBody: Body;
private initianStatistics: Statistics;
private initialBurger: Burger;


constructor(){ 
    this.initialHeader = new MainHeader();
    this.initialMain = new Main();
    this.initialFooter = new Footer();
    this.initialBody = new Body();
    this.initianStatistics = new Statistics();
    this.initialBurger = new Burger();
}

run(){
    const bodyHTML = this.initialBody.render();
    const headerHtml = this.initialHeader.render();
    const mainPageContent = this.initialMain.render();
    const footerHTML = this.initialFooter.render();
    // const statisticsHTML = this.initianStatistics.render();
    const initialBurgerHTML = this.initialBurger.controlBurger();
}

}