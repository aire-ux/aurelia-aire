import {
    AireButton
} from '@aurelia-aire/button'
import Aurelia from "aurelia";
import {AireSite} from "./aire-site";
import {register as registerPage} from '@aurelia-aire/page'

import "@aurelia-aire/core/styles/core.scss";
import "tailwindcss"
import "./style.scss"

let aurelia = new Aurelia();
registerPage(aurelia)

aurelia
    .register(AireButton)
    .app({
        component: AireSite,
        host: document.getElementsByTagName("body")[0]!!
    }).start()



