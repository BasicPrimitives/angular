import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-zoom-with-css-scale-transform',
  templateUrl: './zoom-with-css-scale-transform.component.html',
  styleUrls: ['./sample.css']
})
export class ZoomWithCssScaleTransformComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  scales = [
    { name: "Extra Small", scale: 0.25 },
    { name: "Small", scale: 0.5 },
    { name: "Medium", scale: 1.0 },
    { name: "Large", scale: 1.5 },
    { name: "Extra Large", scale: 2 }
  ];

  scale = 1.0;

  items = [
    new OrgItemConfig({ id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", image: "./assets/photos/q.png", itemTitleColor: "#4169e1", title: "David Dalton" }),
    new OrgItemConfig({ id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", image: "./assets/photos/w.png", itemTitleColor: "#4b0082", title: "Jeanna White" }),
    new OrgItemConfig({ id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", image: "./assets/photos/e.png", itemTitleColor: "#4b0082", title: "James Holt" }),
    new OrgItemConfig({ id: 3, parent: 0, isVisible: true, description: "VP, Server & Tools Marketing and Solutions", image: "./assets/photos/r.png", itemTitleColor: "#4b0082", title: "Thomas Williams" }),
    new OrgItemConfig({ id: 4, parent: 0, isVisible: true, description: "VP, Software & Enterprise Management Division", image: "./assets/photos/g.png", itemTitleColor: "#4b0082",title: "Sara Kemp" }),
    new OrgItemConfig({ id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", image: "./assets/photos/x.png", itemTitleColor: "#4b0082", title: "George Duong" }),
    new OrgItemConfig({ id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", image: "./assets/photos/n.png", itemTitleColor: "#4b0082", title: "Ashley Rue" }),
    new OrgItemConfig({ id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", image: "./assets/photos/i.png", itemTitleColor: "#4b0082", title: "Bonnie Wedel" }),
    new OrgItemConfig({ id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", image: "./assets/photos/p.png", itemTitleColor: "#4b0082", title: "Melissa Houser" }),
    new OrgItemConfig({ id: 9, parent: 3, isVisible: true, description: "GM, Software Server Solutions Group", image: "./assets/photos/a.png", itemTitleColor: "#4b0082", title: "Abbie Lawson" }),
    new OrgItemConfig({ id: 10, parent: 3, isVisible: true, description: "GM, Connected Systems Division", image: "./assets/photos/s.png", itemTitleColor: "#4b0082", title: "Ernest Putnam" }),
    new OrgItemConfig({ id: 11, parent: 4, isVisible: true, description: "CFO, Platforms Products & Services", image: "./assets/photos/h.png", itemTitleColor: "#4b0082", title: "Celestina Crum" }),
    new OrgItemConfig({ id: 12, parent: 4, isVisible: true, description: "GM, Pricing", image: "./assets/photos/j.png", itemTitleColor: "#4b0082", title: "Cindy Turner" })
  ]
}
