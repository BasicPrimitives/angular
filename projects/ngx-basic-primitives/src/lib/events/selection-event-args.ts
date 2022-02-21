export class SelectionEventArgs {
    selectedItems: Array<string|number> = [];
    newSelectedItems: Array<string|number> = [];
    cancel : boolean = false;
    event: Event | undefined;

    constructor(config: Partial<SelectionEventArgs> = {}) {
        Object.assign(this, config);
    }
};