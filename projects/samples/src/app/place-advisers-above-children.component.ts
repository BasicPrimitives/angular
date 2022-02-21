import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, ItemType, AdviserPlacementType, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-place-advisers-above-children',
  templateUrl: './place-advisers-above-children.component.html',
  styleUrls: ['./sample.css']
})
export class PlaceAdvisersAboveChildrenComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  placeAdvisersAboveChildren = false;
  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "James Smith",
      description: "Parent Item",
      image: "./assets/photos/a.png"
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Right,
      title: "Robert Canon",
      description: "Adviser item",
      groupTitle: "Adviser",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 3,
      parent: 1,
      title: "Fritz Stuger",
      description: "Regular Item",
      image: "./assets/photos/d.png"
    }),
    new OrgItemConfig({
      id: 4,
      parent: 1,
      title: "Ted Lucas",
      description: "Regular Item",
      image: "./assets/photos/d.png"
    }),
    new OrgItemConfig({
      id: 5,
      parent: 0,
      title: "James Nunnally",
      description: "Regular Item",
      groupTitle: "Regular",
      image: "./assets/photos/d.png"
    }),
    new OrgItemConfig({
      id: 6,
      parent: 0,
      title: "Harry Harter",
      description: "Regular Item",
      groupTitle: "Regular",
      image: "./assets/photos/d.png"
    })
  ];
}
