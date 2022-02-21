import { RenderingMode } from "../enums";

export class RenderEventArgs {
    id: number | string | null = null;
    element: any | null = null;
    context: any | null = null;
    templateName: string | null = null;
    renderingMode: RenderingMode = RenderingMode.Create;
    isCursor: boolean = false;
    isSelected: boolean = false;

    constructor(config: Partial<RenderEventArgs> = {}) {
        Object.assign(this, config);
    }
};