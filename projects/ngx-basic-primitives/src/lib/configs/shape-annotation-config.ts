import { AnnotationType, ZOrderType, ShapeType, LineType, PlacementType } from '../enums';
import { Size, Thickness } from '../structs';

export class ShapeAnnotationConfig {
  annotationType: AnnotationType = AnnotationType.Shape;
  zOrderType: ZOrderType = ZOrderType.Auto;
  items: Array<number|String> = [];
  shapeType: ShapeType = ShapeType.Rectangle;
  offset: Thickness = new Thickness(0, 0, 0, 0);
  lineWidth: number = 2;
  cornerRadius: String | number = "10%";
  opacity: number = 1;
  borderColor: string | null = null;
  fillColor: string | null = null;
  lineType: LineType = LineType.Solid;
  selectItems: Boolean = false;
  label: string | null = null;
  labelSize: Size = new Size(60, 30);
  labelPlacement: PlacementType = PlacementType.Auto;
  labelOffset: number = 4;

  constructor(config: Partial<ShapeAnnotationConfig> = {}) {
    Object.assign(this, config);
  }
};
