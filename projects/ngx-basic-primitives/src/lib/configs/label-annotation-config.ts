import { AnnotationType } from '../enums';

export class LabelAnnotationConfig {
  annotationType: AnnotationType = AnnotationType.Label;
  fromItem: number|string | null = null;
  toItems: Array<number|string> = [];
  title: string | null = null;
  itemTitleColor: string = "#4169e1";
  templateName: string | null = null;

  constructor(config: Partial<LabelAnnotationConfig> = {}) {
    Object.assign(this, config);
  }
};
