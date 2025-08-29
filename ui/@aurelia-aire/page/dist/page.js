import { bindable, customElement } from 'aurelia';

const template = "<main class=\"${classes}\">\n    <au-slot></au-slot>\n</main>\n";

@customElement({ name: "aire-page", template })
class AirePage {
  @bindable
  variants;
  @bindable
  classes;
  constructor() {
    console.log("SUP");
  }
}
function register(aurelia) {
  aurelia.register(AirePage);
}

export { AirePage, register };
