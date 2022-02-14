import { Component, ElementRef, EventEmitter, Input, NgZone, Output, SimpleChanges } from '@angular/core';
import { FamConfig } from '../configs/fam-config';
import { BaseDiagramComponent } from './base-diagram.component';
import { TaskManagerFactory } from './task-manager-factory';
import { FamEventArgs, SelectionEventArgs } from '../events/';
// @ts-ignore
import { FamTaskManagerFactory } from 'basicprimitives';


@Component({
  selector: 'fam-diagram',
  templateUrl: './base-diagram.component.html',
  styleUrls: ['./base-diagram.component.css']
})
export class FamDiagramComponent extends BaseDiagramComponent {
  @Input() config: FamConfig = new FamConfig();

  @Output() onHighlightChanging = new EventEmitter<FamEventArgs>(false);
  @Output() onHighlightChanged = new EventEmitter<FamEventArgs>();
  @Output() onCursorChanging = new EventEmitter<FamEventArgs>(false);
  @Output() onCursorChanged = new EventEmitter<FamEventArgs>();
  @Output() onSelectionChanging = new EventEmitter<SelectionEventArgs>(false);
  @Output() onSelectionChanged = new EventEmitter<SelectionEventArgs>();

  constructor(host: ElementRef, zone: NgZone) {
    super(host, zone, new TaskManagerFactory(FamTaskManagerFactory))
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

  override _onHighlightChanging (event: Event, itemId: number | string | null, newItemId: number | string | null): FamEventArgs {
    var newEvent = new FamEventArgs(
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

  override _onCursorChanging (event: Event, itemId: number | string | null, newItemId: number | string | null): FamEventArgs { 
    var newEvent = new FamEventArgs(
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
