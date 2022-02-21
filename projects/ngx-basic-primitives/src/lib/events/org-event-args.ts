import { Rect } from "../structs/rect";

export class OrgEventArgs {
    oldContext: any | null = null;
    context: any | null = null;
    parentItem : number | string | null = null;
    position : Rect | null = null;
    name : string | null = null;
    cancel : boolean = false;
    event: Event | undefined;

    constructor(config: Partial<OrgEventArgs> = {}) {
        Object.assign(this, config);
    }
};