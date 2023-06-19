import { AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OrientationType } from '../enums';
import { Placeholder, Graphics } from './graphics';
import { Rect, Size, Point } from '../structs';
// @ts-ignore
import { getFixOfPixelAlignment, getInnerSize, getElementOffset } from 'basicprimitives';
import { TaskManagerFactory } from './task-manager-factory';
import {
  AnnotationLabelTemplate,
  ButtonsTemplate,
  CheckBoxTemplate,
  CursorTemplate,
  DotHighlightTemplate,
  GroupTitleTemplate,
  HighlightTemplate,
  ItemTemplate,
  UserTemplate,
  CustomRenderTemplate,
  LabelAnnotationTemplate,
  LevelTitleTemplate,
  LevelBackgroundTemplate
} from './templates';
import { TemplateConfig } from '../configs/template-config';

class LayoutOptions {
  autoSize: boolean = false;
  controlSize: Size = new Size();
  scale: number = 1;
  frameMousePanelRect: Rect = new Rect();
  framePlaceholderSize: Size = new Size();

  titlesMousePanelRect: Rect = new Rect();
  titlesPlaceholderSize: Size = new Size();

  scrollPanelRect: Rect = new Rect();
  mousePanelSize: Size = new Size();
  placeholderSize: Size = new Size();

  constructor(config: Partial<LayoutOptions> = {}) {
    Object.assign(this, config);
  }
}

class BaseDiagramState {
  config: any;
  viewportSize: Size = new Size(0, 0);
  contentPosition: Point = new Point(0, 0);
  centerOnCursor: boolean = true;
  highlightItem: number | string | null = null;
  cursorItem: number | string | null = null;
  selectedItems: Array<string|number> = [];
};

@Component({
  selector: 'base-diagram',
  templateUrl: './base-diagram.component.html',
  styleUrls: ['./base-diagram.component.css']
})
export class BaseDiagramComponent implements OnInit, AfterViewInit, OnDestroy {
 
  ngAfterViewInit(): void {
    var onSizeChanged =  this.onSizeChanged.bind(this);
    this.observer = new ResizeObserver(() => this.zone.run(() => onSizeChanged()));
    this.observer.observe(this.controlPanelRef!.nativeElement);

    this.fixPixelAlignment();
  }

  @ViewChild('frameMousePanelRef') frameMousePanelRef: ElementRef<HTMLDivElement> | undefined;  
  @ViewChild('framePlaceholderRef') framePlaceholderRef: ElementRef<HTMLDivElement> | undefined;  
  @ViewChild('titlesMousePanelRef') titlesMousePanelRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('titlesPlaceholderRef') titlesPlaceholderRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('scrollPanelRef') scrollPanelRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('mousePanelRef') mousePanelRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('placeholderRef') placeholderRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('calloutPlaceholderRef') calloutPlaceholderRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('controlPanelRef') controlPanelRef: ElementRef<HTMLDivElement> | undefined;
  
  @Input() centerOnCursor: boolean = true;

  _onHighlightChanging (event: Event, itemId: number | string | null, newItemId: number | string | null): any {};
  _onHighlightChanged (eventArgs: any) {};
  _onCursorChanging (event: Event, itemId: number | string | null, newItemId: number | string | null): any {};
  _onCursorChanged (eventArgs: any) {};
  _onSelectionChanging (event: Event, selectedItems: Array<string|number>, newSelectedItems: Array<string|number>): any {};
  _onSelectionChanged (eventArgs: any) {};

  private taskManagerFactory: TaskManagerFactory;
  private tasks: any;
  protected state: BaseDiagramState = new BaseDiagramState();
  private graphics: Graphics;
  private layoutOptions: LayoutOptions = new LayoutOptions();
  private timer: any | null = null;
  private observer: any;

  constructor(private host: ElementRef, private zone: NgZone, taskManagerFactory: TaskManagerFactory) { 
    this.taskManagerFactory = taskManagerFactory;
    this.graphics = new Graphics(new Size(0,0));

    var templates = {
      AnnotationLabelTemplate,
      ButtonsTemplate,
      CheckBoxTemplate,
      CursorTemplate,
      DotHighlightTemplate,
      GroupTitleTemplate,
      HighlightTemplate,
      ItemTemplate,
      UserTemplate,
      CustomRenderTemplate,
      LabelAnnotationTemplate,
      LevelTitleTemplate,
      LevelBackgroundTemplate
    }
    this.tasks = taskManagerFactory.factory(this.getOptions.bind(this), this.getGraphics.bind(this), this.getLayout.bind(this), this.setLayout.bind(this), templates);

    this.layoutOptions = new LayoutOptions();
  }

