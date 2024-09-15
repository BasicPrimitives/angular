import { Component, ElementRef, EventEmitter, Input, NgZone, Output, SimpleChanges } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ConnectorType, NavigationMode, PageFitMode, Visibility, OrientationType,
HorizontalAlignmentType, VerticalAlignmentType, GroupByType, ElbowType, Enabled, SelectionPathMode,
ShapeType, LineType, ChildrenPlacementType, AdviserPlacementType, TextOrientationType,
PlacementType } from '../enums';
import { BackgroundAnnotationConfig } from '../configs/background-annotation-config';
import { ConnectorAnnotationConfig } from '../configs/connector-annotation-config';
import { HighlightPathAnnotationConfig } from '../configs/highlight-path-annotation-config';
import { LevelAnnotationConfig } from '../configs/level-annotation-config';
import { OrgItemConfig } from '../configs/org-item-config';
import { ShapeAnnotationConfig } from '../configs/shape-annotation-config';
import { Size, Thickness } from '../structs';
import { TemplateConfig } from '../configs/template-config';
import { BaseDiagramComponent } from './base-diagram.component';
import { TaskManagerFactory } from './task-manager-factory';
import { OrgEventArgs, SelectionEventArgs } from '../events/';
// @ts-ignore
import { OrgTaskManagerFactory } from 'basicprimitives';
import { OrgConfig } from '../configs/org-config';

@Component({
  selector: 'org-diagram:not(a)',
  templateUrl: './base-diagram.component.html',
  styleUrls: ['./base-diagram.component.css']
})
export class OrgDiagramComponent extends BaseDiagramComponent implements OrgConfig {
  @Input() navigationMode: NavigationMode = NavigationMode.Default;
  @Input() pageFitMode: PageFitMode = PageFitMode.FitToPage;
  @Input() alignBranches: Boolean = false;
  @Input() minimalVisibility: Visibility = Visibility.Dot;
  @Input() minimumVisibleLevels: number = 1;
  @Input() orientationType: OrientationType = OrientationType.Top;
  @Input() horizontalAlignment: HorizontalAlignmentType = HorizontalAlignmentType.Center;
  @Input() verticalAlignment: VerticalAlignmentType = VerticalAlignmentType.Middle;
  @Input() arrowsDirection: GroupByType = GroupByType.None;
  @Input() showExtraArrows: Boolean = false;
  @Input() extraArrowsMinimumSpace: number = 30;
  @Input() connectorType: ConnectorType = ConnectorType.Squared;
  @Input() bevelSize: number = 4;
  @Input() elbowType: ElbowType = ElbowType.None;
  @Input() elbowDotSize: number = 4;
  @Input() emptyDiagramMessage: string = "Diagram is empty.";
  @Input() items: Array<OrgItemConfig> = [];
  @Input() annotations: Array<BackgroundAnnotationConfig|ConnectorAnnotationConfig|HighlightPathAnnotationConfig|ShapeAnnotationConfig|LevelAnnotationConfig> = [];
  @Input() cursorItem: number | string | null = null;
  @Input() highlightItem: number | string | null = null;
  @Input() highlightGravityRadius: number = 40;
  @Input() selectedItems: Array<number|string> = [];
  @Input() hasSelectorCheckbox: Enabled = Enabled.Auto;
  @Input() selectCheckBoxLabel: string = "Selected";
  @Input() selectionPathMode: SelectionPathMode = SelectionPathMode.FullStack;
  @Input() templates: Array<TemplateConfig> = [];
  @Input() defaultTemplateName: string | null = null;
  @Input() hasButtons: Enabled = Enabled.Auto;
  @Input() buttonsTemplate: TemplateRef<any> | null = null;

  @Input() normalLevelShift: number = 20;
  @Input() dotLevelShift: number = 20;
  @Input() lineLevelShift: number = 10;
  @Input() normalItemsInterval: number = 10;
  @Input() dotItemsInterval: number = 1;
  @Input() lineItemsInterval: number = 2;
  @Input() cousinsIntervalMultiplier: number = 5;
  @Input() itemTitleFirstFontColor: string = "#ffffff";
  @Input() itemTitleSecondFontColor: string = "#000080";

