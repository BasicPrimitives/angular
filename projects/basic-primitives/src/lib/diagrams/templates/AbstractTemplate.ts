import { TemplateRef } from "@angular/core";

export default class AbstractTemplate {
  options: Object;
  template(): Object { 
    return this.options;
  }

  getHashCode() { 
    return "";
  }
  
  render(data: any): TemplateRef<any> | null {
    return null;
  }; 

  constructor(templateType: string, options: Object) {
    this.options = {
      ...options,
      templateType
    }
  }
};
