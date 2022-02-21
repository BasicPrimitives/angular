import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, SelectionPathMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-selection-path-mode-in-family-chart',
  templateUrl: './selection-path-mode-in-family-chart.component.html',
  styleUrls: ['./sample.css']
})
export class SelectionPathModeInFamilyChartComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;
  SelectionPathMode = SelectionPathMode;

  selectionPathMode = SelectionPathMode.None  
  items = [
    new FamItemConfig({
      id: 0,
      title: "James Smith",
      description: "VP, Public Sector",
      image: "./assets/photos/a.png"
    }),
    new FamItemConfig({
      id: 1,
      parents: [0],
      title: "Ted Lucas",
      description: "VP, Human Resources",
      image: "./assets/photos/b.png"
    }),
    new FamItemConfig({
      id: 2,
      parents: [1],
      title: "Fritz Stuger",
      description: "Business Solutions, US",
      image: "./assets/photos/c.png"
    }),
    new FamItemConfig({
      id: 3,
      parents: [2],
      title: "Robert Canon",
      description: "Business Solutions, Canada",
      image: "./assets/photos/z.png"
    })
  ];
}
