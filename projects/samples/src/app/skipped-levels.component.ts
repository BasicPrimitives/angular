import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-skipped-levels',
  templateUrl: './skipped-levels.component.html',
  styleUrls: ['./sample.css']
})
export class SkippedLevelsComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

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
      title: "Ted Lucas",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 4,
      parent: 1,
      title: "Ted Lucas 2",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 5,
      parent: 1,
      title: "Ted Lucas 3",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new OrgItemConfig({ id: 2, parent: 0, isVisible: false }),
    new OrgItemConfig({
      id: 3,
      parent: 2,
      title: "Fritz Stuger",
      description: "Business Solutions, US",
      image: "/assets/photos/c.png"
    }),
    new OrgItemConfig({ id: 6, parent: null, isVisible: false }),
    new OrgItemConfig({ id: 7, parent: 6, isVisible: false }),
    new OrgItemConfig({
      id: 8,
      parent: 7,
      title: "Fritz Stuger 2",
      description: "Business Solutions, US",
      image: "/assets/photos/c.png"
    })
  ]
}
