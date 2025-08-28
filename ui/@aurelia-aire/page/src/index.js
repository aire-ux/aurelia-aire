import { __esDecorate, __runInitializers, __setFunctionName } from "tslib";
import { bindable, customElement } from "aurelia";
import template from './index.html?raw';
import "./index.scss";
import "@aurelia-aire/core/styles/core.scss";
let AirePage = (() => {
    let _classDecorators = [customElement({ name: 'aire-page', template: template })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _variants_decorators;
    let _variants_initializers = [];
    let _variants_extraInitializers = [];
    let _classes_decorators;
    let _classes_initializers = [];
    let _classes_extraInitializers = [];
    var AirePage = _classThis = class {
        constructor() {
            this.variants = __runInitializers(this, _variants_initializers, void 0);
            this.classes = (__runInitializers(this, _variants_extraInitializers), __runInitializers(this, _classes_initializers, void 0));
            __runInitializers(this, _classes_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "AirePage");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _variants_decorators = [bindable];
        _classes_decorators = [bindable];
        __esDecorate(null, null, _variants_decorators, { kind: "field", name: "variants", static: false, private: false, access: { has: obj => "variants" in obj, get: obj => obj.variants, set: (obj, value) => { obj.variants = value; } }, metadata: _metadata }, _variants_initializers, _variants_extraInitializers);
        __esDecorate(null, null, _classes_decorators, { kind: "field", name: "classes", static: false, private: false, access: { has: obj => "classes" in obj, get: obj => obj.classes, set: (obj, value) => { obj.classes = value; } }, metadata: _metadata }, _classes_initializers, _classes_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AirePage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AirePage = _classThis;
})();
export { AirePage };
export function register(aurelia) {
    aurelia.register(AirePage);
}
//# sourceMappingURL=index.js.map