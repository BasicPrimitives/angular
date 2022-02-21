import { TemplateRef } from "@angular/core";

export class Template {
  templateType: string;
  name: string;
  templateRef: TemplateRef<any> | null;
  context: any;
  style: Object;

  constructor(templateType: string, name: string, templateRef: TemplateRef<any> | null, context: Object, style: Object) {
    this.templateType = templateType;
    this.name = name;
    this.templateRef = templateRef;
    this.context = context;
    this.style = style;
  }
}
