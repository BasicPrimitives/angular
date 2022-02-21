import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, AnnotationType } from 'ngx-basic-primitives';
import { LabelAnnotationConfig } from 'projects/ngx-basic-primitives/src/public-api';

@Component({
  selector: 'app-labels-cascades-in-family-chart',
  templateUrl: './labels-cascades-in-family-chart.component.html',
  styleUrls: ['./sample.css']
})
export class LabelsCascadesInFamilyChartComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items: Array<FamItemConfig> = [
    new FamItemConfig({ id: 1, parents: [2], title: "Thomas Williams", label: "Thomas Williams", description: "1, 1st husband", image: "./assets/photos/t.png" }),
    new FamItemConfig({ id: 2, parents: [2], title: "Mary Spencer", label: "Mary Spencer", description: "2, The Mary", image: "./assets/photos/m.png" }),
    new FamItemConfig({ id: 3, parents: [2], title: "David Kirby", label: "David Kirby", description: "3, 2nd Husband", image: "./assets/photos/d.png" }),
    new FamItemConfig({ id: 4, parents: [2], title: "Brad Williams", label: "Brad Williams", description: "4, 1st son", image: "./assets/photos/b.png" }),
    new FamItemConfig({ id: 5, parents: [2], title: "Mike Kirby", label: "Mike Kirby", description: "5, 2nd son, having 2 spouses", image: "./assets/photos/m.png" })
  ];

  annotations = [
    new LabelAnnotationConfig({
      annotationType: AnnotationType.Label,
      fromItem: 2,
      toItems: [1, 3, 4, 5],
      title: "100%"
    }),
    new LabelAnnotationConfig({
      annotationType: AnnotationType.Label,
      fromItem: 2,
      toItems: [1, 3, 4],
      title: "60%"
    }),
    new LabelAnnotationConfig({
      annotationType: AnnotationType.Label,
      fromItem: 2,
      toItems: [5],
      title: "40%"
    }),
    new LabelAnnotationConfig({
      annotationType: AnnotationType.Label,
      fromItem: 2,
      toItems: [1, 3],
      title: "20%"
    }),
    new LabelAnnotationConfig({
      annotationType: AnnotationType.Label,
      fromItem: 2,
      toItems: [4],
      title: "80%"
    }),
    new LabelAnnotationConfig({
      annotationType: AnnotationType.Label,
      fromItem: 2,
      toItems: [1],
      title: "35%"
    }),
    new LabelAnnotationConfig({
      annotationType: AnnotationType.Label,
      fromItem: 2,
      toItems: [3],
      title: "65%"
    })
  ];
}
