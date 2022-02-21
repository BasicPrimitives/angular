import { TemplateConfig } from '../../configs/template-config';
import AbstractTemplate from './AbstractTemplate';

export class DotHighlightTemplate extends AbstractTemplate {
  constructor(options: Object, templateConfig: TemplateConfig) {
    super("dotHighlightTemplate", {
      ...options,
      templateConfig
    });
  }
};
