import {body} from '../components/dataPageMain'

export class Body{
    protected containerHead: HTMLDivElement; 
    protected containerFooter: HTMLDivElement; 
    static TextOject = {
        footerClassName: 'footer',
        headerClassName: 'page-content'
    }

    constructor(){
        this.containerFooter = <HTMLDivElement>document.createElement('div');
        this.containerFooter.className = Body.TextOject.footerClassName;
        this.containerHead = <HTMLDivElement>document.createElement('div');
        this.containerHead.className = Body.TextOject.headerClassName; 
    }




    render(){
        const containerHeadHtml = body.append(this.containerHead)
        const containerFooterHTML = <HTMLElement>document.querySelector('.page-content')
        // const containerHeadHtml = body.append(this.containerHead)
        containerFooterHTML .append(this.containerFooter)
        
        // return  this.containerHead
    }
}