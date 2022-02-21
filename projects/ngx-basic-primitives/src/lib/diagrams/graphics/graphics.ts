import { LineType, Layers, SegmentType } from '../../enums';
import { Rect, Size } from '../../structs';
import { HorizontalAlignmentType, TextOrientationType, VerticalAlignmentType } from '../../enums';
import { Path } from './path';
import { Label } from './label';
import { Template } from './template';
import { Placeholder} from './placeholder';
import { Layer } from './layer';
import { TemplateRef } from '@angular/core';

export class Graphics {
    placeholders: {[id: string]:Placeholder} = {};
    activePlaceholder: Placeholder | null = null;
    hasGraphics = true;
    names: Array<string> = [];
    size: Size;

    constructor(size: Size) {
        this.size = size;
        this.names = [];
        for(var layer in Layers) {
            let value:number = parseInt(Layers[layer]);
            this.names[value] = layer;
        };
    }

  clean() {
    this.placeholders = {};
    this.activePlaceholder = null;
  }

  resize(name: string, width: number, height: number) {
    this.activatePlaceholder(name);
    this.resizePlaceholder(this.activePlaceholder!, 0, 0, width, height);
  };

  position(name: string, left: number, top: number, width: number, height: number) {
    this.activatePlaceholder(name);
    this.resizePlaceholder(this.activePlaceholder!, left, top, width, height);
  };

  show(name: string) {
    var placeholder = this.placeholders[name];
    if (placeholder != null) {
      placeholder.isVisible = true;
    }
  };

  hide(name: string) {
    var placeholder = this.placeholders[name];
    if (placeholder != null) {
      placeholder.isVisible = false;
    }
  };

  resizePlaceholder(placeholder: Placeholder, left: number, top: number, width: number, height: number) {
    placeholder.size = new Size(width, height);
    placeholder.rect = new Rect(left, top, width, height);
  };

  reset(placeholderName: string, layerKey: number) {
    const placeholder = this.placeholders[placeholderName];
    if (placeholder != null) {
      const layer = placeholder.layers[layerKey];
      if (layer != null) {
        layer.reset();
      }
    }
  };

  activate(placeholderName: string, layerKey: number) {
    this.activatePlaceholder(placeholderName);
    this.activateLayer(layerKey);
    return this.activePlaceholder;
  };

  activatePlaceholder(name: string) {
    let placeholder = this.placeholders[name];

    if (placeholder === undefined) {
      placeholder = new Placeholder(name);
      placeholder.size = this.size;
      placeholder.rect = new Rect(0, 0, placeholder.size.width, placeholder.size.height);
      this.placeholders[name] = placeholder;
    }

    this.activePlaceholder = placeholder;
  };

  activateLayer(layerKey: number) {
    const name = this.names[layerKey];
    if(!this.activePlaceholder) {
      throw "No active placeholder";
    }
    let layer = this.activePlaceholder.layers[layerKey];

    if (layer === undefined) {
      layer = new Layer(name);
      this.activePlaceholder.layers[layerKey] = layer;
    }

    this.activePlaceholder.activeLayer = layer;
  };

  getPlaceholders() {
    return this.placeholders;
  }

  text(x: number, y: number, width: number, height: number, label: string, orientation: TextOrientationType, horizontalAlignment: HorizontalAlignmentType, verticalAlignment: VerticalAlignmentType, attr: Object) {
    if(!this.activePlaceholder || !this.activePlaceholder.activeLayer) {
      throw "No active placeholder or layer"
    }
    this.activePlaceholder.activeLayer.labels.push(
      new Label(label, width, height, orientation, horizontalAlignment, verticalAlignment,
        {
          ...attr,
          top: y + "px",
          left: x + "px"
        })
    );
  };

