import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-selecting-highlight-item',
  templateUrl: './selecting-highlight-item.component.html',
  styleUrls: ['./sample.css']
})
export class SelectingHighlightItemComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  title: String | undefined;
  highlightItem: number | null = 0;
  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: 'James Smith',
      description: 'VP, Public Sector',
      image: './assets/photos/a.png'
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: 'Ted Lucas',
      description: 'VP, Human Resources',
      image: './assets/photos/b.png'
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: 'Fritz Stuger',
      description: 'Business Solutions, US',
      image: './assets/photos/c.png'
    })
  ];

  onHighlightChanged(event: any) {
    const { context: item } = event;
    if (item) {
      this.title = item.title + " ";
    }
  };

  update(itemId: number | null = null) {
    this.highlightItem = itemId;
  }
}
