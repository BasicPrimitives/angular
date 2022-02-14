import { Component } from '@angular/core';
import { FamConfig, FamItemConfig, Enabled, PageFitMode, GroupByType } from 'basic-primitives';

@Component({
  selector: 'app-first-family-chart',
  templateUrl: './first-family-chart.component.html',
  styleUrls: ['./sample.css']
})
export class FirstFamilyChartComponent {
  config: FamConfig = new FamConfig({
    pageFitMode: PageFitMode.None,
    cursorItem: 2,
    linesWidth: 1,
    linesColor: "black",
    hasSelectorCheckbox: Enabled.True,
    normalLevelShift: 20,
    dotLevelShift: 20,
    lineLevelShift: 20,
    normalItemsInterval: 10,
    dotItemsInterval: 30,
    lineItemsInterval: 30,
    arrowsDirection: GroupByType.Parents,
    showExtraArrows: false,
    items: [
      new FamItemConfig({ id: 1, title: "Thomas Williams", label: "Thomas Williams", description: "1st husband", image: "/assets/photos/t.png" }),
      new FamItemConfig({ id: 2, title: "Mary Spencer", label: "Mary Spencer", description: "The Mary",image: "/assets/photos/m.png" }),
      new FamItemConfig({ id: 3, title: "David Kirby", label: "David Kirby", description: "2nd Husband", image: "/assets/photos/d.png" }),
      new FamItemConfig({ id: 4, parents: [1, 2], title: "Brad Williams", label: "Brad Williams", description: "1st son", image: "/assets/photos/b.png" }),
      new FamItemConfig({ id: 5, parents: [2, 3], title: "Mike Kirby", label: "Mike Kirby", description: "2nd son, having 2 spouses", image: "/assets/photos/m.png"}),
      new FamItemConfig({ id: 6, title: "Lynette Maloney", label: "Lynette Maloney", description: "Spouse I", image: "/assets/photos/m.png" }),
      new FamItemConfig({ id: 11, parents: [5, 6], title: "Steven Powell", label: "Steven Powell", description: "1st son", image: "/assets/photos/s.png" }),
      new FamItemConfig({ id: 7, title: "Sara Kemp", label: "Sara Kemp", description: "Spouse II", image: "/assets/photos/s.png" }),
      new FamItemConfig({ id: 12, parents: [5, 7], title: "John Smith", label: "John Smith", description: "2ns son", image: "/assets/photos/j.png" }),
      new FamItemConfig({ id: 8, parents: [7], title: "Leon Kemp", label: "Leon Kemp", description: "", image: "/assets/photos/l.png" })
    ]
  });
}
