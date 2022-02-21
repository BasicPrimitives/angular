import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';
import { SelectionEventArgs } from 'dist/ngx-basic-primitives/lib/events';

@Component({
  selector: 'app-selecting-items',
  templateUrl: './selecting-items.component.html',
  styleUrls: ['./sample.css']
})
export class SelectingItemsComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  checkBoxes = [
    {id: 0, isChecked: false, name: 'James Smith'},
    {id: 1, isChecked: false, name: 'Ted Lucas'},
    {id: 2, isChecked: false, name: 'Fritz Stuger'}
  ];
  selectedItems: Array<number | string> = [1];
  items = [
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
  ];

  constructor() {
    this.updateCheckboxes();
  }

  onSelectionChanged(event: SelectionEventArgs) {
    this.selectedItems = event.newSelectedItems;
    this.updateCheckboxes();
    event.cancel = true; // Cancel state change in Component and rendering cycle
  };

  update(event: MatCheckboxChange) {
    const checked = event.checked;
    const itemId = parseInt(event.source.value);
    if (checked) {
      this.selectedItems = [...this.selectedItems, itemId]
    } else {
      this.selectedItems = (this.selectedItems.filter(id => id != itemId))
    }
    this.updateCheckboxes();
  }

  updateCheckboxes() {
    var hash: {[id: number | string]:boolean} = {};
    this.selectedItems.forEach(itemId => {
      hash[itemId] = true;
    });

    this.checkBoxes = this.checkBoxes.map(({id, name, isChecked}) => {
      if(hash[id]) {
        return {
          id, name, isChecked: true
        }
      } else {
        return {
          id, name, isChecked: false
        }
      }
    })
  }
}
