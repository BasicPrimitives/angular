import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, ItemType, AdviserPlacementType, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-limited-partner-item-type',
  templateUrl: './limited-partner-item-type.component.html',
  styleUrls: ['./sample.css']
})
export class LimitedPartnerItemTypeComponent {
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
      description: "General Partner",
      image: "/assets/photos/z.png",
      itemType: ItemType.LimitedPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Partner"
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: "Ted Lucas",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 3,
      parent: 2,
      title: "Fritz Stuger",
      description: "General Partner item",
      image: "/assets/photos/z.png",
      itemType: ItemType.LimitedPartner,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Partner"
    }),
    new OrgItemConfig({
      id: 4,
      parent: 2,
      title: "Ted Lucas 2",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    })
  ]
}
