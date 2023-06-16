import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-selection-checkbox-in-item-template',
  templateUrl: './selection-checkbox-in-item-template.component.html',
  styleUrls: ['./sample.css', './selection-checkbox-in-item-template.component.css']
})
export class SelectionCheckboxInItemTemplateComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  cursorItem: number | null = 0;
  selectedItems: Array<number> = [];
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

  onChange(event: MatCheckboxChange, itemConfig: OrgItemConfig) {
    const selectedItems = this.selectedItems;
    const isChecked = event.checked;
    if (isChecked && itemConfig.id != null) {
      this.selectedItems = [...selectedItems, itemConfig.id as number];
    } else {
      this.selectedItems = (selectedItems.filter(id => id !== itemConfig.id));
    }
  }

  onCursorChanged(event: any) {
    const { context: item } = event;
    this.cursorItem = item.id;
  };
}
