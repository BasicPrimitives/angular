export class Size {
    width: number = 0;
    height: number = 0;

    constructor(width: number = 0, height: number = 0) {
        this.width = width;
        this.height = height;
    }

    getCSS?(units: string = "px") {
        var result = {
            width: this.width + units,
            height: this.height + units
        };
        return result;
    };

    space?() {
        return this.width * this.height;
    };
}