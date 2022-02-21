import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, ItemType, AdviserPlacementType, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-adviser-and-assistant-item-types',
  templateUrl: './adviser-and-assistant-item-types.component.html',
  styleUrls: ['./sample.css']
})
export class AdviserAndAssistantItemTypesComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "James Smith",
      description: "Parent Item",
      image: "/assets/photos/a.png"
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Right,
      title: "Robert Canon",
      description: "Adviser item",
      groupTitle: "Adviser",
      image: "/assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      title: "Ted Lucas",
      description: "Assitant Item",
      groupTitle: "Assistant",
      image: "/assets/photos/c.png"
    }),
    new OrgItemConfig({
      id: 3,
      parent: 0,
      title: "Fritz Stuger",
      description: "Regular Item",
      groupTitle: "Regular",
      image: "/assets/photos/d.png"
    })
  ]
}
