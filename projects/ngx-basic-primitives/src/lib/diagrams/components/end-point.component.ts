import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Enabled } from "../../enums";
import { Size } from "../../structs";
import { ConnectorAnnotationConfig } from "../../configs/connector-annotation-config";

class EndPointOptions {
  showEndPoints: Enabled = Enabled.False;
  endPointSize: Size = new Size(8, 8);
  endPointCornerRadius: number = 4;
  endPointFillColor: string = "#000080";
  endPointOpacity: number = 0.5;

    constructor(config: Partial<EndPointOptions> = {}) {
        Object.assign(this, config);
    }
}

@Component({
    selector: 'bp-end-point:not(a)',
    template: '<div class="end-point" [ngStyle]="divStyle"></div>',
    styleUrls: ['./end-point.component.css']
  })
export class EndPointComponent implements OnChanges {
  @Input()
  options: EndPointOptions = new EndPointOptions();

  @Input()
  annotationConfig: ConnectorAnnotationConfig = new ConnectorAnnotationConfig();

  @Input()
  isFromEndPoint: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    const { endPointCornerRadius, endPointFillColor, endPointOpacity } = this.options;
    this.divStyle = {
      "-moz-border-radius": endPointCornerRadius + "px",
      "-webkit-border-radius": endPointCornerRadius + "px",
      "-khtml-border-radius": endPointCornerRadius + "px",
      "border-radius": endPointCornerRadius + "px",
      "background": endPointFillColor,
      "opacity": endPointOpacity,
      "border": "0px"
    }
  }

  divStyle: Object = {};
};
