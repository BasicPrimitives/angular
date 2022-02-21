import { Rect } from "../structs/rect";

export class FamEventArgs {
    oldContext: any | null = null;
    context: any | null = null;
    parentItems : Array<number | string> = [];
    childrenItems : Array<number | string> = [];
    position : Rect | null = null;
    name : string | null = null;
    cancel : boolean = false;
    event: Event | undefined;

    constructor(config: Partial<FamEventArgs> = {}) {
        Object.assign(this, config);
    }
};