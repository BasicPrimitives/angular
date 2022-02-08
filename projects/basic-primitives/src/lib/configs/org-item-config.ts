import { ShapeType, Enabled, ItemType, AdviserPlacementType, ChildrenPlacementType, TextOrientationType } from '../enums';
import { Size } from '../structs';

export class OrgItemConfig {
  id: number | string | null = null;
  parent: number | string | null = null;
  title: string | null = null;
  description: string | null = null;
  image: string | null = null;
  context: any | null = null;
  itemTitleColor: string = "#4169e1";
  minimizedItemShapeType: ShapeType | null = null;
  groupTitle: string | null = null;
  groupTitleColor: string = "#4169e1";
  isVisible: Boolean = true;
  isActive: Boolean = true;
  hasSelectorCheckbox: Enabled = Enabled.Auto;
  hasButtons: Enabled = Enabled.Auto;
  itemType: ItemType = ItemType.Regular;
  adviserPlacementType: AdviserPlacementType = AdviserPlacementType.Auto;
  childrenPlacementType: ChildrenPlacementType = ChildrenPlacementType.Auto;
  levelOffset: number | null = null;
  placeAssistantsAboveChildren: Enabled = Enabled.Auto;
  placeAdvisersAboveChildren: Enabled = Enabled.Auto;
  templateName: string | null = null;
  showCallout: Enabled = Enabled.Auto;
  calloutTemplateName: string | null = null;
  label: string | null = null;
  showLabel: Enabled = Enabled.Auto;
  labelSize: Size | null = null;
  labelOrientation: TextOrientationType = TextOrientationType.Auto;

  constructor(config: Partial<OrgItemConfig> = {}) {
    Object.assign(this, config);
  }
};
