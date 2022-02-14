import { TemplateRef } from '@angular/core';
import AbstractTemplate from './AbstractTemplate';

export class ButtonsTemplate extends AbstractTemplate {
  constructor() {
    super("dummyTemplate", {})
  };

  override render(data: any) {
    const { onButtonsRender } = data;
    return onButtonsRender();
  };
};
