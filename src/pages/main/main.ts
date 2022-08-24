import { arrAdvantages, team, IArrAdvantages, ITeam } from "../../components/dataPageMain";

export class Main {
    protected containerAdvantages: HTMLElement;
    protected containerTeam: HTMLElement;
   
    
    static TextOjeck = {
        advantagesClassName: 'advantag',
        teamClassName: 'person',
        nameLinkClassName: 'our-team'

    }

    constructor() {
    }

    protected createAdvantages(data: IArrAdvantages) {
        const container = <HTMLDivElement>document.createElement('div');
        container.className = Main.TextOjeck.advantagesClassName; 
        container.innerHTML =`
                    ${data.svg}
                    <h3 class="style-h3">${data.name}</h3>
                    <p class="text-center">${data.text}</p>`
        return container;
    }

    protected creareTeam(data: ITeam) {
       const container = <HTMLDivElement>document.createElement('div');
       container.className = Main.TextOjeck.teamClassName;
            container.innerHTML = 
                `   <div class="foto"></div>
                    <div class="information">
                        <h3 class="style-h3">${data.nickName}</h3>
                        <span class="text blond indent">${data.speciality}</span>
                        <span class="text ">${data.contribution}</span>
                        <a href="${data.github}" class="github-logo"><img src="./assets/github.svg" alt="github"></a>
                    </div>
                </div>`
        return container
    }

    rander() {
        const pageAdvantages = <HTMLDivElement>document.querySelector('.advantag-wrap');
        arrAdvantages.forEach(el => pageAdvantages.append(this.createAdvantages(el)));
       
        const pageTeam = <HTMLElement>document.querySelector('.our-team');
        team.forEach(el=>pageTeam.prepend(this.creareTeam(el)));
    }
}