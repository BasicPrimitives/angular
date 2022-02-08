export class Rect {
  x: number;
  y: number;
  width: number;
  height: number;
  context: any;

  constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0, context: any = null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  translate(x: number, y: number) {
    this.x = this.x + x;
    this.y = this.y + y;
  
    return this;
  };  

  getCSS(units: string = "px") {
    var result = {
      left: this.x + units,
      top: this.y + units,
      width: this.width + units,
      height: this.height + units
    };
    return result;
  };
};
