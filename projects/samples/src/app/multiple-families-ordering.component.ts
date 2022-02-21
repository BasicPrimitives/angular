import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, AnnotationType, AdviserPlacementType, ConnectorShapeType, LineType, ConnectorPlacementType, Colors, Size } from 'ngx-basic-primitives';
import { ConnectorAnnotationConfig } from 'projects/ngx-basic-primitives/src/public-api';

@Component({
  selector: 'app-multiple-families-ordering',
  templateUrl: './multiple-families-ordering.component.html',
  styleUrls: ['./sample.css']
})
export class MultipleFamiliesOrderingComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items = [
    new FamItemConfig({ id: 1, title: "David Dalton", groupTitle: "Family 1", label: "David Dalton", description: "1, Chief Executive Officer (CEO)", image: "./assets/photos/q.png", itemTitleColor: "#4169e1" }),
    new FamItemConfig({ id: 2, relativeItem: 1, placementType: AdviserPlacementType.Right, position: 1, title: "Steven Lacombe", label: "Steven Lacombe", description: "2, GM, Platform Strategy", image: "./assets/photos/a.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 3, parents: [1, 2], title: "Nancy Smith", label: "Nancy Smith", description: "3, GM, Strategic Marketing and Communications", image: "./assets/photos/s.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 4, parents: [3], title: "Ann Smith", label: "Nancy Smith", description: "4, GM, Strategic Marketing and Communications", image: "./assets/photos/s.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 5, parents: [3], title: "Ella Smith", label: "Nancy Smith", description: "5, GM, Strategic Marketing and Communications", image: "./assets/photos/s.png", itemTitleColor: "#4b0082" }),

    new FamItemConfig({ id: 10, relativeItem: 1, placementType: AdviserPlacementType.Right, position: 1, title: "David Dalton", groupTitle: "Family 2", label: "David Dalton", description: "Chief Executive Officer (CEO)", image: "./assets/photos/q.png", itemTitleColor: "#4169e1" }),
    new FamItemConfig({ id: 20, relativeItem: 10, placementType: AdviserPlacementType.Right, position: 1, title: "Steven Lacombe", label: "Steven Lacombe", description: "GM, Platform Strategy", image: "./assets/photos/a.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 30, parents: [10, 20], title: "Nancy Smith", label: "Nancy Smith", description: "GM, Strategic Marketing and Communications", image: "./assets/photos/s.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 40, parents: [30], title: "Ann Smith", label: "Nancy Smith", description: "GM, Strategic Marketing and Communications", image: "./assets/photos/s.png", itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 50, parents: [30], title: "Ella Smith", label: "Nancy Smith", description: "GM, Strategic Marketing and Communications", image: "./assets/photos/s.png", itemTitleColor: "#4b0082" })
  ];

  annotations = [
    new ConnectorAnnotationConfig({
      annotationType: AnnotationType.Connector,
      fromItem: 3,
      toItem: 30,
      label: "3",
      size: new Size(40, 20),
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Red,
      offset: 0,
      lineWidth: 2,
      lineType: LineType.Dashed,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      selectItems: false
    })
  ]
}
