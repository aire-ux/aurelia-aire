
import {Aurelia, bindable, customElement} from "aurelia";
import template from './index.html?raw'
import "./index.scss"

@customElement({name: 'aire-page', template: template})
export class AirePage {
    constructor() {
        console.log(template)
    }
}


export function register(aurelia: Aurelia) {
    aurelia.register(AirePage)
}