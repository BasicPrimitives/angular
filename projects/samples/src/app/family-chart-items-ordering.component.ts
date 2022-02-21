import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, AdviserPlacementType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-family-chart-items-ordering',
  templateUrl: './family-chart-items-ordering.component.html',
  styleUrls: ['./sample.css']
})
export class FamilyChartItemsOrderingComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items = [
    new FamItemConfig({ id: 10, relativeItem: 2, placementType: AdviserPlacementType.Left, position: 1, title: "Roger Dalton", label: "Roger Dalton", description: "Id: 10", image: "/assets/photos/a.png", itemTitleColor: "#4169e1" }),
    new FamItemConfig({ id: 2, title: "Steven Lacombe", label: "Steven Lacombe", description: "Id: 2", image: "/assets/photos/b.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 11, relativeItem: 2, placementType: AdviserPlacementType.Right, position: 1, title: "Bill Dalton", label: "Bill Dalton", description: "Id: 11", image: "/assets/photos/c.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 1, parents: [11], title: "David Dalton", label: "David Dalton", description: "Id: 1", image: "/assets/photos/c.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 3, parents: [10], title: "Ann Smith", label: "Ann Smith", description: "Id: 3", image: "/assets/photos/a.png", itemTitleColor: "#4169e1" }),
    new FamItemConfig({ id: 4, parents: [2], title: "Nancy Smith", label: "Nancy Smith", description: "Id: 4", image: "/assets/photos/c.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 5, parents: [2], title: "Helly Smith", label: "Helly Smith", description: "Id: 5", image: "/assets/photos/a.png", itemTitleColor: "#4169e1" }),
    new FamItemConfig({ id: 6, parents: [1, 4], title: "Kelly Smith", label: "Kelly Smith", description: "Id: 6", image: "/assets/photos/c.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 7, parents: [5, 3], title: "Sally Smith", label: "Sally Smith", description: "Id: 7", image: "/assets/photos/a.png", itemTitleColor: "#4169e1" })
  ]

  onClick(event: Event) {
    const items = this.items;

    const newItems = items.map(item => {
      if (item.id === 10 || item.id === 11) {
        let { placementType } = item;
        if (placementType === AdviserPlacementType.Right) {
          placementType = AdviserPlacementType.Left;
        } else {
          placementType = AdviserPlacementType.Right;
        }
        return {
          ...item,
          placementType
        }
      }
      return item;
    })
    this.items = newItems;
  }
}
