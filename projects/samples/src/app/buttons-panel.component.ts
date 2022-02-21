import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./sample.css']
})
export class ButtonsPanelComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;


  cursorItem: string | number | null = 0;
  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: 'James Smith',
      description: 'VP, Public Sector',
      image: '/assets/photos/a.png'
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: 'Ted Lucas',
      description: 'VP, Human Resources',
      image: '/assets/photos/b.png'
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: 'Fritz Stuger',
      description: 'Business Solutions, US',
      image: '/assets/photos/c.png'
    }),
    new OrgItemConfig({
      id: 3,
      parent: 0,
      title: "Lynne Rathinam",
      description: "GM, Enterprise Services",
      image: "/assets/photos/d.png"
    })
  ];
  
  index: number = 4;

  onAddButtonClick(event: Event, itemConfig: OrgItemConfig) {
    event.stopPropagation();
    alert(`User clicked on Coffee button for node ${itemConfig.title}`)
  }

  onRemoveButtonClick(event: Event, itemConfig: OrgItemConfig) {
    event.stopPropagation();
    alert(`User clicked on Tree button for node ${itemConfig.title}`)
  }
}
