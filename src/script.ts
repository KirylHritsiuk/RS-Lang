import {arrAdvantages, team} from './arrAdvantages.js';
const placeAdvantag = <HTMLElement>document.querySelector('.advantag-wrap')
const nameLink = <HTMLElement>document.querySelector('.name-link')
const ourTeam = <HTMLElement>document.querySelector('.our-team')


arrAdvantages.forEach(e=>{
placeAdvantag.insertAdjacentHTML('afterbegin',`
                        <div class="advantag">
                            ${e.svg}
                            <h3 class="style-h3">${e.name}</h3>
                            <p class="text-center">${e.text}</p>
                        </div>
`)
})

team.forEach(e=>{
    ourTeam.insertAdjacentHTML('afterbegin',`
                    <div class="person">
                        <div class="foto"></div>
                        <div class="information">
                            <h3 class="style-h3">${e.nickName}</h3>
                            <span class="text blond indent">${e.speciality}</span>
                            <span class="text ">${e.contribution}</span>
                            <a href="${e.github}" class="github-logo"><img src="./assets/github.svg" alt="github"></a>
                        </div>
                    </div>
    `)
})

team.forEach(e=>{
    nameLink.insertAdjacentHTML('afterbegin',`
    <a class="footer-link text" href="${e.github}">${e.nickName}</a>
    `)
})