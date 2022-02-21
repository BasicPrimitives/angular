import { ShapeType, Enabled, TextOrientationType, PlacementType, AdviserPlacementType } from '../enums';
import { Size } from '../structs';

export class FamItemConfig {
  id: number|String|null = null;
  parents: Array<number|String> = [];
  title: string | null = null;
  description: string | null = null;
  image: string | null = null;
  context: any | null = null;
  itemTitleColor: String = "#4169e1";
  minimizedItemShapeType: ShapeType | null = null;
  groupTitle: string | null = null;
  groupTitleColor: String = "#4169e1";
  isActive: Boolean = true;
  hasSelectorCheckbox: Enabled = Enabled.Auto;
  hasButtons: Enabled = Enabled.Auto;
  templateName: string | null = null;
  showCallout: Enabled = Enabled.Auto;
  calloutTemplateName: string | null = null;
  label: string | null = null;
  showLabel: Enabled = Enabled.Auto;
  labelSize: Size | null = null;
  labelOrientation: TextOrientationType = TextOrientationType.Auto;
  labelPlacement: PlacementType = PlacementType.Auto;
  primaryParent: number|String|null = null;
  relativeItem: number|String|null = null;
  position: number|null = null;
  placementType: AdviserPlacementType = AdviserPlacementType.Right;
  matrixId: string | null = null;
  addToMatrix: Boolean = true;

  constructor(config: Partial<FamItemConfig> = {}) {
    Object.assign(this, config);
  }
};