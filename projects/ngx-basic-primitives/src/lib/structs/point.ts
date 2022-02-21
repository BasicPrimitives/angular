export class Point {
    x: number = 0;
    y: number = 0;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    getCSS(units: string = "px") {
        var result = {
            left: this.x + units,
            top: this.y + units
          };
        return result;
    };
}