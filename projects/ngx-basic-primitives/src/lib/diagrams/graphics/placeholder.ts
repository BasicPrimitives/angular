import { Rect, Size } from '../../structs';
import { Layer } from "./";

export class Placeholder {
  name: string;
  layers: Array<Layer> = [];
  activeLayer: Layer | null = null;
  size: Size = new Size();
  rect: Rect = new Rect();
  hasGraphics: boolean = true;
  isVisible: boolean = true;

  constructor(name: string) {
    this.name = name;
    this.layers = [];
    this.activeLayer = null;
  }
}
