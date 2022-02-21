import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, NeighboursSelectionMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-inactive-family-items',
  templateUrl: './inactive-family-items.component.html',
  styleUrls: ['./sample.css', './inactive-family-items.component.css']
})
export class InactiveFamilyItemsComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;
  NeighboursSelectionMode = NeighboursSelectionMode;

  items: Array<FamItemConfig> = [
    new FamItemConfig({
      id: 0,
      title: "James Smith",
      description: "Co-CEO",
      image: "/assets/photos/a.png"
    }),
    new FamItemConfig({
      id: 100,
      title: "James Smith 2",
      description: "Co-CEO",
      image: "/assets/photos/a.png"
    }),
    new FamItemConfig({ id: 1, parents: [0, 100], hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "Finance", itemTitleColor: "Green" }),
    new FamItemConfig({
      id: 2,
      parents: [1],
      title: "Ted Lucas",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new FamItemConfig({ id: 3, parents: [0, 100], hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "Sales", itemTitleColor: "Navy" }),
    new FamItemConfig({
      id: 4,
      parents: [3],
      title: "Fritz Stuger",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new FamItemConfig({ id: 5, parents: [0, 100], hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "Operations", itemTitleColor: "Magenta" }),
    new FamItemConfig({
      id: 6,
      parents: [5],
      title: "Brad Whitt",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new FamItemConfig({ id: 7, parents: [0, 100], hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "IT", itemTitleColor: "Orange" }),
    new FamItemConfig({
      id: 8,
      parents: [7],
      title: "Ted Whitt",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new FamItemConfig({
      id: 18,
      parents: [7],
      title: "Ted Whitt 2",
      description: "VP, Human Resources",
      image: "/assets/photos/b.png"
    }),
    new FamItemConfig({ id: 19, parents: [2], description: "VP, Security Technology Unit (STU)", groupTitleColor: "#4169e1", image: "/assets/photos/y.png", itemTitleColor: "#4b0082", title: "Robert Morgan" }),
    new FamItemConfig({ id: 20, parents: [2], description: "GM, Software Serviceability", groupTitleColor: "#4169e1", image: "/assets/photos/a.png", itemTitleColor: "#4b0082", title: "Ida Benefield" }),
    new FamItemConfig({ id: 21, parents: [4], description: "GM, Core Operating System Test", groupTitleColor: "#4169e1", image: "/assets/photos/d.png", itemTitleColor: "#4b0082", title: "Vada Duhon" }),
    new FamItemConfig({ id: 22, parents: [4], description: "GM, Global Platform Technologies and Services", groupTitleColor: "#4169e1", image: "/assets/photos/f.png", itemTitleColor: "#4b0082", title: "William Loyd" }),
    new FamItemConfig({ id: 23, parents: [6], description: "Sr. VP, NAME & Personal Services Division", groupTitleColor: "#4169e1", image: "/assets/photos/g.png", itemTitleColor: "#4b0082", title: "Craig Blue" }),
    new FamItemConfig({ id: 24, parents: [6], description: "VP, NAME Communications Services and Member Platform", groupTitleColor: "#4169e1", image: "/assets/photos/h.png", itemTitleColor: "#4b0082", title: "Joel Crawford" }),
    new FamItemConfig({ id: 25, parents: [8], description: "VP & CFO, NAME",groupTitleColor: "#4169e1", image: "/assets/photos/o.png", itemTitleColor: "#4b0082", title: "Barbara Lang" }),
    new FamItemConfig({ id: 26, parents: [8], description: "VP, NAME Operations", groupTitleColor: "#4169e1", image: "/assets/photos/d.png", itemTitleColor: "#4b0082", title: "Barbara Faulk" }),
    new FamItemConfig({ id: 27, parents: [18], description: "VP, NAME Global Sales & Marketing", groupTitleColor: "#4169e1", image: "/assets/photos/z.png", itemTitleColor: "#4b0082", title: "Stewart Williams" }),
    new FamItemConfig({ id: 28, parents: [18], description: "Sr. VP, NAME Information Services & Merchant Platform", groupTitleColor: "#4169e1", image: "/assets/photos/y.png", itemTitleColor: "#4b0082", title: "Robert Lemieux" })
  ]
}
