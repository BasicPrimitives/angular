import { TemplateConfig } from '../../configs/template-config';
import AbstractTemplate from './AbstractTemplate';

export class HighlightTemplate extends AbstractTemplate {
  constructor(options: any, templateConfig: TemplateConfig) {
    super("highlightTemplate", {
      ...options,
      templateConfig
    });
  }
};
