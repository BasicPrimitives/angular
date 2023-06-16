import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-zoom-with-item-template',
  templateUrl: './zoom-with-item-template.component.html',
  styleUrls: ['./sample.css', './zoom-with-item-template.component.css']
})
export class ZoomWithItemTemplateComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  templateName = "md";
  scales = [
    {
      caption: "Extra Small",
      defaultTemplateName: "xs",
      normalLevelShift: 8,
      normalItemsInterval: 4
    },
    {
      caption: "Small",
      defaultTemplateName: "sm",
      normalLevelShift: 10,
      normalItemsInterval: 8,
    },
    {
      caption: "Medium",
      defaultTemplateName: "md",
      normalLevelShift: 12,
      normalItemsInterval: 12
    },
    {
      caption: "Large",
      defaultTemplateName: "lg",
      normalLevelShift: 14,
      normalItemsInterval: 16,
    },
    {
      caption: "Extra Large",
      defaultTemplateName: "xl",
      normalLevelShift: 16,
      normalItemsInterval: 20
    }
  ];

  defaultTemplateName = "md";
  normalLevelShift = 12;
  normalItemsInterval = 12;

  onChange(event: MatRadioChange) {
    var template = this.scales.find(item => item.defaultTemplateName == event.value);
    this.defaultTemplateName = template!.defaultTemplateName;
    this.normalLevelShift = template!.normalLevelShift;
    this.normalItemsInterval = template!.normalItemsInterval;
  }

  items = [
    new OrgItemConfig({ id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", context: { email: "davidalt@name.com", phone: "(352) 206-7599"}, image: "./assets/photos/q.png", itemTitleColor: "#4169e1", title: "David Dalton" }),
    new OrgItemConfig({ id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", context: { email: "jeanwhit@name.com", phone: "(505) 791-1689" }, image: "./assets/photos/w.png", itemTitleColor: "#4b0082", title: "Jeanna White" }),
    new OrgItemConfig({ id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", context: { email: "jameholt@name.com", phone: "(262) 215-7998" }, image: "./assets/photos/e.png", itemTitleColor: "#4b0082",  title: "James Holt" }),
    new OrgItemConfig({ id: 3, parent: 0, isVisible: true, description: "VP, Server & Tools Marketing and Solutions", context: { email: "thomwill@name.com", phone: "(904) 547-5342" }, image: "./assets/photos/r.png", itemTitleColor: "#4b0082", title: "Thomas Williams" }),
    new OrgItemConfig({ id: 4, parent: 0, isVisible: true, description: "VP, Software & Enterprise Management Division", context: { email: "sarakemp@name.com", phone: "(918) 257-4218" }, image: "./assets/photos/g.png", itemTitleColor: "#4b0082",  title: "Sara Kemp" }),
    new OrgItemConfig({ id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", context: { email: "georduon@name.com", phone: "(434) 406-2189" }, image: "./assets/photos/x.png", itemTitleColor: "#4b0082", title: "George Duong" }),
    new OrgItemConfig({ id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", context: { email: "ashlrue@name.com", phone: "(515) 324-4969" }, image: "./assets/photos/n.png", itemTitleColor: "#4b0082", title: "Ashley Rue" }),
    new OrgItemConfig({ id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", context: { email: "bonnwede@name.com", phone: "(412) 265-2782" }, image: "./assets/photos/i.png", itemTitleColor: "#4b0082", title: "Bonnie Wedel" }),
    new OrgItemConfig({ id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", context: { email: "melihous@name.com", phone: "(630) 887-1188" }, image: "./assets/photos/p.png", itemTitleColor: "#4b0082", title: "Melissa Houser" }),
    new OrgItemConfig({ id: 9, parent: 3, isVisible: true, description: "GM, Software Server Solutions Group", context: { email: "abbilaws@name.com", phone: "530-322-6413" }, image: "./assets/photos/a.png", itemTitleColor: "#4b0082", title: "Abbie Lawson" }),
    new OrgItemConfig({ id: 10, parent: 3, isVisible: true, description: "GM, Connected Systems Division", context: { email: "erneputn@name.com", phone: "(626) 831-0555" }, image: "./assets/photos/s.png", itemTitleColor: "#4b0082", title: "Ernest Putnam" }),
    new OrgItemConfig({ id: 11, parent: 4, isVisible: true, description: "CFO, Platforms Products & Services", context: { email: "celecrum@name.com", phone: "(419) 578-6479" }, image: "./assets/photos/h.png", itemTitleColor: "#4b0082", title: "Celestina Crum" }),
    new OrgItemConfig({ id: 12, parent: 4, isVisible: true, description: "GM, Pricing", context: { email: "cindturn@name.com", phone: "(530) 934-4295"}, image: "./assets/photos/j.png", itemTitleColor: "#4b0082", title: "Cindy Turner" })
  ];
}
