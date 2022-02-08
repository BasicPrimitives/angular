import { TemplateRef } from "@angular/core";

export class Template {
  name: string;
  templateRef: TemplateRef<any> | null;
  context: any;
  style: Object;

  constructor(name: string, templateRef: TemplateRef<any> | null, context: Object, style: Object) {
    this.name = name;
    this.templateRef = templateRef;
    this.context = context;
    this.style = style;
  }
}
