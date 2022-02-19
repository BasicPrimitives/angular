import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, ShapeType, Colors } from 'basic-primitives';

@Component({
  selector: 'app-show-frame',
  templateUrl: './show-frame.component.html',
  styleUrls: ['./sample.css']
})
export class ShowFrameComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;


  items: Array<OrgItemConfig> = [];
  selectedItems: Array<number> = [];

  minimizedItemShapeTypes = [
    ShapeType.Rectangle,
    ShapeType.Oval,
    ShapeType.Triangle,
    ShapeType.CrossOut,
    ShapeType.Circle,
    ShapeType.Rhombus,
    ShapeType.Wedge,
    ShapeType.FramedOval,
    ShapeType.FramedTriangle,
    ShapeType.FramedWedge,
    ShapeType.FramedRhombus
  ];

  shapeIndex = 0;

  itemTitleColors = [
    Colors.Red,
    Colors.Green,
    Colors.Navy,
    Colors.Cyan
  ];
  
  colorIndex = 0;

  constructor() {
    /* create some items */
    const rootItem = new OrgItemConfig({
      id: 0,
      parent: null,
      title: "Title 0",
      description: "Description",
      image: "/assets/photos/a.png",
      minimizedItemShapeType: (this.getNextShapeType()),
      itemTitleColor: (this.getNextColor())
    });
    var levelItems = [rootItem],
      items = [rootItem],
      id = 1;
    for(var levelIndex  = 0; levelIndex < 4; levelIndex+=1) {
      var newLevelItems = [];
      for(var index = 0; index < levelItems.length; index+=1) {
        var parent = levelItems[index];
        for (var index2 = 0; index2 < 2; index2++) {
          var newItem = new OrgItemConfig({
            id: ++id,
            parent: parent.id,
            title: id.toString() + " Title",
            description: id.toString() + " Description",
            image: "/assets/photos/b.png",
            minimizedItemShapeType: (this.getNextShapeType()),
            itemTitleColor: (this.getNextColor())
          });
          items.push(newItem);
          newLevelItems.push(newItem);
        }
      }
      levelItems = newLevelItems;
    }

    /* collect all ids */
    const selectedItems: Array<number> = [];
    for(index = 0; index < items.length; index+=1) {
      selectedItems.push(items[index].id as number);
    };


    this.items = items;
    this.selectedItems = selectedItems;
  }

  getNextShapeType() {
    var result = this.minimizedItemShapeTypes[this.shapeIndex];
    this.shapeIndex+=1;
    if(this.shapeIndex === this.minimizedItemShapeTypes.length) {
      this.shapeIndex = 0;
    }
    return result;
  }

  getNextColor() {
    var result = this.itemTitleColors[this.colorIndex];
    this.colorIndex+=1;
    if(this.colorIndex === this.itemTitleColors.length) {
      this.colorIndex = 0;
    }
    return result;
  }
}
