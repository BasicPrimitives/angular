import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, ItemType, AdviserPlacementType, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-place-assistants-above-children',
  templateUrl: './place-assistants-above-children.component.html',
  styleUrls: ['./sample.css']
})
export class PlaceAssistantsAboveChildrenComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  placeAssistantsAboveChildren = false;
  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "James Smith",
      description: "Parent Item",
      image: "/assets/photos/a.png"
    }),
    new OrgItemConfig({
      id: 5,
      parent: 0,
      title: "Harry Harter",
      description: "Regular Item",
      groupTitle: "Regular",
      image: "/assets/photos/d.png"
    }),
    new OrgItemConfig({
      id: 6,
      parent: 0,
      title: "Fritz Stuger",
      description: "Regular Item",
      groupTitle: "Regular",
      image: "/assets/photos/d.png"
    }),
    new OrgItemConfig({
      id: 8,
      parent: 0,
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      title: "Ted Lucas",
      description: "Assitant Item",
      groupTitle: "Assistant",
      image: "/assets/photos/c.png"
    }),
    new OrgItemConfig({
      id: 10,
      parent: 8,
      title: "James Nunnally",
      description: "Regular Item",
      image: "/assets/photos/d.png"
    }),
    new OrgItemConfig({
      id: 11,
      parent: 8,
      title: "Robert Canon",
      description: "Regular Item",
      image: "/assets/photos/d.png"
    })
  ];
}
