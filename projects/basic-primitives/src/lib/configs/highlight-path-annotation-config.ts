import { AnnotationType, ZOrderType, LineType } from '../enums';

export class HighlightPathAnnotationConfig {
  annotationType: AnnotationType = AnnotationType.HighlightPath;
  zOrderType: ZOrderType = ZOrderType.Foreground;
  items: Array<number|String> = [];
  lineWidth: number = 2;
  color: String = "#ff0000";
  lineType: LineType = LineType.Solid;
  opacity: number = 1;
  showArrows: Boolean = true;
  selectItems: Boolean = false;

  constructor(config: Partial<HighlightPathAnnotationConfig> = {}) {
    Object.assign(this, config);
  }
};
