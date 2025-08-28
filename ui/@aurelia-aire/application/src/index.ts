
import {bindable, customElement} from "aurelia";
import template from './index.html?raw'
import "./index.scss"

@customElement({name: 'aire-application', template: template})
export class AireApplication {
    constructor() {
        console.log(template)
    }

}