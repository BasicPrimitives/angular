import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, ChildrenPlacementType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-children-placement-type',
  templateUrl: './children-placement-type.component.html',
  styleUrls: ['./sample.css', './children-placement-type.component.css']
})
export class ChildrenPlacementTypeComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  items = [
    /* matrix layout example */
    new OrgItemConfig({
      id: 1,
      parent: null,
      title: "Matrix Layout",
      childrenPlacementType: ChildrenPlacementType.Matrix
    }),
    new OrgItemConfig({ id: 2, parent: 1, title: "Child 1" }),
    new OrgItemConfig({ id: 3, parent: 1, title: "Child 2" }),
    new OrgItemConfig({ id: 4, parent: 1, title: "Child 3" }),
    new OrgItemConfig({ id: 5, parent: 1, title: "Child 4" }),
    new OrgItemConfig({ id: 6, parent: 1, title: "Child 5" }),
    new OrgItemConfig({ id: 7, parent: 1, title: "Child 6" }),
    new OrgItemConfig({ id: 8, parent: 1, title: "Child 7" }),
    new OrgItemConfig({ id: 9, parent: 1, title: "Child 8" }),

    /* vertical layout example */
    new OrgItemConfig({
      id: 101,
      parent: null,
      title: "Vertical Layout",
      childrenPlacementType: ChildrenPlacementType.Vertical
    }),
    new OrgItemConfig({ id: 102, parent: 101, title: "Child 1" }),
    new OrgItemConfig({ id: 103, parent: 101, title: "Child 2", childrenPlacementType: ChildrenPlacementType.Vertical }),
    new OrgItemConfig({ id: 104, parent: 103, title: "Sub Child 3" }),
    new OrgItemConfig({ id: 105, parent: 103, title: "Sub Child 4" }),
    new OrgItemConfig({ id: 106, parent: 101, title: "Child 5" }),
    new OrgItemConfig({ id: 107, parent: 101, title: "Child 6" }),

    /* horizontal layout example */
    new OrgItemConfig({
      id: 201,
      parent: null,
      title: "Horizontal Layout",
      childrenPlacementType: ChildrenPlacementType.Horizontal
    }),
    new OrgItemConfig({ id: 202, parent: 201, title: "Child 1" }),
    new OrgItemConfig({ id: 203, parent: 201, title: "Child 2" }),
    new OrgItemConfig({ id: 204, parent: 201, title: "Child 3" })
  ]
}
