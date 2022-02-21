import { TemplateRef } from '@angular/core';
import AbstractTemplate from './AbstractTemplate';

export class UserTemplate extends AbstractTemplate {
  constructor(options: any, itemTemplate: any, onRender: () => TemplateRef<any>) {
    super("dummyTemplate", { 
      ...options,
      itemTemplate
    });

    this.render = onRender;
  }
};

