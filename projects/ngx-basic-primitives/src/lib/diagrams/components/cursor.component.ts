import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TemplateConfig } from "../../configs/template-config";

@Component({
    selector: 'bp-cursor:not(a)',
    template: '<div class="cursor" [ngStyle]="{width, height, borderWidth}"></div>',
    styleUrls: ['./cursor.component.css']
  })
export class CursorComponent implements OnChanges {
    @Input()
    templateConfig: TemplateConfig = new TemplateConfig();

    ngOnChanges(changes: SimpleChanges): void {
      const { cursorPadding, itemSize, cursorBorderWidth } = this.templateConfig;
      this.width = (itemSize!.width + cursorPadding!.left + cursorPadding!.right) + "px",
      this.height = (itemSize!.height + cursorPadding!.top + cursorPadding!.bottom) + "px",
      this.borderWidth = cursorBorderWidth + "px";
    }

    borderWidth: string = "1px";
    width: string = "0px";
    height: string = "0px";
};
