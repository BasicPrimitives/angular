import { Component, Input, OnChanges } from "@angular/core";
import { TextOrientationType, VerticalAlignmentType, HorizontalAlignmentType } from "../enums";

@Component({
    selector: 'rotated-text:not(a)',
    templateUrl: './rotated-text.component.html',
    styleUrls: ['./rotated-text.component.css']
  })
export class RotatedText implements OnChanges {
    @Input() width: number = 0;
    @Input() height: number = 0;
    @Input() orientation: TextOrientationType = TextOrientationType.RotateRight;
    @Input() horizontalAlignment: HorizontalAlignmentType = HorizontalAlignmentType.Center;
    @Input() verticalAlignment: VerticalAlignmentType = VerticalAlignmentType.Middle;

    hasVerticalAlignment : Boolean = false;
    tableStyle : Object = {};
    tdStyle : Object = {};
    divStyle : Object = {};

    ngOnChanges(): void {
      const transform = this.getTransform(this.orientation);
  
      let size = {};
      if (this.orientation === TextOrientationType.Horizontal) {
        size = {
          width: this.width + "px",
          height: this.height + "px",
          maxWidth: this.width + "px",
          maxHeight: this.height + "px"
        }
      } else {
        size = {
          width: this.height + "px",
          height: this.width + "px",
          maxWidth: this.height + "px",
          maxHeight: this.width + "px",
          left: Math.round(this.width / 2.0 - this.height / 2.0) + "px",
          top: Math.round(this.height / 2.0 - this.width / 2.0) + "px"
        }
      }
      var style = {
        position: "absolute",
        padding: 0,
        margin: 0,
        lineHeight: 1,
        textAlign: this.getHorizontalAlignment(this.horizontalAlignment),
        WebkitTransformOrigin: "center center",
        MozTransformOrigin: "center center",
        OTransformOrigin: "center center",
        msTransformOrigin: "center center",
        WebkitTransform: transform,
        MozTransform: transform,
        OTransform: transform,
        msTransform: transform,
        transform: transform,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        tableLayout: "fixed",
        ...size
      };

      this.hasVerticalAlignment = this.verticalAlignment !== VerticalAlignmentType.Top;
      this.tdStyle = {
        'verticalAlign': this.getVerticalAlignment(this.verticalAlignment),
        'padding': 0,
        'textOverflow': 'ellipsis',
        'whiteSpace': 'nowrap',
        'overflow': 'hidden'
      };
      this.tableStyle = { 
        ...style, 
        borderCollapse: "collapse" 
      };
      this.divStyle = style;
    }

    getTransform(orientation: TextOrientationType) {
      let result = "";
      switch (orientation) {
        case TextOrientationType.RotateLeft:
          result = "rotate(-90deg)";
          break;
        case TextOrientationType.RotateRight:
          result = "rotate(90deg)";
          break;
        default:
          break;
      }
      return result;
  }
  
  getHorizontalAlignment(horizontalAlignment: HorizontalAlignmentType) {
      let result = "";
      switch(horizontalAlignment) {
          case HorizontalAlignmentType.Center:
              result = 'center';
              break;
          case HorizontalAlignmentType.Left:
              result = 'left';
              break;
          case HorizontalAlignmentType.Right:
              result = 'right';
              break;
      }
      return result;
  }
  
  getVerticalAlignment(verticalAlignment: VerticalAlignmentType) {
      let result = "";
      switch(verticalAlignment) {
          case VerticalAlignmentType.Bottom:
              result = 'bottom';
              break;
          case VerticalAlignmentType.Middle:
              result = 'middle';
              break;
          case VerticalAlignmentType.Top:
              result = 'top';
              break;
      }
      return result;
  }
}
