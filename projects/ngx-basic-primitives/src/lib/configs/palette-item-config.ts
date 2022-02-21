import { LineType } from '../enums';

export class PaletteItemConfig {
  lineColor: String = "#c0c0c0";
  lineWidth: number = 1;
  lineType: LineType = LineType.Solid;

  constructor(config: Partial<PaletteItemConfig> = {}) {
    Object.assign(this, config);
  }
};
