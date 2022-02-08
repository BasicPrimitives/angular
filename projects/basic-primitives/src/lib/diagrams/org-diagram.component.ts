import { Component, Input, SimpleChanges } from '@angular/core';
import { OrgConfig } from '../configs/org-config';
import { BaseDiagramComponent } from './base-diagram.component';
import { TaskManagerFactory } from './task-manager-factory';
import { OrgEventArgs } from '../events/org-event-args';
// @ts-ignore
import { OrgTaskManagerFactory } from 'basicprimitives';


@Component({
  selector: 'org-diagram',
  templateUrl: './base-diagram.component.html',
  styleUrls: ['./base-diagram.component.css']
})
export class OrgDiagramComponent extends BaseDiagramComponent {
  @Input() config: OrgConfig = new OrgConfig();

  constructor() {
    super(new TaskManagerFactory(OrgTaskManagerFactory, OrgEventArgs))
  }

  ngOnChanges(changes: SimpleChanges) {
    const { config, centerOnCursor } = changes;
    const { highlightItem, cursorItem, selectedItems } = config.currentValue;
    this.state = {
      ...this.state,
      config: this.config,
      highlightItem,
      cursorItem,
      selectedItems: (selectedItems || []).slice(),
      centerOnCursor: centerOnCursor.currentValue
    }
  }
}
