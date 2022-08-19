import './reset.css';
import './style.css';
import {App} from './pages/app/app'

const app = new App();
app.run();
// import {arrAdvantages, team} from './arrAdvantages';
// const placeAdvantag = <HTMLElement>document.querySelector('.advantag-wrap')
// const nameLink = <HTMLElement>document.querySelector('.name-link')
// const ourTeam = <HTMLElement>document.querySelector('.our-team')


// arrAdvantages.forEach(e=>{
// placeAdvantag.insertAdjacentHTML('afterbegin',`
//                         <div class="advantag">
//                             ${e.svg}
//                             <h3 class="style-h3">${e.name}</h3>
//                             <p class="text-center">${e.text}</p>
//                         </div>
// `)
// })

// team.forEach(e=>{
//     ourTeam.insertAdjacentHTML('afterbegin',`
//                     <div class="person">
//                         <div class="foto"></div>
//                         <div class="information">
//                             <h3 class="style-h3">${e.nickName}</h3>
//                             <span class="text blond indent">${e.speciality}</span>
//                             <span class="text ">${e.contribution}</span>
//                             <a href="${e.github}" class="github-logo"><img src="./assets/github.svg" alt="github"></a>
//                         </div>
//                     </div>
//     `)
// })

// team.forEach(e=>{
//     nameLink.insertAdjacentHTML('afterbegin',`
//     <a class="footer-link text" href="${e.github}">${e.nickName}</a>
//     `)
// })



// //------------------------------------------------------------------
// const btnBurger = <HTMLElement>document.querySelector('.plase-burger')
// const nawWrapper = <HTMLElement>document.querySelector('.naw-wrapper')
// const icon = <HTMLElement>document.querySelector('.svg-burger')

// btnBurger.addEventListener('click', e => {
//   if(btnBurger.className === 'plase-burger'){
//       nawWrapper.classList.add('scroll')
//         icon.innerHTML = ''
//         icon.innerHTML = `<path
//     d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
// </path>`
//       btnBurger.classList.add('a')
// }else{
//     nawWrapper.classList.remove('scroll')
//       icon.innerHTML = ''
//     icon.innerHTML = '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>'
//     btnBurger.classList.remove('a')
// }
//    })
// //---------------------------------------------------------
// const pleceHeader = <HTMLElement>document.querySelector('.header-wrapper')
// function createHeader(){
//     pleceHeader.insertAdjacentHTML('beforebegin',`
//     <div class="login-wrapper">
//                 <h1 class="style-h1">Main</h1>
//                 <button class="login">
//                     <div class="plase-login">
//                         <svg class="svg-login" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
//                             <path
//                                 d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z">
//                             </path>
//                         </svg>
//                     </div>
//                     <div class="svg-login-plase">
//                         <span class="login-text">LOGIN</span>
//                     </div>
//                 </button>
//             </div>
//     `)
// }
// createHeader()