import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, AdviserPlacementType, Colors, ItemType, ChildrenPlacementType, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-custom-layout-with-invisible-items',
  templateUrl: './custom-layout-with-invisible-items.component.html',
  styleUrls: ['./sample.css']
})
export class CustomLayoutWithInvisibleItemsComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  ChildrenPlacementType = ChildrenPlacementType;
  GroupByType = GroupByType;

  items: Array<OrgItemConfig> = [];

  constructor() {
    var items: Array<OrgItemConfig> = [];
    var rootItem = new OrgItemConfig({
      id: 0,
      parent: null,
      title: "Title A",
      description: "Description A",
      image: "./assets/photos/a.png"
    });
    items.push(rootItem);

    items.push(new OrgItemConfig({
      id: 1,
      parent: 0,
      title: "Assistant 1",
      description: "Assistant Description",
      image: "./assets/photos/a.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive
    }));

    items.push(new OrgItemConfig({
      id: 2,
      parent: 0,
      title: "Assistant 2",
      description: "Assistant Description",
      image: "./assets/photos/b.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive
    }));

    for (var index = 3; index <= 10; index += 2) {
      items.push(new OrgItemConfig({
        id: index,
        parent: 1,
        title: "Sub Adviser",
        description: "Sub Adviser Description",
        image: "./assets/photos/s.png",
        itemType: ItemType.SubAdviser,
        adviserPlacementType: AdviserPlacementType.Left,
        groupTitle: "Sub Adviser",
        groupTitleColor: Colors.Red
      }));
      items.push(new OrgItemConfig({
        id: (index + 1),
        parent: 2,
        title: "Sub Adviser",
        description: "Sub Adviser Description",
        image: "./assets/photos/s.png",
        itemType: ItemType.SubAdviser,
        adviserPlacementType: AdviserPlacementType.Right,
        groupTitle: "Sub Adviser",
        groupTitleColor: Colors.Red
      }));
    }

    items.push(new OrgItemConfig({
      id: 12,
      parent: 0,
      isVisible: false,
      title: "Aggregator",
      description: "Invisible aggregator",
      childrenPlacementType: ChildrenPlacementType.Horizontal
    }));


    items.push(new OrgItemConfig({
      id: 13,
      parent: 12,
      title: "Assistant 3",
      description: "Assistant Description",
      image: "./assets/photos/c.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive
    }));


    items.push(new OrgItemConfig({
      id: 14,
      parent: 12,
      title: "Assistant 4",
      description: "Assistant Description",
      image: "./assets/photos/d.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive
    }));

    for (index = 15; index <= 21; index += 1) {
      if (index === 18) {
        /* invisible item */
        items.push(new OrgItemConfig({
          id: 18,
          parent: 12,
          isVisible: false,
          title: "Aggregator 2",
          description: "Invisible aggregator 2",
          childrenPlacementType: ChildrenPlacementType.Matrix
        }));
      } else {
        items.push(new OrgItemConfig({
          id: index,
          parent: 12,
          title: index.toString() + " Full Time",
          description: index.toString() + " Description",
          image: "./assets/photos/f.png",
          groupTitle: "Full Time"
        }));
      }
    }

    for (index = 22; index <= 33; index += 1) {
      items.push(new OrgItemConfig({
        id: index,
        parent: 18,
        title: index.toString() + " Part Time",
        description: index.toString() + " Description",
        image: "./assets/photos/p.png",
        groupTitle: "Part Time",
        groupTitleColor: Colors.Green
      }));
    };

    this.items = items;
  }
}
