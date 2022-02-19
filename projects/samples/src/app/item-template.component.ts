import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'basic-primitives';

@Component({
  selector: 'app-item-template',
  templateUrl: './item-template.component.html',
  styleUrls: ['./sample.css', './item-template.component.css']
})
export class ItemTemplateComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "James Smith",
      description: "VP, Public Sector",
      image: "/assets/photos/a.png",
      context: { phone: "(123) 456-78-90", email: "itema@org.com" },
      templateName: "contactTemplate",
      itemTitleColor: "red"
      //groupTitle: "Group 2"
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: "Ted Lucas",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png",
      templateName: "contactTemplate"
      //groupTitle: "Group 1"
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: "Fritz Stuger",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com" },
      description: "Business Solutions, US",
      image: "/assets/photos/c.png",
      templateName: "contactTemplate",
      //groupTitle: "Group 3"
    })
  ];
}
