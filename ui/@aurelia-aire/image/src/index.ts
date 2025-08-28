
import {Aurelia, bindable, customElement} from "aurelia";
import template from './index.html?raw'
import "./index.scss"

@customElement({name: 'aire-image', template: template})
export class AireImage {
    @bindable source: string;

    constructor() {
    }


}
export function register(aurelia: Aurelia) {
    aurelia.register(AireImage)
}