  onItemRender(data: any) {
    const { templateName } = data;
    const template = this.templatesHash[templateName];
    return template.itemTemplate;
  }

  onHighlightRender(data: any) {
    const { templateName } = data;
    const template = this.templatesHash[templateName];
    return template.highlightTemplate;
  }

  onCursorRender(data: any) {
    const { templateName } = data;
    const template = this.templatesHash[templateName];
    return template.cursorTemplate;
  }

  templatesHash: {[id: string]:TemplateConfig} = {};
  getOptions() {
    const { config } = this.state;
    const templates: Array<TemplateConfig> = config.templates || [];

    this.templatesHash = {};
    templates.forEach(template => {
      this.templatesHash[template.name!] = template;
    });

    const effectiveTemplates = templates.map(template => {
      const { buttonsTemplate } = template;
      return {
        ...template,
        onButtonsRender: !buttonsTemplate ? null : () => buttonsTemplate
      };
    });

    const { highlightItem, cursorItem, selectedItems } = this.state;
    return {
      ...config,
      templates: effectiveTemplates,
      highlightItem,
      cursorItem,
      selectedItems,
      onItemRender: this.onItemRender.bind(this),
      onCursorRender: this.onCursorRender.bind(this),
      onHighlightRender: this.onHighlightRender.bind(this),
      onGroupTitleRender: !config.groupTitleTemplate ? null : () => config.groupTitleTemplate,
      onLevelBackgroundRender: !config.levelBackgroundTemplate ? null : () => config.levelBackgroundTemplate,
      onLevelTitleRender: !config.levelTitleTemplate ? null : () => config.levelTitleTemplate,
      onButtonsRender: !config.buttonsTemplate ? null : () => config.buttonsTemplate
    };
  }

  getGraphics() {
    return this.graphics;
  }

  getLayout() {
    var centerOnCursor = this.state.centerOnCursor;
    var viewportSize = this.state.viewportSize;
    var contentPosition = this.state.contentPosition;
    // var { centerOnCursor, viewportSize, contentPosition } = this.state;
    return {
      forceCenterOnCursor: centerOnCursor,
      scrollPanelSize: new Size(viewportSize.width, viewportSize.height),
      placeholderOffset: new Point(contentPosition.x, contentPosition.y)
    }
  }

  setLayout(layoutOptions: any) {
    const { 
        autoSize, // resize control if true
        controlSize, // Sets control Size in auto scale mode
        scale, // scale is needed for scale transform CSS creation
        frameMousePanelRect,
        framePlaceholderSize, // the frame content size before CSS Scale Transform applied
        titlesMousePanelRect,
        titlesPlaceholderSize, // Titles size before CSS Scale Transform applied
        scrollPanelRect,
        mousePanelSize, // Content mouse panel size
        placeholderSize // Content size before CSS Scale Transform applied
    } = layoutOptions;

    this.layoutOptions = new LayoutOptions({
      autoSize,
      controlSize: new Size(controlSize.width, controlSize.height),
      scale,
      frameMousePanelRect: new Rect(frameMousePanelRect.x, frameMousePanelRect.y, frameMousePanelRect.width, frameMousePanelRect.height),
      framePlaceholderSize: new Size(framePlaceholderSize.width, framePlaceholderSize.height),

      titlesMousePanelRect: new Rect(titlesMousePanelRect.x, titlesMousePanelRect.y, titlesMousePanelRect.width, titlesMousePanelRect.height),
      titlesPlaceholderSize: new Size(titlesPlaceholderSize.width, titlesPlaceholderSize.height),

      scrollPanelRect: new Rect(scrollPanelRect.x, scrollPanelRect.y, scrollPanelRect.width, scrollPanelRect.height),
      mousePanelSize: new Size(mousePanelSize.width, mousePanelSize.height),
      placeholderSize: new Size(placeholderSize.width, placeholderSize.height)
    });
  }

  fixPixelAlignment() {
    const { nativeElement } = this.controlPanelRef!;
    var pixelAlignmentFix = getFixOfPixelAlignment(nativeElement);
    nativeElement.style.marginLeft = pixelAlignmentFix.width + "px";
    nativeElement.style.marginTop = pixelAlignmentFix.height + "px";
  }

