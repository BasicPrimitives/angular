import { TemplateConfig } from '../../configs/template-config';
import AbstractTemplate from './AbstractTemplate';

export class CursorTemplate extends AbstractTemplate {
  constructor(options: Object, templateConfig: TemplateConfig) {
    super("cursorTemplate", { 
      ...options,
      templateConfig
    });
  }
};
