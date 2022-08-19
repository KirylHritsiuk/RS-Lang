import {MainHeader} from '../../core/templates/header' 

export class App {

private initialPage: MainHeader;

constructor(){ 
    this.initialPage = new MainHeader()
}

run(){
    const mainHeaderHtml = this.initialPage.rander()
}

}