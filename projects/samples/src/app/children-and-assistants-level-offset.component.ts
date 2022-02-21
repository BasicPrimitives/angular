import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, Colors, AnnotationType, Thickness, LineType, AdviserPlacementType, ItemType, ChildrenPlacementType, GroupByType } from 'ngx-basic-primitives';
import { LevelAnnotationConfig } from 'projects/ngx-basic-primitives/src/public-api';

@Component({
  selector: 'app-children-and-assistants-level-offset',
  templateUrl: './children-and-assistants-level-offset.component.html',
  styleUrls: ['./sample.css']
})
export class ChildrenAndAssistantsLevelOffsetComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  ChildrenPlacementType = ChildrenPlacementType;
  GroupByType = GroupByType;

  items: Array<OrgItemConfig> = [];
  annotations: Array<LevelAnnotationConfig> = [];

  constructor() {
    var items: Array<OrgItemConfig> = [];
    var rootItem = new OrgItemConfig({
      id: 0,
      parent: null,
      title: "Title A",
      description: "Description A",
      image: "/assets/photos/a.png",
      childrenPlacementType: ChildrenPlacementType.Matrix
    });
    items.push(rootItem);

    items.push(new OrgItemConfig({
      id: 1,
      parent: 0,
      title: "Assistant 1",
      description: "Assistant Description",
      image: "/assets/photos/a.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    }));

    items.push(new OrgItemConfig({
      id: 2,
      parent: 0,
      title: "Assistant 2",
      description: "Assistant Description",
      image: "/assets/photos/b.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    }));

    for (var index = 3; index <= 10; index += 2) {
      items.push(new OrgItemConfig({
        id: index,
        parent: 1,
        title: "Sub Adviser",
        description: "Sub Adviser Description",
        image: "/assets/photos/s.png",
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
        image: "/assets/photos/s.png",
        itemType: ItemType.SubAdviser,
        adviserPlacementType: AdviserPlacementType.Right,
        groupTitle: "Sub Adviser",
        groupTitleColor: Colors.Red
      }));
    }

    items.push(new OrgItemConfig({
      id: 13,
      parent: 0,
      title: "Assistant 3",
      description: "Assistant Description",
      image: "/assets/photos/c.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 1
    }));


    items.push(new OrgItemConfig({
      id: 14,
      parent: 0,
      title: "Assistant 4",
      description: "Assistant Description",
      image: "/assets/photos/d.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 1
    }));

    for (index = 100; index <= 107; index += 1) {
      items.push(new OrgItemConfig({
        id: index,
        parent: 0,
        title: index.toString() + " Contract",
        description: index.toString() + " Description",
        image: "/assets/photos/f.png",
        groupTitleColor: Colors.Red,
        groupTitle: "Contract",
        levelOffset: 0
      }));
    }

    for (index = 15; index <= 20; index += 1) {
      items.push(new OrgItemConfig({
        id: index,
        parent: 0,
        title: index.toString() + " Full Time",
        description: index.toString() + " Description",
        image: "/assets/photos/f.png",
        groupTitle: "Full Time",
        levelOffset: 1
      }));
    }

    for (index = 21; index <= 32; index += 1) {
      items.push(new OrgItemConfig({
        id: index,
        parent: 0,
        title: index.toString() + " Part Time",
        description: index.toString() + " Description",
        image: "/assets/photos/p.png",
        groupTitle: "Part Time",
        groupTitleColor: Colors.Green,
        levelOffset: 2
      }));
    };

    items.push(new OrgItemConfig({
      id: 1003,
      parent: 103,
      title: "Assistant",
      description: "Assistant Description",
      image: "/assets/photos/b.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    }));

    items.push(new OrgItemConfig({
      id: 1004,
      parent: 17,
      title: "Assistant",
      description: "Assistant Description",
      image: "/assets/photos/b.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    }));

    items.push(new OrgItemConfig({
      id: 1005,
      parent: 16,
      title: "Assistant",
      description: "Assistant Description",
      image: "/assets/photos/b.png",
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    }));

    var annotations = [
      new LevelAnnotationConfig({
        annotationType: AnnotationType.Level,
        levels: [0],
        title: "CEO",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      }),
      new LevelAnnotationConfig({
        annotationType: AnnotationType.Level,
        levels: [1],
        title: "Children 1",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0.08,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      }),
      new LevelAnnotationConfig({
        annotationType: AnnotationType.Level,
        levels: [2],
        title: "Children 2",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      }),
      new LevelAnnotationConfig({
        annotationType: AnnotationType.Level,
        levels: [3],
        title: "Members",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0.08,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      })
    ];

    this.items = items;
    this.annotations = annotations;
  }
}
