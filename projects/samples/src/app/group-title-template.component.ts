import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, Colors, TextOrientationType, HorizontalAlignmentType, VerticalAlignmentType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-group-title-template',
  templateUrl: './group-title-template.component.html',
  styleUrls: ['./sample.css', './group-title-template.component.css']
})
export class GroupTitleTemplateComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  TextOrientationType = TextOrientationType;
  HorizontalAlignmentType = HorizontalAlignmentType;
  VerticalAlignmentType = VerticalAlignmentType;

  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: 'James Smith',
      description: 'VP, Public Sector',
      image: '/assets/photos/a.png',
      groupTitle: "Group 1"
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: 'Ted Lucas',
      description: 'VP, Human Resources',
      image: '/assets/photos/b.png',
      groupTitle: "Group 2",
      groupTitleColor: Colors.Gray
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: 'Fritz Stuger',
      description: 'Business Solutions, US',
      image: '/assets/photos/c.png',
      groupTitle: "Group 2"
    })
  ];

  onClick(event: Event, itemConfig: OrgItemConfig) {
    event.stopPropagation();
    alert(`User clicked on group title for node ${itemConfig.title}`)
  }
}
