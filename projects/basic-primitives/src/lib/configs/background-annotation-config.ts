import {AnnotationType, ZOrderType, LineType} from '../enums';
import { Thickness } from '../structs';

export class BackgroundAnnotationConfig {
  annotationType: AnnotationType = AnnotationType.Background;
  items: Array<number|String> = [];
  includeChildren: Boolean = false;
  zOrderType: ZOrderType = ZOrderType.Auto;
  offset: Thickness = new Thickness(18, 18, 18, 18);
  lineWidth: number = 2;
  opacity: number = 1;
  borderColor: string | null = null;
  fillColor: string | null = null;
  lineType: LineType = LineType.Solid;
  selectItems: Boolean = false;
  
  constructor(config: Partial<BackgroundAnnotationConfig> = {}) {
    Object.assign(this, config);
  }
};

