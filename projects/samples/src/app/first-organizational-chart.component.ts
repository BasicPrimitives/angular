import { Component } from '@angular/core';
import { OrgConfig, OrgItemConfig, Enabled, PageFitMode } from 'basic-primitives';

@Component({
  selector: 'app-first-organizational-chart',
  templateUrl: './first-organizational-chart.component.html',
  styleUrls: ['./sample.css']
})
export class FirstOrganizationalChartComponent {

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
}
