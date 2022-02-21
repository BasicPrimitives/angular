import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, SelectionPathMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-selection-path-mode',
  templateUrl: './selection-path-mode.component.html',
  styleUrls: ['./sample.css']
})
export class SelectionPathModeComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  SelectionPathMode = SelectionPathMode;

  selectionPathMode = SelectionPathMode.None
  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "James Smith",
      description: "VP, Public Sector",
      image: "./assets/photos/a.png"
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: "Ted Lucas",
      description: "VP, Human Resources",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 2,
      parent: 1,
      title: "Fritz Stuger",
      description: "Business Solutions, US",
      image: "./assets/photos/c.png"
    }),
    new OrgItemConfig({
      id: 3,
      parent: 2,
      title: "Robert Canon",
      description: "Business Solutions, Canada",
      image: "./assets/photos/z.png"
    })
  ]
}
