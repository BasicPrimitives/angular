import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatLegacyRadioChange as MatRadioChange } from '@angular/material/legacy-radio';
import { OrgItemConfig, Enabled, PageFitMode, ConnectorPlacementType, ConnectorAnnotationConfig, Size, AnnotationType, ConnectorShapeType, Colors, LineType, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-connector-annotation',
  templateUrl: './connector-annotation.component.html',
  styleUrls: ['./sample.css']
})
export class ConnectorAnnotationComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;
  ConnectorPlacementType = ConnectorPlacementType;

  connectorPlacementType = ConnectorPlacementType.Offbeat;
  items = [
    new OrgItemConfig({ id: 0, parent: null, title: "James Smith", description: "VP, Public Sector", image: "./assets/photos/a.png" }),
    new OrgItemConfig({ id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: "./assets/photos/b.png" }),
    new OrgItemConfig({ id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: "./assets/photos/c.png" }),
    new OrgItemConfig({ id: 3, parent: 0, title: "Joseph Gipson", description: "President, Entertainment & Devices Devision", image: "./assets/photos/d.png" })
  ];

  annotations = [
    new ConnectorAnnotationConfig({
      annotationType: AnnotationType.Connector,
      fromItem: 0,
      toItem: 2,
      label: "2",
      size: new Size(80, 30),
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Green,
      offset: 0,
      lineWidth: 2,
      lineType: LineType.Dashed,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      selectItems: false
    }),
    new ConnectorAnnotationConfig({
      annotationType: AnnotationType.Connector,
      fromItem: 0,
      toItem: 1,
      label: "1",
      size: new Size(80, 30),
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Red,
      offset: 0,
      lineWidth: 2,
      lineType: LineType.Dashed,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      selectItems: false
    }),
    new ConnectorAnnotationConfig({
      annotationType: AnnotationType.Connector,
      fromItem: 0,
      toItem: 3,
      label: "3",
      size: new Size(80, 30),
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Blue,
      offset: 0,
      lineWidth: 2,
      lineType: LineType.Dashed,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      selectItems: false
    })
  ]

  onChange(event: MatRadioChange) {
    this.annotations = this.annotations.map(annotation => {
      return new ConnectorAnnotationConfig({
        ...annotation,
        connectorPlacementType: this.connectorPlacementType
      });
    })
  }
}
