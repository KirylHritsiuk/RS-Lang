import { IWord } from "../../../../../types/types";
import { Block } from "../../blockTemplate"

export class CardButtons extends Block {
    static textObject = {
        containerClass: 'card-buttons ds-none',
        difficultName: 'difficult',
        deleteName: 'delete',
    };
    constructor(protected data: IWord) {
        super()
        this.container.className = CardButtons.textObject.containerClass;
        this.container.addEventListener('click', (e) => {
            const button = <HTMLButtonElement>e.target
            switch(button.getAttribute('name')) {
                case CardButtons.textObject.difficultName:
                    break;
                case CardButtons.textObject.deleteName:
                    break;
            }
        })
    }
    render(): HTMLElement {
       this.container.innerHTML = `<button class="button-card button-card_large bg-${this.color}" data-set-color="${this.color}" name="${CardButtons.textObject.difficultName}">${CardButtons.textObject.difficultName}</button>
       <button class="button-card button-card_large button-card-del name="${CardButtons.textObject.deleteName}">${CardButtons.textObject.deleteName}</button>`
       return this.container;
    }
}





