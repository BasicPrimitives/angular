import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TemplateConfig } from "../../configs/template-config";

@Component({
    selector: 'bp-highlight:not(a)',
    template: '<div class="highlight" [ngStyle]="{borderWidth}"></div>',
    styleUrls: ['./highlight.component.css']
  })
export class HighlightComponent implements OnChanges {
  @Input()
  templateConfig: TemplateConfig = new TemplateConfig();

  ngOnChanges(changes: SimpleChanges): void {
    const { highlightBorderWidth } = this.templateConfig;
    this.borderWidth = highlightBorderWidth + "px";
  }

  borderWidth: string = "1px";
};
