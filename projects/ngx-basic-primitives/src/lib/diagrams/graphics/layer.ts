import { Path, Label, Template } from './';

export class Layer {
  name: string;
  items: Array<Template> = [];
  polylines: Array<Path> = [];
  labels: Array<Label> = [];

  constructor(name: string) {
    this.name = name;
  }

  reset() {
    this.items = [];
    this.polylines = [];
    this.labels = [];
  }
}
