import { TemplateRef } from "@angular/core";

export default class AbstractTemplate {
  options: Object;
  template(): Object { 
    return this.options;
  }

  getHashCode() { 
    return "";
  }
  
  render: (() => TemplateRef<any>) | null = null; 

  constructor(templateName: string, options: Object) {
    this.options = {
      ...options,
      templateName
    }
  }
};
