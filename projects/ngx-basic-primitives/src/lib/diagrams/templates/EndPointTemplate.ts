import { TemplateConfig } from '../../configs/template-config';
import AbstractTemplate from './AbstractTemplate';

export class EndPointTemplate extends AbstractTemplate {
  constructor(options: any, templateConfig: TemplateConfig) {
    super("endPointTemplate", {
      ...options,
      templateConfig
    });
  }
};
