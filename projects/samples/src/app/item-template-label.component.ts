import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-item-template-label',
  templateUrl: './item-template-label.component.html',
  styleUrls: ['./sample.css', './item-template-label.component.css']
})
export class ItemTemplateLabelComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  items = [
    new OrgItemConfig({ id: 0, parent: null, label: "100%", isVisible: true, description: "Chief Executive Officer (CEO)", context: { email: "davidalt@name.com", phone: "(352) 206-7599" }, image: "/assets/photos/q.png", itemTitleColor: "#4169e1", title: "David Dalton" }),
    new OrgItemConfig({ id: 1, parent: 0, label: "50%", isVisible: true, description: "Co-Presidents, Platform Products & Services Division", context: { email: "jeanwhit@name.com", phone: "(505) 791-1689" }, image: "/assets/photos/w.png", itemTitleColor: "#4b0082", title: "Jeanna White" }),
    new OrgItemConfig({ id: 2, parent: 0, label: "50%", isVisible: true, description: "Sr. VP, Server & Tools Division", context: { email: "jameholt@name.com", phone: "(262) 215-7998" }, image: "/assets/photos/e.png", itemTitleColor: "#4b0082", title: "James Holt" }),
    new OrgItemConfig({ id: 5, parent: 1, label: "25%", isVisible: true, description: "Sr. VP, Software Server System", context: { email: "georduon@name.com", phone: "(434) 406-2189" }, image: "/assets/photos/x.png", itemTitleColor: "#4b0082", title: "George Duong" }),
    new OrgItemConfig({ id: 6, parent: 1, label: "25%", isVisible: true, description: "VP, Developer Division", context: { email: "ashlrue@name.com", phone: "(515) 324-4969" }, image: "/assets/photos/n.png", itemTitleColor: "#4b0082", title: "Ashley Rue" }),
    new OrgItemConfig({ id: 7, parent: 2, label: "25%", isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", context: { email: "bonnwede@name.com", phone: "(412) 265-2782" }, image: "/assets/photos/i.png", itemTitleColor: "#4b0082", title: "Bonnie Wedel" }),
    new OrgItemConfig({ id: 8, parent: 2, label: "25%", isVisible: true, description: "GM, Core File Solutions", context: { email: "melihous@name.com", phone: "(630) 887-1188" }, image: "/assets/photos/p.png", itemTitleColor: "#4b0082", title: "Melissa Houser" })
  ];
}
