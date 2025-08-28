
import {bindable, customElement} from "aurelia";
import template from './index.html?raw'
import "./index.scss"

@customElement({name: 'aire-button', template: template})
export class AireButton {
    constructor() {
        console.log(template)
    }

    @bindable hello: string = "My Name"

    whaddup() : void {
        alert("SUP")
    }
}