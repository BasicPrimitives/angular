import { TemplateRef } from '@angular/core';
import AbstractTemplate from './AbstractTemplate';

export class CustomRenderTemplate extends AbstractTemplate {
  constructor(options: any, onRender: () => TemplateRef<any>) {
    super("dummyTemplate", options);

    this.render = onRender;
  }
};