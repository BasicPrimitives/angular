import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-highlight-template',
  templateUrl: './highlight-template.component.html',
  styleUrls: ['./sample.css', './highlight-template.component.css']
})
export class HighlightTemplateComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "James Smith",
      description: "VP, Public Sector",
      image: "/assets/photos/a.png",
      context: { phone: "(123) 456-78-90", email: "itema@org.com", icon: "bookmark", color: "primary" },
      templateName: "contactTemplate",
      itemTitleColor: "red"
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: "Ted Lucas",
      description: "VP, Human Resources",
      context: { phone: "(123) 456-78-90", email: "itema@org.com", icon: "delete", color: "warn" },
      image: "/assets/photos/b.png",
      templateName: "contactTemplate"
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: "Fritz Stuger",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com", icon: "home", color: "accent" },
      description: "Business Solutions, US",
      image: "/assets/photos/c.png",
      templateName: "contactTemplate"
    })
  ];

  onClick(event: Event, itemConfig: OrgItemConfig) {
    event.stopPropagation();
    alert(`User clicked on cursor button for node ${itemConfig.title}`)
  }
}
