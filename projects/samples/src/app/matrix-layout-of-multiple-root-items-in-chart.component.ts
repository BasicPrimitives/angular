import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, ChildrenPlacementType, OrientationType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-matrix-layout-of-multiple-root-items-in-chart',
  templateUrl: './matrix-layout-of-multiple-root-items-in-chart.component.html',
  styleUrls: ['./sample.css']
})
export class MatrixLayoutOfMultipleRootItemsInChartComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  OrientationType = OrientationType;

  items = [
    new OrgItemConfig({
      id: 0,
      title: "invisible",
      parent: null,
      isVisible: false,
      childrenPlacementType: ChildrenPlacementType.Matrix
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: "Item 1",
      description: "Some description about item",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: "Item 2",
      description: "Some description about item",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 3,
      parent: 0,
      title: "Item 3",
      description: "Some description about item",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 4,
      parent: 0,
      title: "Item 4",
      description: "Some description about item",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 5,
      parent: 0,
      title: "Item 5",
      description: "Some description about item",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 6,
      parent: 0,
      title: "Item 6",
      description: "Some description about item",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 7,
      parent: 0,
      title: "Item 7",
      description: "Some description about item",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 8,
      parent: 0,
      title: "Item 8",
      description: "Some description about item",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 9,
      parent: 0,
      title: "Item 9",
      description: "Some description about item",
      image: "./assets/photos/b.png"
    })
  ]
}
