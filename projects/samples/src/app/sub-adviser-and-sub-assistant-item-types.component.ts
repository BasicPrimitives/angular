import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, ItemType, AdviserPlacementType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-sub-adviser-and-sub-assistant-item-types',
  templateUrl: './sub-adviser-and-sub-assistant-item-types.component.html',
  styleUrls: ['./sample.css']
})
export class SubAdviserAndSubAssistantItemTypesComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

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
      itemType: ItemType.SubAdviser,
      adviserPlacementType: AdviserPlacementType.Right,
      title: "Robert Canon",
      description: "Sub Adviser item",
      groupTitle: "SubAdviser",
      image: "/assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      itemType: ItemType.SubAssistant,
      adviserPlacementType: AdviserPlacementType.Left,
      title: "Ted Lucas",
      description: "Sub Assitant Item",
      groupTitle: "SubAssistant",
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
  ];
}
