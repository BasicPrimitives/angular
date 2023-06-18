import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { LevelAnnotationConfig } from "../../configs/level-annotation-config";
import { LineType } from "../../enums";

function getBorderStyle(lineType: LineType) {
  var result = null;
  switch (lineType) {
    case LineType.Dotted:
      result = "dotted";
      break;
    case LineType.Dashed:
      result = "dashed";
      break;
    default:
      result = "solid";
      break;
  }
  return result;
}

@Component({
    selector: 'bp-level-background:not(a)',
    template: '<div class="level-background" [ngStyle]="divStyle"></div>',
    styleUrls: ['./level-background.component.css']
  })
export class LevelBackgroundComponent implements OnChanges {
  @Input()
  annotationConfig: LevelAnnotationConfig = new LevelAnnotationConfig();

  ngOnChanges(changes: SimpleChanges): void {
    this.divStyle = {
      opacity: this.annotationConfig.opacity,
      borderColor: this.annotationConfig.borderColor,
      backgroundColor: this.annotationConfig.fillColor,
      borderWidth: this.annotationConfig.lineWidth.toString(),
      borderStyle: getBorderStyle(this.annotationConfig.lineType),
    }
  }

  divStyle: Object = {};
};
