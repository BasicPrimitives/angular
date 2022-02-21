import { TemplateConfig } from '../../configs/template-config';
import AbstractTemplate from './AbstractTemplate';

export class ItemTemplate extends AbstractTemplate {
  constructor(options: any, templateConfig: TemplateConfig) {
    super("itemTemplate", {
      ...options,
      templateConfig
    });
  }
};
