import { AnnotationType, LineType } from '../enums';
import { Thickness } from '../structs';

export class LevelAnnotationConfig {
  annotationType: AnnotationType = AnnotationType.Level;
  levels: Array<number | String> = [];
  title: string | null = null;
  titleFontColor: string | null = null;
  titleColor: string | null = null;
  offset: Thickness = new Thickness(0, 0, 0, 0);
  lineWidth: Thickness = new Thickness(0, 0, 0, 0);
  opacity: number = 1;
  borderColor: string | null = null;
  fillColor: String = "#D4D4D4";
  lineType: LineType = LineType.Solid;

  constructor(config: Partial<LevelAnnotationConfig> = {}) {
    Object.assign(this, config);
  }
};
