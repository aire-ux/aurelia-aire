
import {Aurelia, bindable, children, customElement} from "aurelia";
import template from './index.html?raw'
import "./index.scss"
import {HasRows, HasColumns} from '@aurelia-aire/core'
import "@aurelia-aire/core/styles/core.scss"

@customElement({name: 'aire-page', template: template})
export class AirePage implements HasRows, HasColumns {

    @bindable
    variants: string

    @bindable
    classes: string


    constructor() {
        console.log("SUP")
    }

}


export function register(aurelia: Aurelia) {
    aurelia.register(AirePage)
}