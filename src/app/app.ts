import {MainHeader} from '../components/header'; 
import {Main} from '../pages/main/main';
import {Footer} from '../components/footer';
import {burger} from '../components/burger';
import {Body} from '../components/createBody';
import {Statistics} from '../pages/statistics/statistics';
import {StartMain} from '../pages/main/startMain'

export class App {

private initialHeader: MainHeader;
private initialMain: Main;
private initialFooter: Footer;
private initialBody: Body;
private initianStatistics: Statistics;
private initialStartMain: StartMain


constructor(){ 
    this.initialHeader = new MainHeader();
    this.initialMain = new Main();
    this.initialFooter = new Footer();
    this.initialBody = new Body();
    this.initianStatistics = new Statistics();
    this.initialStartMain = new StartMain();
}

run(){
    const bodyHTML = this.initialBody.render()
    
    const headerHtml = this.initialHeader.rander();
    const mainStartMainHTML = this.initialStartMain.render()
    const mainPageContent = this.initialMain.rander();
    const footerHTML = this.initialFooter.render()
    
    // const statisticsHTML = this.initianStatistics.render()
    burger()
}

}