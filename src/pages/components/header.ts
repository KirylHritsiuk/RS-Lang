import Api from "../../utils/api"
import { IGetUserToken } from "../../types/types";

export class Header {
  protected container: HTMLHeadElement;


  static TextObject = {
    ClassName: 'header-wrapper',
    avatarClassName: 'wrapper-avatar'
  };

  constructor() {
    this.container = <HTMLHeadElement>document.createElement('header');
    this.container.className = Header.TextObject.ClassName;
  }

  createAvatar(data: string) {
    const container = <HTMLDivElement>document.createElement('div');
    container.className = Header.TextObject.avatarClassName
    if (data.length) {
      container.innerHTML = `<img src="${data}" class="img-avatar" alt="avatar">`
      return container.outerHTML
    } else {
      container.innerHTML = `
                <svg class="svg-avatar" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                    </path>
                </svg>
                 `
      return container.outerHTML
    }
  }

  createNameUser(){
    const localStorageUser: IGetUserToken | null = JSON.parse(localStorage.getItem('rslang-user'))
    if (localStorageUser === null) {
      return 
    }else{
    const container = <HTMLDivElement>document.createElement('div')
    container.className = 'wrapper-yes-registration'
    
    const id = localStorageUser.userId
    const token = localStorageUser.token
    Api.getUser(id, token).then(data => {
      console.log(data)
      container.innerHTML = `
          <div class="wrapper-name">
             <p class="registration-text">${data.name}</p>
             <p class="registration-text">${data.email}</p>
          </div>
          ${this.createAvatar('')}         
         `;
    })
            this.container.append(container)
            
       return this.container
  }
  
  }

  reload(){
    setTimeout(()=>{
    const singIn = <HTMLElement>document.querySelector('.btn-login')
    singIn.addEventListener('click', ()=>{
      setTimeout(()=>{
        location.reload()
      },1000)
          })
     },2000)
  }

  render() {
    const localStorageUser: IGetUserToken | null = JSON.parse(localStorage.getItem('rslang-user'))
    if (localStorageUser === null) {
       this.container.innerHTML = `<div class="login-wrapper">
        <h1 id="headerTitle" class="style-h1"></h1>
        <div class="wrapper-no-registration">
           <button class="login" id="login">
               <div class="plase-login">
                   <svg class="svg-login" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                       <path
                           d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z">
                       </path>
                   </svg>
               </div>
               <div class="svg-login-plase">
                   <span class="login-text">LOGIN</span>
               </div>
           </button>
       </div>
    </div>`;
      return this.container;
    } else {
        this.container.innerHTML = `
        <div class="login-wrapper">
          <h1 id="headerTitle" class="style-h1"></h1>
        </div>
        `;
      return this.container;
      }
  }
}

