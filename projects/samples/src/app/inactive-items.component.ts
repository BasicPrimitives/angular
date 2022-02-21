import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-inactive-items',
  templateUrl: './inactive-items.component.html',
  styleUrls: ['./sample.css', './inactive-items.component.css']
})
export class InactiveItemsComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "James Smith",
      description: "VP, Public Sector",
      image: "./assets/photos/a.png"
    }),
    new OrgItemConfig({ id: 1, parent: 0, hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "Finance", itemTitleColor: "Green" }),
    new OrgItemConfig({
      id: 2,
      parent: 1,
      title: "Ted Lucas",
      description: "VP, Human Resources",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({ id: 3, parent: 0, hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "Sales", itemTitleColor: "Navy" }),
    new OrgItemConfig({
      id: 4,
      parent: 3,
      title: "Fritz Stuger",
      description: "VP, Human Resources",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({ id: 5, parent: 0, hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "Operations", itemTitleColor: "Magenta" }),
    new OrgItemConfig({
      id: 6,
      parent: 5,
      title: "Brad Whitt",
      description: "VP, Human Resources",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({ id: 7, parent: 0, hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "IT", itemTitleColor: "Orange" }),
    new OrgItemConfig({
      id: 8,
      parent: 7,
      title: "Ted Whitt",
      description: "VP, Human Resources",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({
      id: 18,
      parent: 7,
      title: "Ted Whitt 2",
      description: "VP, Human Resources",
      image: "./assets/photos/b.png"
    }),
    new OrgItemConfig({ id: 19, parent: 2, isVisible: true, description: "VP, Security Technology Unit (STU)", groupTitleColor: "#4169e1", image: "./assets/photos/y.png", itemTitleColor: "#4b0082", title: "Robert Morgan" }),
    new OrgItemConfig({ id: 20, parent: 2, isVisible: true, description: "GM, Software Serviceability", groupTitleColor: "#4169e1", image: "./assets/photos/a.png", itemTitleColor: "#4b0082", title: "Ida Benefield" }),
    new OrgItemConfig({ id: 21, parent: 4, isVisible: true, description: "GM, Core Operating System Test", groupTitleColor: "#4169e1", image: "./assets/photos/d.png", itemTitleColor: "#4b0082", title: "Vada Duhon" }),
    new OrgItemConfig({ id: 22, parent: 4, isVisible: true, description: "GM, Global Platform Technologies and Services", groupTitleColor: "#4169e1", image: "./assets/photos/f.png", itemTitleColor: "#4b0082", title: "William Loyd" }),
    new OrgItemConfig({ id: 23, parent: 6, isVisible: true, description: "Sr. VP, NAME & Personal Services Division", groupTitleColor: "#4169e1", image: "./assets/photos/g.png", itemTitleColor: "#4b0082", title: "Craig Blue" }),
    new OrgItemConfig({ id: 24, parent: 6, isVisible: true, description: "VP, NAME Communications Services and Member Platform", groupTitleColor: "#4169e1", image: "./assets/photos/h.png", itemTitleColor: "#4b0082", title: "Joel Crawford" }),
    new OrgItemConfig({ id: 25, parent: 8, isVisible: true, description: "VP & CFO, NAME", groupTitleColor: "#4169e1", image: "./assets/photos/o.png", itemTitleColor: "#4b0082", title: "Barbara Lang" }),
    new OrgItemConfig({ id: 26, parent: 8, isVisible: true, description: "VP, NAME Operations", groupTitleColor: "#4169e1", image: "./assets/photos/d.png", itemTitleColor: "#4b0082", title: "Barbara Faulk" }),
    new OrgItemConfig({ id: 27, parent: 18, isVisible: true, description: "VP, NAME Global Sales & Marketing", groupTitleColor: "#4169e1", image: "./assets/photos/z.png", itemTitleColor: "#4b0082", title: "Stewart Williams" }),
    new OrgItemConfig({ id: 28, parent: 18, isVisible: true, description: "Sr. VP, NAME Information Services & Merchant Platform", groupTitleColor: "#4169e1", image: "./assets/photos/y.png", itemTitleColor: "#4b0082", title: "Robert Lemieux" })
  ]
}
