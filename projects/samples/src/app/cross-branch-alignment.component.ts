import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, ChildrenPlacementType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-cross-branch-alignment',
  templateUrl: './cross-branch-alignment.component.html',
  styleUrls: ['./sample.css']
})
export class CrossBranchAlignmentComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  alignBranches = true;

  items = [
    new OrgItemConfig({
      id: 1,
      parent: null,
      title: "Branch 1",
      childrenPlacementType: ChildrenPlacementType.Matrix,
    }),
    new OrgItemConfig({
      id: 10,
      parent: 1,
      levelOffset: 0,
      title: "Child 1 at row 0",
    }),
    new OrgItemConfig({
      id: 11,
      parent: 1,
      levelOffset: 0,
      title: "Child 2 at row 0",
    }),
    new OrgItemConfig({
      id: 12,
      parent: 1,
      levelOffset: 1,
      title: "Child 3 at row 1",
    }),
    new OrgItemConfig({
      id: 13,
      parent: 1,
      levelOffset: 1,
      title: "Child 4 at row 1",
    }),
    new OrgItemConfig({
      id: 14,
      parent: 1,
      levelOffset: 1,
      title: "Child 5 at row 1",
    }),
    new OrgItemConfig({
      id: 15,
      parent: 1,
      levelOffset: 1,
      title: "Child 6 at row 1",
    }),

    new OrgItemConfig({ id: 2, parent: 1, title: "Child 7" }),
    new OrgItemConfig({ id: 3, parent: 1, title: "Child 8" }),
    new OrgItemConfig({ id: 4, parent: 1, title: "Child 9" }),
    new OrgItemConfig({ id: 5, parent: 1, title: "Child 10" }),
    new OrgItemConfig({ id: 6, parent: 1, title: "Child 11" }),
    new OrgItemConfig({ id: 7, parent: 1, title: "Child 12" }),
    new OrgItemConfig({ id: 8, parent: 1, title: "Child 13" }),
    new OrgItemConfig({ id: 9, parent: 1, title: "Child 14" }),

    /* Branch 2 */
    new OrgItemConfig({
      id: 101,
      parent: null,
      title: "Branch 2",
    }),
    new OrgItemConfig({
      id: 102,
      parent: 101,
      levelOffset: 1,
      title: "Child 1 at row 1",
    }),
    new OrgItemConfig({
      id: 103,
      parent: 101,
      levelOffset: 1,
      title: "Child 2 at row 1",
      childrenPlacementType: ChildrenPlacementType.Vertical,
    }),
    new OrgItemConfig({
      id: 104,
      parent: 103,
      title: "Sub Child 3",
    }),
    new OrgItemConfig({
      id: 105,
      parent: 103,
      title: "Sub Child 4",
    }),
    new OrgItemConfig({
      id: 106,
      parent: 101,
      title: "Child 3",
    }),
    new OrgItemConfig({
      id: 107,
      parent: 101,
      title: "Child 4",
    })
  ];
}
