import { Component, ElementRef, EventEmitter, Input, NgZone, Output, SimpleChanges } from '@angular/core';
import { OrgConfig } from '../configs/org-config';
import { BaseDiagramComponent } from './base-diagram.component';
import { TaskManagerFactory } from './task-manager-factory';
import { OrgEventArgs, SelectionEventArgs } from '../events/';
// @ts-ignore
import { OrgTaskManagerFactory } from 'basicprimitives';

@Component({
  selector: 'org-diagram',
  templateUrl: './base-diagram.component.html',
  styleUrls: ['./base-diagram.component.css']
})
export class OrgDiagramComponent extends BaseDiagramComponent {
  @Input() config: OrgConfig = new OrgConfig();

  @Output() onHighlightChanging = new EventEmitter<OrgEventArgs>(false);
  @Output() onHighlightChanged = new EventEmitter<OrgEventArgs>();
  @Output() onCursorChanging = new EventEmitter<OrgEventArgs>(false);
  @Output() onCursorChanged = new EventEmitter<OrgEventArgs>();
  @Output() onSelectionChanging = new EventEmitter<SelectionEventArgs>(false);
  @Output() onSelectionChanged = new EventEmitter<SelectionEventArgs>();


  constructor(host: ElementRef, zone: NgZone) {
    super(host, zone, new TaskManagerFactory(OrgTaskManagerFactory))
  }

  ngOnChanges(changes: SimpleChanges) {
    const { config, centerOnCursor } = changes;
    var newState = {...this.state};
    if(centerOnCursor) {
      newState.centerOnCursor = centerOnCursor.currentValue;
    }
    if(config) {
      const { highlightItem, cursorItem, selectedItems } = config.currentValue;
      newState.config = this.config;
      newState.highlightItem = highlightItem;
      newState.cursorItem = cursorItem;
      newState.selectedItems =  (selectedItems || []).slice();
    }
    
    this.state = newState;
    this.render();
  }

  override _onHighlightChanging (event: Event, itemId: number | string | null, newItemId: number | string | null): OrgEventArgs {
    var newEvent = new OrgEventArgs(
      {
        ...(this.getEventArgs(itemId, newItemId)),
        event
      }
    )
    this.onHighlightChanging.emit(newEvent);
    return newEvent; 
  };

  override _onHighlightChanged (eventArgs: any) {
    this.onHighlightChanged.emit(eventArgs);
  };

  override _onCursorChanging (event: Event, itemId: number | string | null, newItemId: number | string | null): OrgEventArgs { 
    var newEvent = new OrgEventArgs(
      {
        ...(this.getEventArgs(itemId, newItemId)),
        event
      }
    )
    this.onCursorChanging.emit(newEvent);
    return newEvent; 
  };

  override _onCursorChanged (eventArgs: any) {
    this.onCursorChanged.emit(eventArgs);
  };

  override _onSelectionChanging (event: Event, selectedItems: Array<string|number>, newSelectedItems: Array<string|number>): SelectionEventArgs { 
    var newEvent = new SelectionEventArgs(
      {
        selectedItems,
        newSelectedItems,
        event
      }
    )
    this.onSelectionChanging.emit(newEvent);
    return newEvent; 
  };

  override _onSelectionChanged (eventArgs: any) {
    this.onSelectionChanging.emit(eventArgs);
  };
  
}
