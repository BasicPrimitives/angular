import { Component } from '@angular/core';
import { MatLegacyRadioChange as MatRadioChange } from '@angular/material/legacy-radio';
import { OrgItemConfig, Enabled, PageFitMode, Size } from 'ngx-basic-primitives';

@Component({
  selector: 'app-auto-size',
  templateUrl: './auto-size.component.html',
  styleUrls: ['./sample.css']
})
export class AutoSizeComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  sizes: {[id: string]:Size} = {
    "640*480": new Size(640, 480),
    "800*600": new Size(800, 600),
    "1024*768": new Size(1024, 768),
    "1280*1024": new Size(1280, 1024)
  };
  sizeKeys = ["640*480", "800*600", "1024*768", "1280*1024"];

  autoSizeMinimumKey: string = "640*480";
  autoSizeMinimum = this.sizes[this.autoSizeMinimumKey];
  autoSizeMaximumKey: string = "1024*768";
  autoSizeMaximum = this.sizes[this.autoSizeMaximumKey];

  setMinimumSize(event: MatRadioChange) {
    this.autoSizeMinimumKey = event.value;
    this.autoSizeMinimum = this.sizes[event.value];
  }

  setMaximumSize(event: MatRadioChange) {
    this.autoSizeMaximumKey = event.value;
    this.autoSizeMaximum = this.sizes[event.value];
  }

  items = [
    new OrgItemConfig({ id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", image: "./assets/photos/q.png", itemTitleColor: "#4169e1", title: "David Dalton", context: { email: "davidalt@name.com", phone: "352-206-7599" }}),
    new OrgItemConfig({ id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", image: "./assets/photos/w.png", itemTitleColor: "#4b0082", title: "Jeanna White", context: { email: "jeanwhit@name.com", phone: "505-791-1689" }}),
    new OrgItemConfig({ id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", image: "./assets/photos/e.png", itemTitleColor: "#4b0082", title: "James Holt", context: { email: "jameholt@name.com", phone: "262-215-7998" }}),
    new OrgItemConfig({ id: 3, parent: 0, isVisible: true, description: "VP, Server & Tools Marketing and Solutions", image: "./assets/photos/r.png", itemTitleColor: "#4b0082", title: "Thomas Williams", context: { email: "thomwill@name.com", phone: "904-547-5342" } }),
    new OrgItemConfig({ id: 4, parent: 0, isVisible: true, description: "VP, Software & Enterprise Management Division", image: "./assets/photos/g.png", itemTitleColor: "#4b0082", title: "Sara Kemp", context: { email: "sarakemp@name.com", phone: "918-257-4218" }}),
    new OrgItemConfig({ id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", image: "./assets/photos/x.png", itemTitleColor: "#4b0082", title: "George Duong", context: { email: "georduon@name.com", phone: "434-406-2189" } }),
    new OrgItemConfig({ id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", image: "./assets/photos/n.png", itemTitleColor: "#4b0082", title: "Ashley Rue", context: { email: "ashlrue@name.com", phone: "515-324-4969" } }),
    new OrgItemConfig({ id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", image: "./assets/photos/i.png", itemTitleColor: "#4b0082", title: "Bonnie Wedel", context: { email: "bonnwede@name.com", phone: "412-265-2782" } }),
    new OrgItemConfig({ id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", image: "./assets/photos/p.png", itemTitleColor: "#4b0082", title: "Melissa Houser", context: { email: "melihous@name.com", phone: "630-887-1188" } }),
    new OrgItemConfig({ id: 9, parent: 3, isVisible: true, description: "GM, Software Server Solutions Group", image: "./assets/photos/a.png", itemTitleColor: "#4b0082", title: "Abbie Lawson", context: { email: "abbilaws@name.com", phone: "530-322-6413" } }),
    new OrgItemConfig({ id: 10, parent: 3, isVisible: true, description: "GM, Connected Systems Division", image: "./assets/photos/s.png", itemTitleColor: "#4b0082", title: "Ernest Putnam", context: { email: "erneputn@name.com", phone: "626-831-0555" } }),
    new OrgItemConfig({ id: 11, parent: 4, isVisible: true, description: "CFO, Platforms Products & Services", image: "./assets/photos/h.png", itemTitleColor: "#4b0082", title: "Celestina Crum", context: { email: "celecrum@name.com", phone: "419-578-6479" } }),
    new OrgItemConfig({ id: 12, parent: 4, isVisible: true, description: "GM, Pricing", image: "./assets/photos/j.png", itemTitleColor: "#4b0082", title: "Cindy Turner", context: { email: "cindturn@name.com", phone: "530-934-4295" } })
  ]
}