  polyline(polylineData: any) {
    if(!this.activePlaceholder || !this.activePlaceholder.activeLayer) {
      throw "No active placeholder or layer"
    }

    var attr = polylineData.paletteItem.toAttr(),
      step,
      radius,
      cornerRadius,
      style: any = {};


    if (attr.fillColor !== undefined) {
      style.fill = attr.fillColor;
      style.fillOpacity = attr.opacity;
    }
    else {
      style.fillOpacity = 0;
    }

    if (attr.lineWidth !== undefined && attr.borderColor !== undefined) {
      style.stroke = attr.borderColor;
      style.strokeWidth = attr.lineWidth;

      if (attr.opacity !== undefined) {
        style.strokeOpacity = attr.opacity;
      } else {
        style.strokeOpacity = 1;
      }
    } else {
      style.stroke = "transparent";
      style.strokeWidth = 0;
    }

    if (attr.lineType != null) {
      step = Math.round(attr.lineWidth) || 1;
      switch (attr.lineType) {
        case LineType.Dotted:
          style.strokeDasharray = step + "," + step;
          break;
        case LineType.Dashed:
          style.strokeDasharray = (step * 5) + "," + (step * 3);
          break;
        case LineType.Solid:
        default:
          style.strokeDasharray = "";
          break;
      }
    }

    let data = "";
    polylineData.loop(this, function (segment: any) {
      switch (segment.segmentType) {
        case SegmentType.Move:
          data += "M" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
          break;
        case SegmentType.Line:
          data += "L" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
          break;
        case SegmentType.QuadraticArc:
          data += "Q" + (Math.round(segment.cpX) + 0.5) + " " + (Math.round(segment.cpY) + 0.5) + " " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
          break;
        case SegmentType.Dot:
          // A rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y
          if (segment.width === segment.height && segment.width / 2.0 <= segment.cornerRadius) {
            // dot
            radius = segment.width / 2.0;
            data += "M" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + segment.height / 2.0 + 0.5);
            data += "A" + radius + " " + radius + " 0 0 0 " + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y) + segment.height / 2.0 + 0.5);
            data += "A" + radius + " " + radius + " 0 0 0 " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + segment.height / 2.0 + 0.5);
          } else if (segment.cornerRadius === 0) {
            // square
            data += "M" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
            data += "L" + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y) + 0.5);
            data += "L" + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y + segment.height) + 0.5);
            data += "L" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y + segment.height) + 0.5);
            data += "L" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
          } else {
            cornerRadius = Math.min(segment.cornerRadius, Math.min(segment.width / 2.0, segment.height / 2.0));
            data += "M" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y + cornerRadius) + 0.5);
            data += "A" + Math.round(cornerRadius) + " " + Math.round(cornerRadius) + " 0 0 1 " + (Math.round(segment.x + cornerRadius) + 0.5) + " " + (Math.round(segment.y) + 0.5);
            data += "L" + (Math.round(segment.x + segment.width - cornerRadius) + 0.5) + " " + (Math.round(segment.y) + 0.5);
            data += "A" + Math.round(cornerRadius) + " " + Math.round(cornerRadius) + " 0 0 1 " + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y + cornerRadius) + 0.5);
            data += "L" + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y + segment.height - cornerRadius) + 0.5);
            data += "A" + Math.round(cornerRadius) + " " + Math.round(cornerRadius) + " 0 0 1 " + (Math.round(segment.x + segment.width - cornerRadius) + 0.5) + " " + (Math.round(segment.y + segment.height) + 0.5);
            data += "L" + (Math.round(segment.x + cornerRadius) + 0.5) + " " + (Math.round(segment.y + segment.height) + 0.5);
            data += "A" + Math.round(cornerRadius) + " " + Math.round(cornerRadius) + " 0 0 1 " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y + segment.height - cornerRadius) + 0.5);
            data += "L" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y + cornerRadius) + 0.5);
          }
          break;
        case SegmentType.CubicArc:
          data += "C" + (Math.round(segment.cpX1) + 0.5) + " " + (Math.round(segment.cpY1) + 0.5) +
            " " + (Math.round(segment.cpX2) + 0.5) + " " + (Math.round(segment.cpY2) + 0.5) +
            " " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
          break;
        default:
          break;
      }
    });
    this.activePlaceholder.activeLayer.polylines.push(new Path(data, style));
  };

  polylinesBuffer(buffer: any) {
    var thisArg = this;
    buffer.loop(this, function (item: any) {
      if (item.length() > 0) {
        thisArg.polyline(item);
      }
    });
  };

  template(x: number, y: number, width: number, height: number, contentX: number, contentY: number, contentWidth: number, contentHeight: number, options: any, _hashCode: string, onRenderTemplate: (data: any) => TemplateRef<any> | null, uiHash: Object, attr: Object) {
    if(!this.activePlaceholder || !this.activePlaceholder.activeLayer) {
      throw "No active placeholder or layer"
    }
    const left = x + contentX,
      top = y + contentY,
      templateWidth = contentWidth,
      templateHeight = contentHeight;

    let style = {
      "width": templateWidth + "px",
      "height": templateHeight + "px",
      "top": top + "px",
      "left": left + "px",
      ...attr
    };

    var context = {
      ...uiHash,
      ...options,
      x: left,
      y: top,
      width: templateWidth,
      height: templateHeight
    }

    var templateRef: TemplateRef<any> | null = null;
    if (onRenderTemplate !== null) {
      templateRef = onRenderTemplate(context);
    };
    // if(options.templateType == "labelAnnotationTemplate") {
    //   console.log("template type:" + options.templateType);
    //   console.log(JSON.stringify(context));
    // }
    this.activePlaceholder.activeLayer.items.push(new Template(options.templateType, options.templateName, templateRef, context, style));
  };

  getPxSize(value: any, base: number) {
    var result = value;
    if (typeof value === "string") {
      if (value.indexOf("pt") > 0) {
        result = parseInt(value, 10) * 96 / 72;
      }
      else if (value.indexOf("%") > 0) {
        result = parseFloat(value) / 100.0 * base;
      }
      else {
        result = parseInt(value, 10);
      }
    }
    return result;
  };
};
