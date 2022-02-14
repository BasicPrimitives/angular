import { Component } from '@angular/core';
import { OrgConfig, OrgItemConfig, Enabled, PageFitMode } from 'basic-primitives';

@Component({
  selector: 'app-selecting-cursor-item',
  templateUrl: './selecting-cursor-item.component.html',
  styleUrls: ['./sample.css']
})
export class SelectingCursorItemComponent {
  title: String | undefined;

  config: OrgConfig = new OrgConfig({
    pageFitMode: PageFitMode.FitToPage,
    cursorItem: 0,
    highlightItem: 0,
    hasSelectorCheckbox: Enabled.True,
    items: [
      new OrgItemConfig({
        id: 0,
        parent: null,
        title: 'James Smith',
        description: 'VP, Public Sector',
        image: '/assets/photos/a.png'
      }),
      new OrgItemConfig({
        id: 1,
        parent: 0,
        title: 'Ted Lucas',
        description: 'VP, Human Resources',
        image: '/assets/photos/b.png'
      }),
      new OrgItemConfig({
        id: 2,
        parent: 0,
        title: 'Fritz Stuger',
        description: 'Business Solutions, US',
        image: '/assets/photos/c.png'
      })
    ]
  });


  onCursorChanged(event: any) {
    const { context: item } = event;
    if (item) {
      this.title = item.title + " ";
    }
  };

  update(itemId: number | null = null) {
    this.config = {
        ...this.config,
        cursorItem: itemId
    };
  }
}
