import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { OrgItemConfig } from "../../configs/org-item-config";
// @ts-ignore
import { highestContrast } from "basicprimitives";

@Component({
    selector: 'bp-item:not(a)',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
  })
export class ItemComponent implements OnChanges {
    private royalBlue: string = "#000080";

    @Input()
    itemTitleFirstFontColor: string = "#ffffff";

    @Input()
    itemTitleSecondFontColor: string = "#000080";

    @Input()
    itemConfig: OrgItemConfig = new OrgItemConfig();

    ngOnChanges(changes: SimpleChanges) {
        this.backgroundColor = this.itemConfig.itemTitleColor || this.royalBlue;
        this.color = highestContrast(this.backgroundColor, this.itemTitleSecondFontColor, this.itemTitleFirstFontColor);
    }

    backgroundColor: string = "#4169e1";
    color: string = "#ffffff";
};