  @Input() minimizedItemShapeType: ShapeType = ShapeType.None;
  @Input() linesColor: string = "#c0c0c0";
  @Input() linesWidth: number = 1;
  @Input() linesType: LineType = LineType.Solid;
  @Input() highlightLinesColor: string = "#ff0000";
  @Input() highlightLinesWidth: number = 1;
  @Input() highlightLinesType: LineType = LineType.Solid;
  @Input() calloutMaximumVisibility: Visibility = Visibility.Dot;
  @Input() showCallout: Boolean = true;
  @Input() calloutPlacementOffset: number = 100;
  @Input() defaultCalloutTemplateName: string | null = null;
  @Input() calloutfillColor: string = "#000000";
  @Input() calloutBorderColor: string | null = null;
  @Input() calloutOffset: number = 4;
  @Input() calloutCornerRadius: number = 4;
  @Input() calloutPointerWidth: string = "10%";
  @Input() calloutLineWidth: number = 1;
  @Input() calloutOpacity: number = 0.2;
  @Input() childrenPlacementType: ChildrenPlacementType = ChildrenPlacementType.Horizontal;
  @Input() leavesPlacementType: ChildrenPlacementType = ChildrenPlacementType.Horizontal;
  @Input() placeAssistantsAboveChildren: Boolean = true;
  @Input() placeAdvisersAboveChildren: Boolean = true;
  @Input() maximumColumnsInMatrix: number = 6;
  @Input() buttonsPanelSize: number = 28;
  @Input() groupTitlePanelSize: number = 24;
  @Input() checkBoxPanelSize: number = 24;
  @Input() groupTitlePlacementType: AdviserPlacementType = AdviserPlacementType.Left;
  @Input() groupTitleOrientation: TextOrientationType = TextOrientationType.RotateRight;
  @Input() groupTitleVerticalAlignment: VerticalAlignmentType = VerticalAlignmentType.Middle;
  @Input() groupTitleHorizontalAlignment: HorizontalAlignmentType = HorizontalAlignmentType.Center;
  @Input() groupTitleFontSize: string = "12px";
  @Input() groupTitleFontFamily: string = "Arial";
  @Input() groupTitleColor: string = "#4169e1";
  @Input() groupTitleFontWeight: string = "normal";
  @Input() groupTitleFontStyle: string = "normal";
  @Input() groupTitleTemplate: TemplateRef<any> | null = null;
  @Input() levelTitlePanelSize: number = 24;
  @Input() levelTitlePlacementType: AdviserPlacementType = AdviserPlacementType.Left;
  @Input() levelTitlePlaceInside: Boolean = false;
  @Input() levelTitleOrientation: TextOrientationType = TextOrientationType.Auto;
  @Input() levelTitleVerticalAlignment: VerticalAlignmentType = VerticalAlignmentType.Middle;
  @Input() levelTitleHorizontalAlignment: HorizontalAlignmentType = HorizontalAlignmentType.Center;
  @Input() levelTitleFontSize: string = "12px";
  @Input() levelTitleFontFamily: string = "Arial";
  @Input() levelTitleFontColor: string = "#ffffff"
  @Input() levelTitleColor: string = "#4169e1";
  @Input() levelTitleFontWeight: string = "normal";
  @Input() levelTitleFontStyle: string = "normal";
  @Input() levelTitleTemplate: TemplateRef<any> | null = null;
  @Input() levelBackgroundTemplate: TemplateRef<any> | null = null;
  @Input() distance: number = 3;
  @Input() scale: number = 1;
  @Input() minimumScale: number = 0.5;
  @Input() maximumScale: number = 2;
  @Input() showLabels: Enabled = Enabled.Auto;
  @Input() labelSize: Size = new Size(80, 24);
  @Input() labelOffset: number = 1;
  @Input() labelOrientation: TextOrientationType = TextOrientationType.Horizontal;
  @Input() labelPlacement: PlacementType = PlacementType.Top;
  @Input() labelFontSize: string = "10px";
  @Input() labelFontFamily: string = "Arial";
  @Input() labelColor: string = "#000000";
  @Input() labelFontWeight: string = "normal";
  @Input() labelFontStyle: string = "normal";
  @Input() enablePanning: Boolean = true;
  @Input() autoSizeMinimum: Size = new Size(800, 600);
  @Input() autoSizeMaximum: Size = new Size(1024, 768);
  @Input() showFrame: Boolean = false;
  @Input() frameInnerPadding: Thickness = new Thickness(2, 2, 2, 2);
  @Input() frameOuterPadding: Thickness = new Thickness(2, 2, 2, 2);
  @Input() padding: Thickness = new Thickness(10, 10, 10, 10);

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
    var config = new OrgConfig(this);
    const { highlightItem, cursorItem, selectedItems } = config;
    this.state = {
      ...this.state,
      config,
      highlightItem,
      cursorItem,
      selectedItems,
      centerOnCursor: this.centerOnCursor
    };
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
    this.onSelectionChanged.emit(eventArgs);
  };
  
}
