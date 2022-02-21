import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-matrix-groups-in-family-chart',
  templateUrl: './matrix-groups-in-family-chart.component.html',
  styleUrls: ['./sample.css']
})
export class MatrixGroupsInFamilyChartComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items = [
    new FamItemConfig({ id: 1, parents: [], title: "1", label: "1", description: "", image: "./assets/photos/z.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", description: "", image: "./assets/photos/a.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 3, parents: [1, 101, 102, 103], title: "3", label: "3", description: "", image: "./assets/photos/b.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 4, parents: [1, 101, 102, 103], title: "4", label: "4", description: "", image: "./assets/photos/c.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 5, parents: [1, 101, 102, 103], title: "5", label: "5", description: "", image: "./assets/photos/c.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 6, parents: [1, 101, 102, 103], matrixId: "2", title: "6", label: "6", description: "", image: "./assets/photos/e.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 7, parents: [1, 101, 102, 103], matrixId: "2", title: "7", label: "7", description: "", image: "./assets/photos/f.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 8, parents: [1, 101, 102, 103], matrixId: "2", title: "8", label: "8", description: "", image: "./assets/photos/g.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 9, parents: [1, 101, 102, 103], matrixId: "2", title: "10", label: "10", description: "", image: "./assets/photos/i.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 10, parents: [1, 101, 102, 103], addToMatrix: false,  title: "10", label: "10", description: "", image: "./assets/photos/i.png", itemTitleColor: "#ff0000" }),
    new FamItemConfig({ id: 33, parents: [2, 3, 4, 5, 6, 7, 8, 9, 10], title: "33", label: "33", description: "", image: "./assets/photos/m.png", itemTitleColor: "#4b0082" })
  ]
}
