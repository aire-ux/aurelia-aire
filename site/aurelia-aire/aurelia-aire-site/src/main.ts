import {
    AireButton
} from '@aurelia-aire/button'
import Aurelia from "aurelia";
import {AireSite} from "./aire-site";
import {register as registerPage} from '@aurelia-aire/page'
import {register as registerFooter} from '@aurelia-aire/footer'
import {register as registerHeader} from '@aurelia-aire/header'
import {register as registerImage} from '@aurelia-aire/image'

import "@aurelia-aire/core/styles/core.scss";
import "tailwindcss"
import "./style.scss"

let aurelia = new Aurelia();
registerPage(aurelia)
registerFooter(aurelia)
registerHeader(aurelia)
registerImage(aurelia)



aurelia
    .register(AireButton)
    .app({
        component: AireSite,
        host: document.getElementsByTagName("body")[0]!!
    }).start()



