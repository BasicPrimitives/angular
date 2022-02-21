import { HorizontalAlignmentType, TextOrientationType, VerticalAlignmentType } from '../../enums';

export class Label {
  width: number;
  height: number;
  orientation: TextOrientationType;
  horizontalAlignment: HorizontalAlignmentType;
  verticalAlignment: VerticalAlignmentType;
  label: string;
  style: Object;

  constructor(label: string, width: number, height: number, orientation: TextOrientationType, horizontalAlignment: HorizontalAlignmentType, verticalAlignment: VerticalAlignmentType, style: Object) {
    this.label = label;
    this.width = width;
    this.height = height;
    this.orientation = orientation;
    this.horizontalAlignment = horizontalAlignment;
    this.verticalAlignment = verticalAlignment;
    this.style = style;
  }
}
