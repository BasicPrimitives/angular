import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, OrientationType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-multiple-root-items-in-chart',
  templateUrl: './multiple-root-items-in-chart.component.html',
  styleUrls: ['./sample.css']
})
export class MultipleRootItemsInChartComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  OrientationType = OrientationType;

  orientationType = OrientationType.Top

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
      id: 2,
      parent: 0,
      title: "Fritz Stuger",
      description: "Business Solutions, US",
      image: "/assets/photos/c.png"
    }),
    new OrgItemConfig({
      id: 3,
      parent: null,
      title: "James Smith 2",
      description: "VP, Public Sector",
      image: "/assets/photos/a.png"
    }),
    new OrgItemConfig({
      id: 4,
      parent: 3,
      title: "Ted Lucas 2",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 5,
      parent: 3,
      title: "Fritz Stuger 2",
      description: "Business Solutions, US",
      image: "/assets/photos/c.png"
    })
  ]
}
