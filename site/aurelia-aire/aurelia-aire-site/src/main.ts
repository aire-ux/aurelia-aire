import {
    AireButton
} from '@aurelia-aire/button'
import Aurelia from "aurelia";
import {AireSite} from "./aire-site";

new Aurelia()
    .register(AireButton)
    .app({
        component: AireSite,
        host: document.getElementById("main")!!
    }).start()

