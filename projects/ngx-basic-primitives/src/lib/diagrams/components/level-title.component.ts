import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
// @ts-ignore
import { HorizontalAlignmentType, TextOrientationType, VerticalAlignmentType } from "../../enums";
import { LevelAnnotationConfig } from "../../configs/level-annotation-config";

class LevelTitleOptions {
    levelTitleFontSize: string = "12px";
    levelTitleFontFamily: string = "Arial";
    levelTitleFontWeight: string = "normal";
    levelTitleFontStyle: string = "normal";
    levelTitleFontColor: string = "#ffffff";
    levelTitleOrientation: TextOrientationType = TextOrientationType.Auto;
    levelTitleHorizontalAlignment: HorizontalAlignmentType = HorizontalAlignmentType.Center;
    levelTitleVerticalAlignment: VerticalAlignmentType = VerticalAlignmentType.Middle;
    levelTitleColor: string = "#4169e1";

    constructor(config: Partial<LevelTitleOptions> = {}) {
        Object.assign(this, config);
    }
}

@Component({
    selector: 'bp-level-title:not(a)',
    templateUrl: './level-title.component.html',
    styleUrls: ['./level-title.component.css']
  })
export class LevelTitleComponent implements OnChanges {
    @Input()
    options: LevelTitleOptions = new LevelTitleOptions();

    @Input()
    annotationConfig: LevelAnnotationConfig = new LevelAnnotationConfig();

    @Input()
    width: number = 0;

    @Input()
    height: number = 0;
        
    ngOnChanges(changes: SimpleChanges) {
        const backgroundColor = this.annotationConfig.titleColor || this.options.levelTitleColor;
        const color = this.annotationConfig.titleFontColor || this.options.levelTitleFontColor;
    
        this.divStyle = {
          backgroundColor,
          color,
          fontSize: this.options.levelTitleFontSize,
          fontFamily: this.options.levelTitleFontFamily,
          fontWeight: this.options.levelTitleFontWeight,
          fontStyle: this.options.levelTitleFontStyle
        }

        this.label = (this.annotationConfig.title || "").replace("\n", "<br/>");
    }


    divStyle: Object | null = null;
    label: string = "";
};
