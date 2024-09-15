import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TemplateConfig } from "../../configs/template-config";

@Component({
    selector: 'bp-dot-highlight:not(a)',
    template: '<div class="dot-highlight" [ngStyle]="divStyle"></div>',
    styleUrls: ['./dot-highlight.component.css']
  })
export class DotHighlightComponent implements OnChanges {
  @Input()
  templateConfig: TemplateConfig = new TemplateConfig();

  ngOnChanges(changes: SimpleChanges): void {
    const { minimizedItemCornerRadius, highlightPadding, highlightBorderWidth, minimizedItemSize } = this.templateConfig;
    let radius = 0;
    if (minimizedItemCornerRadius === null) {
      radius = Math.max(minimizedItemSize!.width / 2, minimizedItemSize!.height / 2) + highlightPadding!.left;
    } else {
      radius = minimizedItemCornerRadius! + highlightPadding!.left;
    }
    this.divStyle = {
      borderWidth: highlightBorderWidth + "px",
      left: - highlightBorderWidth! + "px",
      top: - highlightBorderWidth! + "px",
      "-moz-border-radius": radius + "px",
      "-webkit-border-radius": radius + "px",
      "-khtml-border-radius": radius + "px",
      "border-radius": radius + "px"
    }
  }

  divStyle: Object = {};
};
