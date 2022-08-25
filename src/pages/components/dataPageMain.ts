const btnBurger = <HTMLDivElement>document.querySelector('.plase-burger')
const nawWrapper = <HTMLDivElement>document.querySelector('.naw-wrapper')
const icon = <HTMLDivElement>document.querySelector('.svg-burger')
// const listIconSvg = <HTMLDivElement>document.querySelector('.')
const modal = <HTMLDivElement>document.querySelector('.modal');
const containerUL = <HTMLUListElement>document.querySelector('.ul-wrapper');
const burgerWrapper = <HTMLDivElement>document.querySelector('.burger-wrapper');
const svgBurger = <HTMLDivElement>document.querySelector('.svg-burger');
const spanRs = <HTMLSpanElement>document.querySelector('.span-rs');
const body = <HTMLBodyElement>document.body;

export {btnBurger, nawWrapper, icon, modal, containerUL, burgerWrapper, svgBurger, spanRs, body}

export interface IArrAdvantages{
    svg: string,
    name: string,
    text: string
}

export interface ITeam{
    nickName:string,
        speciality: string,
        contribution: string,
        github: string,
        photo:string
}

export const arrAdvantages: IArrAdvantages[] =[
    {
        svg:'<svg class="svg-main-page" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(2, 82, 204); font-size: 56px;"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>',
        name:'Textbook',
        text:'The electronic textbook consists of six sections. Each section has 30 pages of 20 words. The translation of the word, the thematic image, as well as the pronunciation of both the word separately and as part of the phrase are presented.'
    },
    {
        svg:'<svg class="svg-main-page" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(2, 82, 204); font-size: 56px;"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>',
        name:'Dictionary',
        text:'The dictionary contains lists of studied words, words that do not need to be learned, as well as those that cause difficulties. The dictionary reflects statistics for each section and student progress.'
    },
    {
        svg:'<svg class="svg-main-page" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(2, 82, 204); font-size: 56px;"><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>',
        name:'Games',
        text:'For learning words and reinforcing memorization, the application has 4 games: Savannah, Sprint, Audio Chalenge and Imaginarium, which will help you to "pump" your vocabulary in a playful way.'
    },
    {
        svg:'<svg class="svg-main-page" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(2, 82, 204); font-size: 56px;"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></svg>',
        name:'Statistics',
        text:'All the progress of training can be viewed in statistics, where data for the current day, as well as for the entire training period, are presented. The information is presented both in the form of a table and graphs, which is very convenient.'
    }
]

export const team:ITeam[] = [
    {
        nickName:'Siarhei Ashmiana',
        speciality: 'Frontend developer',
        contribution: 'Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend',
        github: 'https://github.com/Sergei5431',
        photo:'<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(2, 82, 204); font-size: 56px;"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>'
    },
    {
        nickName:'Artem Korotkov',
        speciality: 'Frontend developer',
        contribution: 'Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend',
        github: 'https://github.com/avkor66',
        photo:'<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(2, 82, 204); font-size: 56px;"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>'
    },
    {
        nickName:'Kiryl Hritsiuk',
        speciality: 'Team leader, Frontend developer',
        contribution: 'Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend',
        github: 'https://github.com/KirylHritsiuk',
        photo:'<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(2, 82, 204); font-size: 56px;"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>'
    }
]