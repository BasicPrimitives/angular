import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, AdviserPlacementType, ItemType, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-adviser-partner-item-type',
  templateUrl: './adviser-partner-item-type.component.html',
  styleUrls: ['./sample.css']
})
export class AdviserPartnerItemTypeComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "James Smith",
      description: "VP, Public Sector",
      image: "/assets/photos/a.png"
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: "Robert Canon",
      description: "Adviser Partner",
      image: "/assets/photos/z.png",
      itemType: ItemType.AdviserPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Partner"
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: "Fritz Stuger",
      description: "Adviser Partner item",
      image: "/assets/photos/y.png",
      itemType: ItemType.AdviserPartner,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Partner"
    }),
    new OrgItemConfig({
      id: 3,
      parent: 0,
      title: "Ted Lucas",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 4,
      parent: 3,
      title: "Robert Canon 2",
      description: "Adviser Partner item",
      image: "/assets/photos/z.png",
      itemType: ItemType.AdviserPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Partner"
    }),
    new OrgItemConfig({
      id: 5,
      parent: 3,
      title: "Ted Lucas 2",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    })
  ]
}
