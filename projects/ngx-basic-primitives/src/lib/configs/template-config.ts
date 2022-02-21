import { TemplateRef } from '@angular/core';
import { ShapeType, LineType } from '../enums';
import { Size, Thickness } from '../structs';

export class TemplateConfig {
  name: string | null = null;
  isActive?: Boolean = true;
  itemSize?: Size = new Size(120, 100);
  itemBorderWidth?: number = 1;
  itemTemplate?: TemplateRef<any> | null = null;
  minimizedItemShapeType?:ShapeType | null = null;
  minimizedItemSize?: Size = new Size(4, 4);
  minimizedItemCornerRadius?: number | null = null;
  minimizedItemLineWidth?: number = 1;
  minimizedItemBorderColor?: string | null = null;
  minimizedItemLineType?: LineType = LineType.Solid;
  minimizedItemFillColor?: string | null = null;
  minimizedItemOpacity?: number = 1;
  highlightPadding?: Thickness = new Thickness(2, 2, 2, 2);
  highlightBorderWidth?: number = 1;
  highlightTemplate?: TemplateRef<any> | null = null;
  cursorPadding?: Thickness = new Thickness(3, 3, 3, 3);
  cursorBorderWidth?: number = 2;
  cursorTemplate?: TemplateRef<any> | null = null;
  buttonsTemplate?: TemplateRef<any> | null = null;

  constructor(config: Partial<TemplateConfig> = {}) {
    Object.assign(this, config);
  }
};

