import {team, ITeam} from './dataPageMain'

export class Footer{
protected container: HTMLDivElement;
static TextOject = {
    nameLinkClassName: 'link-person',
    nameFooterContent: 'footer-wrapper'
}


protected createFooter (){
    const container = document.createElement('div');
    container.className = Footer.TextOject.nameFooterContent;
    container.innerHTML = `<a href="https://rs.school/js/"><img src="./assets/rs_school_js.svg" alt="rs" width="90"></a>
    <div class="name-link"></div>
    <div class="footer-text">
        <span class="text ">© 2022</span>
    </div>`
    return container  
}

protected createLink (data: ITeam){
    const container = document.createElement('div');
    container.className = Footer.TextOject.nameLinkClassName;
    container.innerHTML = `<a class="footer-link text" href="${data.github}">${data.nickName}</a>`
    return container  
}

render(){
    const footerHTML = <HTMLDivElement>document.querySelector('.footer')
   
    // console.log(footerHTML)
    console.log('rrrrrrrrrrrrrr')
    footerHTML.append(this.createFooter())
    const footerLinkHTML = <HTMLDivElement>document.querySelector('.name-link')
  
    team.forEach(el => footerLinkHTML.append(this.createLink(el)))

    
}
}