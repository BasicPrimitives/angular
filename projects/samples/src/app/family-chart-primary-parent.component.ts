import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, AdviserPlacementType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-family-chart-primary-parent',
  templateUrl: './family-chart-primary-parent.component.html',
  styleUrls: ['./sample.css']
})
export class FamilyChartPrimaryParentComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items = [
    new FamItemConfig({ id: 1, title: "Roger Dalton", label: "Roger Dalton", description: "Id: 1", image: "./assets/photos/a.png", itemTitleColor: "navy" }),
    new FamItemConfig({ id: 2, parents: [1], title: "Steven Lacombe", label: "Steven Lacombe", description: "Id: 2", image: "./assets/photos/b.png", itemTitleColor: "navy" }),
    new FamItemConfig({ id: 3, parents: [1], title: "Bill Dalton", label: "Bill Dalton", description: "Id: 3", image: "./assets/photos/c.png", itemTitleColor: "navy", relativeItem: 2, placementType: AdviserPlacementType.Right, position: 1 }),
    new FamItemConfig({ id: 4, title: "Ann Smith", label: "Ann Smith", description: "Id: 4", image: "./assets/photos/a.png", itemTitleColor: "navy" }),
    new FamItemConfig({ id: 5, parents: [4], title: "Nancy Smith", label: "Nancy Smith", description: "Id: 5", image: "./assets/photos/c.png", itemTitleColor: "navy" }),
    new FamItemConfig({ id: 6, parents: [4], title: "Helly Smith", label: "Helly Smith", description: "Id: 6", image: "./assets/photos/a.png", itemTitleColor: "navy", relativeItem: 5, placementType: AdviserPlacementType.Right, position: 1 }),
    new FamItemConfig({ id: 7, parents: [2, 6], title: "Kelly Smith", label: "Kelly Smith", description: "Id: 7", image: "./assets/photos/c.png", itemTitleColor: "navy" }),
    new FamItemConfig({ id: 8, parents: [3, 5], primaryParent: 5, title: "Sally Smith", label: "Sally Smith", description: "Id: 8", image: "./assets/photos/a.png" })
  ];

  onClick(event: Event) {
    const items = this.items;

    const newItems = items.map(item => {
      if (item.id === 8) {
        var { primaryParent } = item;
        primaryParent = (primaryParent === 3) ? 5 : 3;
        return {
          ...item,
          primaryParent
        }
      }
      return item;
    })
    this.items = newItems;
  }
}
