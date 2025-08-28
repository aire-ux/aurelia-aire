
import {Aurelia, bindable, children, customElement} from "aurelia";
import template from './index.html?raw'
import "./index.scss"
import {HasRows, HasColumns} from '@aurelia-aire/core'
import "@aurelia-aire/core/styles/core.scss"

@customElement({name: 'aire-header', template: template})
export class AireHeader implements HasRows, HasColumns {

    @bindable
    variants: string

    @bindable
    classes: string


    constructor() {
    }

}


export function register(aurelia: Aurelia) {
    aurelia.register(AireHeader)
}