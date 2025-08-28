import { Aurelia } from "aurelia";
import "./index.scss";
import { HasRows, HasColumns } from '@aurelia-aire/core';
import "@aurelia-aire/core/styles/core.scss";
export declare class AirePage implements HasRows, HasColumns {
    variants: string;
    classes: string;
    constructor();
}
export declare function register(aurelia: Aurelia): void;
