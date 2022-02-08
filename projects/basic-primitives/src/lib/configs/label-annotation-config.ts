import { AnnotationType } from '../enums';

export class LabelAnnotationConfig {
  annotationType: AnnotationType = AnnotationType.Label;
  fromItem: Array<number|String> = [];
  toItems: Array<number|String> = [];
  title: string | null = null;
  itemTitleColor: String = "#4169e1";
  templateName: string | null = null;

  constructor(config: Partial<LabelAnnotationConfig> = {}) {
    Object.assign(this, config);
  }
};
