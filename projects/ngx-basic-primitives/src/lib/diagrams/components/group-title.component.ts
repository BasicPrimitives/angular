import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { OrgItemConfig } from "../../configs/org-item-config";
// @ts-ignore
import { highestContrast } from "basicprimitives";
import { HorizontalAlignmentType, TextOrientationType, VerticalAlignmentType } from "../../enums";

class GroupTitleOptions {
    groupTitleFontSize: string = "12px";
    groupTitleFontFamily: string = "Arial";
    groupTitleFontWeight: string = "normal";
    groupTitleFontStyle: string = "normal";
    itemTitleSecondFontColor: string = "#000080";
    itemTitleFirstFontColor: string = "#ffffff";
    groupTitleOrientation: TextOrientationType = TextOrientationType.RotateRight;
    groupTitleHorizontalAlignment: HorizontalAlignmentType = HorizontalAlignmentType.Center;
    groupTitleVerticalAlignment: VerticalAlignmentType = VerticalAlignmentType.Middle;
    groupTitleColor: string ="#4169e1";

    constructor(config: Partial<GroupTitleOptions> = {}) {
        Object.assign(this, config);
    }
}

@Component({
    selector: 'bp-group-title:not(a)',
    templateUrl: './group-title.component.html',
    styleUrls: ['./group-title.component.css']
  })
export class GroupTitleComponent implements OnChanges {
    @Input()
    options: GroupTitleOptions = new GroupTitleOptions();

    @Input()
    itemConfig: OrgItemConfig = new OrgItemConfig();

    @Input()
    width: number = 0;

    @Input()
    height: number = 0;
        
    ngOnChanges(changes: SimpleChanges) {
        const backgroundColor = this.itemConfig.groupTitleColor || this.options.groupTitleColor;
        const color = highestContrast(backgroundColor, this.options.itemTitleSecondFontColor, this.options.itemTitleFirstFontColor);

        this.divStyle = {
            backgroundColor,
            color,
            fontSize: this.options.groupTitleFontSize,
            fontFamily: this.options.groupTitleFontFamily,
            fontWeight: this.options.groupTitleFontWeight,
            fontStyle: this.options.groupTitleFontStyle
        }
        this.label = (this.itemConfig.groupTitle || "").replace("\n", "<br/>");
    }

    divStyle: Object | null = null;
    label: string = "";
};
