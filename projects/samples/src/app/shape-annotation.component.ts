import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, GroupByType, ShapeAnnotationConfig, BackgroundAnnotationConfig, AnnotationType, Thickness, LineType, Size, PlacementType, ShapeType, Colors } from 'ngx-basic-primitives';

@Component({
  selector: 'app-shape-annotation',
  templateUrl: './shape-annotation.component.html',
  styleUrls: ['./sample.css']
})
export class ShapeAnnotationComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items = [
    new OrgItemConfig({ id: 0, parent: null, title: "James Smith", description: "VP, Public Sector", image: "./assets/photos/a.png" }),
    new OrgItemConfig({ id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: "./assets/photos/b.png" }),
    new OrgItemConfig({ id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: "./assets/photos/c.png" }),
    new OrgItemConfig({ id: 3, parent: 0, title: "Mike Wazowski", description: "Business Analyst, Canada", image: "./assets/photos/o.png" }),
    new OrgItemConfig({ id: 4, parent: 3, title: "Best Friend", description: "Business Analyst, Mexico", image: "./assets/photos/f.png" })
  ];
  
  annotations = [
    new ShapeAnnotationConfig({
      annotationType: AnnotationType.Shape,
      items: [0],
      label: "1",
      labelSize: new Size(100, 30),
      labelPlacement: PlacementType.Right,
      shapeType: ShapeType.Oval,
      borderColor: Colors.Green,
      offset: new Thickness(2, 2, 2, 2),
      lineWidth: 2,
      selectItems: true,
      lineType: LineType.Dashed
    }),
    new ShapeAnnotationConfig({
      annotationType: AnnotationType.Shape,
      items: [2, 3],
      label: "2",
      labelSize: { width: 100, height: 30 },
      labelPlacement: PlacementType.Right,
      shapeType: ShapeType.CrossOut,
      borderColor: Colors.Navy,
      offset: { left: 2, top: 2, right: 2, bottom: 2 },
      lineWidth: 2,
      selectItems: true,
      lineType: LineType.Dashed
    }),
    new ShapeAnnotationConfig({
      items: [1],
      label: "3",
      labelSize: new Size(100, 30),
      labelPlacement: PlacementType.Bottom,
      shapeType: ShapeType.Triangle,
      borderColor: Colors.Red,
      offset: new Thickness(2, 2, 2, 2),
      lineWidth: 2,
      selectItems: true,
      lineType: LineType.Dashed
    }),
    new BackgroundAnnotationConfig({
      items: [2, 3],
      borderColor: "#f8e5f9",
      fillColor: "#e5f9f8",
      lineWidth: 2,
      selectItems: true,
      includeChildren: true,
      lineType: LineType.Dotted,
      offset: new Thickness(20, 20, 20, 20)
    })
  ];
}