  onSizeChanged() {
    const { width, height } = getInnerSize(this.controlPanelRef!.nativeElement)
    this.setState({
      viewportSize: new Size(width, height),
      centerOnCursor: true
    });
  }

  onScroll(event: Event) {
    if (this.timer == null) {
      this.timer = window.setTimeout(this.onRefreshViewport.bind(this), 100);
    }
  }

  onRefreshViewport() {
    window.clearTimeout(this.timer!);
    this.timer = null;

    const { scrollTop, scrollLeft } = this.scrollPanelRef!.nativeElement;
    this.setState({
      contentPosition: new Point(Math.floor(scrollLeft), Math.floor(scrollTop)),
      centerOnCursor: false
    });
  }

  onFrameMouseMove(event: MouseEvent) {const placeholderOffset = getElementOffset(this.frameMousePanelRef!.nativeElement),
      x = event.pageX - placeholderOffset.left,
      y = event.pageY - placeholderOffset.top,
      projectItemsToFrameTask = this.tasks.getTask("ProjectItemsToFrameTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask");

    if (highlightItemOptionTask.hasHighlightEnabled()) {
      const itemId = projectItemsToFrameTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius());
      this.setHighlightItem(event, itemId);
    }
  }

  onFrameClick(event: MouseEvent) {
    const placeholderOffset = getElementOffset(this.frameMousePanelRef!.nativeElement),
      x = event.pageX - placeholderOffset.left,
      y = event.pageY - placeholderOffset.top,
      projectItemsToFrameTask = this.tasks.getTask("ProjectItemsToFrameTask"),
      cursorItemOptionTask = this.tasks.getTask("CursorItemOptionTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask"),
      newCursorItemId = projectItemsToFrameTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius());
    if (newCursorItemId !== null) {
      if (cursorItemOptionTask.hasCursorEnabled()) {
        this.setCursorItem(event, newCursorItemId);
        this.controlPanelRef!.nativeElement.focus();
      }
    }
  }

  onMouseMove(event: MouseEvent) {
    const placeholderOffset = getElementOffset(this.mousePanelRef!.nativeElement),
      x = event.pageX - placeholderOffset.left,
      y = event.pageY - placeholderOffset.top,
      createTransformTask = this.tasks.getTask("CreateTransformTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask");

    if (highlightItemOptionTask.hasHighlightEnabled()) {
      const itemId = createTransformTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius());
      this.setHighlightItem(event, itemId);
    }
  }

  getEventArgs(oldTreeItemId: string | number | null, newTreeItemId: string | number | null, name: string | null = null) {
    var result: any = {},
      combinedContextsTask = this.tasks.getTask("CombinedContextsTask"),
      alignDiagramTask = this.tasks.getTask("AlignDiagramTask"),
      oldItemConfig = combinedContextsTask.getConfig(oldTreeItemId),
      newItemConfig = combinedContextsTask.getConfig(newTreeItemId),
      itemPosition,
      offset,
      panelOffset;

    if (oldItemConfig && oldItemConfig.id != null) {
      result.oldContext = oldItemConfig;
    }

    if (newItemConfig && newItemConfig.id != null) {
      result.context = newItemConfig;

      if (newItemConfig.parent !== null) {
        result.parentItem = combinedContextsTask.getConfig(newItemConfig.parent);
      }

      panelOffset = getElementOffset(this.mousePanelRef!.nativeElement);
      offset = getElementOffset(this.scrollPanelRef!.nativeElement);
      itemPosition = alignDiagramTask.getItemPosition(newTreeItemId);
      result.position = new Rect(itemPosition.actualPosition)
        .translate(panelOffset.left, panelOffset.top)
        .translate(-offset.left, -offset.top);
    }

    if (name != null) {
      result.name = name;
    }

    return result;
  }

  setHighlightItem(event: any, newHighlightItemId: string | number | null) {
    let eventArgs, cancel = false;
    const { highlightItem } = this.state;
    if (newHighlightItemId !== highlightItem) {
      eventArgs = this._onHighlightChanging(event, highlightItem, newHighlightItemId);
      if (!eventArgs.cancel) {
        this.setState({
          highlightItem: newHighlightItemId
        });
        this._onHighlightChanged(eventArgs);
      }
    }
  }

  setCursorItem(event: any, newCursorItemId: string | number | null) {
    let eventArgs, cancel = false;
    const { cursorItem } = this.state;
    if (newCursorItemId !== cursorItem) {
      eventArgs = this._onCursorChanging(event, cursorItem, newCursorItemId);
      if (!eventArgs.cancel) {
        this.setState({
          cursorItem: newCursorItemId,
          centerOnCursor: true
        });
        this._onCursorChanged(eventArgs);
      }
    }
  }

  onClick(event: MouseEvent) {
    var placeholderOffset = getElementOffset(this.mousePanelRef!.nativeElement),
      x = event.pageX - placeholderOffset.left,
      y = event.pageY - placeholderOffset.top,
      createTransformTask = this.tasks.getTask("CreateTransformTask"),
      cursorItemOptionTask = this.tasks.getTask("CursorItemOptionTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask"),
      newCursorItemId = createTransformTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius());
    var target: HTMLElement | null = event.target as HTMLElement;
    if (newCursorItemId !== null) {
      if (target.getAttribute("name") === "checkbox" || target.getAttribute("name") === "selectiontext") { //ignore jslint

      }
      else {
        if (cursorItemOptionTask.hasCursorEnabled()) {
          this.setCursorItem(event, newCursorItemId);
          this.controlPanelRef!.nativeElement.focus();
        }
      }
    }
  }

  onCheckboxChange(event: Event) {
    let { selectedItems } = this.state;
    let newSelectedItems = [];
    const target = event.target as HTMLInputElement;
    var itemId = target.getAttribute("data-id");
    const checked = target.checked
    let cancel = false;
    if (itemId != null) {
      if (checked) {
        newSelectedItems = [...selectedItems, itemId];
      }
      else {
        // eslint-disable-next-line
        newSelectedItems = selectedItems.filter(id => id != itemId); // User type may not mach string value in data attribute
      }
      var eventArgs = this._onSelectionChanging(event, selectedItems, newSelectedItems);
      if (!eventArgs.cancel) {
        this.setState({
          selectedItems: newSelectedItems
        })
        this._onSelectionChanged(eventArgs);
      }
    }
  }

  onKeyDown(event: KeyboardEvent) {
    var highlightItemTask = this.tasks.getTask("HighlightItemTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask"),
      cursorItemTask = this.tasks.getTask("CursorItemTask"),
      cursorItemOptionTask = this.tasks.getTask("CursorItemOptionTask"),
      alignDiagramTask = this.tasks.getTask('AlignDiagramTask'),
      createTransformTask = this.tasks.getTask('CreateTransformTask'),
      transform = createTransformTask.getTransform(),
      navigationItem = null,
      newNavigationItem,
      direction = null,
      accepted;

    if (highlightItemOptionTask.hasHighlightEnabled() && cursorItemOptionTask.hasCursorEnabled()) {
      navigationItem = highlightItemTask.getHighlightTreeItem();
      if (navigationItem === null) {
        navigationItem = cursorItemTask.getCursorTreeItem();
      }
    } else if (highlightItemOptionTask.hasHighlightEnabled()) {
      navigationItem = highlightItemTask.getHighlightTreeItem();
    } else if (cursorItemOptionTask.hasCursorEnabled()) {
      navigationItem = cursorItemTask.getCursorTreeItem();
    }


    if (navigationItem != null) {
      switch (event.which) {
        case 13: /*Enter*/
          if (cursorItemOptionTask.hasCursorEnabled()) {
            this.setCursorItem(event, navigationItem);
            event.preventDefault();
            this.controlPanelRef!.nativeElement.focus();
          }
          break;
        case 40: /*Down*/
          direction = OrientationType.Bottom;
          break;
        case 38: /*Up*/
          direction = OrientationType.Top;
          break;
        case 37: /*Left*/
          direction = OrientationType.Left;
          break;
        case 39: /*Right*/
          direction = OrientationType.Right;
          break;
        default:
          break;
      }

      if (direction != null) {

        accepted = false;

        while (!accepted) {
          accepted = true;

          direction = transform.getOrientation(direction);
          newNavigationItem = alignDiagramTask.getNextItem(navigationItem, direction);

          if (newNavigationItem != null) {
            event.preventDefault();
            if (highlightItemOptionTask.hasHighlightEnabled()) {
              this.setHighlightItem(event, newNavigationItem);
            } else if (cursorItemOptionTask.hasCursorEnabled()) {
              this.setCursorItem(event, newNavigationItem);
            }

          }
        }
        this.controlPanelRef!.nativeElement.focus();
      }
    }
  }

  setState(newState: Partial<BaseDiagramState> = {}) {
    this.state = {
      ...this.state,
      ...newState
    };
    this.render();
  }

  ngOnInit(): void {
    this.render();
  }

  render() {
    this.tasks.process('OptionsTask', null, false);

    const { 
      placeholder, 
      calloutplaceholder: calloutPlaceholder,
      frameplaceholder: framePlaceholder, 
      titlesplaceholder: titlesPlaceholder
    } = this.graphics.placeholders;

    this.placeholder = placeholder;
    this.titlesPlaceholder = titlesPlaceholder;
    this.framePlaceholder = framePlaceholder;
    this.calloutPlaceholder = calloutPlaceholder;

    const { 
      autoSize, // resize control if true
      controlSize, // Sets control Size in auto scale mode
      scale, // scale is needed for scale transform CSS creation
      frameMousePanelRect,
      titlesMousePanelRect,
      scrollPanelRect,
      mousePanelSize // Content mouse panel size
    } = this.layoutOptions;

    var scaleText = "scale(" + scale + "," + scale + ")";

    this.controlPanelStyle = autoSize ? controlSize.getCSS!() : {};
    this.frameMousePanelStyle = frameMousePanelRect.getCSS();

    if(framePlaceholder) {
    this.framePlaceholderStyle = {
        ...(framePlaceholder.rect!.getCSS()),
        "transform": scaleText,
        "msTransform": scaleText,
        "WebkitTransform": scaleText,
        "OTransform": scaleText,
        "MozTransform": scaleText
      };
    }
    this.titlesMousePanelStyle = {
      ...titlesMousePanelRect.getCSS()
    };

    
    if(titlesPlaceholder) {
      this.titlesPlaceholderStyle = {
        ...(titlesPlaceholder.rect.getCSS()),
        "transformOrigin": "0 0",
        "transform": scaleText,
        "msTransform": scaleText,
        "WebkitTransform": scaleText, 
        "OTransform": scaleText, 
        "MozTransform": scaleText
      };
    }

    this.scrollPanelStyle = {
      ...(scrollPanelRect.getCSS()),
      border: (scrollPanelRect.x > 0 ? "1px dotted #dddddd" : "")
    };

    this.mousePanelStyle = {
      ...(mousePanelSize.getCSS!())
    };

    this.placeholderStyle = {
      ...(placeholder.rect.getCSS()),
      "transform": scaleText,
      "msTransform": scaleText,
      "WebkitTransform": scaleText,
      "OTransform": scaleText,
      "MozTransform": scaleText 
    }
    if(calloutPlaceholder) {
      this.calloutPlaceholderStyle = {
        left: calloutPlaceholder.rect.x + "px",
        top: calloutPlaceholder.rect.y + "px"
      };
    }

    const { centerOnCursor } = this.state;
    if (centerOnCursor) {
      const centerOnCursorTask = this.tasks.getTask("CenterOnCursorTask");
      this.placeholderOffset = centerOnCursorTask.getPlaceholderOffset();
    }
  }

  /* Component template properties */

  placeholder: Placeholder | null = null;
  framePlaceholder: Placeholder | null = null;
  titlesPlaceholder: Placeholder | null = null;
  calloutPlaceholder: Placeholder | null = null;

  controlPanelStyle: Record<string, string | undefined | null> = {};
  frameMousePanelStyle: Record<string, string | undefined | null> = {};
  framePlaceholderStyle: Record<string, string | undefined | null> = {};
  titlesMousePanelStyle: Record<string, string | undefined | null> = {};
  titlesPlaceholderStyle: Record<string, string | undefined | null> = {};
  scrollPanelStyle: Record<string, string | undefined | null> = {};
  placeholderOffset: Point | undefined = undefined;
  mousePanelStyle: Record<string, string | undefined | null> = {};
  placeholderStyle: Record<string, string | undefined | null> = {};
  calloutPlaceholderStyle: Record<string, string | undefined | null> = {};

  ngOnDestroy() {
    // destroy timer
    if(this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    // destroy observer
    this.observer.disconnect();
  }
}
