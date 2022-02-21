import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, Colors, TextOrientationType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-group-title',
  templateUrl: './group-title.component.html',
  styleUrls: ['./sample.css']
})
export class GroupTitleComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  TextOrientationType = TextOrientationType;

  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: 'James Smith',
      description: 'VP, Public Sector',
      image: './assets/photos/a.png',
      groupTitle: "Group 1"
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: 'Ted Lucas',
      description: 'VP, Human Resources',
      image: './assets/photos/b.png',
      groupTitle: "Group 2",
      groupTitleColor: Colors.Gray
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: 'Fritz Stuger',
      description: 'Business Solutions, US',
      image: './assets/photos/c.png',
      groupTitle: "Group 2"
    })
  ];
}
