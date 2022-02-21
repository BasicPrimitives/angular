import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, AnnotationType } from 'ngx-basic-primitives';
import { ConnectorAnnotationConfig, LabelAnnotationConfig } from 'projects/ngx-basic-primitives/src/public-api';

@Component({
  selector: 'app-loops-in-family-chart',
  templateUrl: './loops-in-family-chart.component.html',
  styleUrls: ['./sample.css']
})
export class LoopsInFamilyChartComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  annotations = [
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [3], title: "10%" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [5], title: "30%" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [6], title: "50%" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [7], title: "10%" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [3, 5], title: "40%" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [3, 5, 6, 7], title: "100%" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 2, toItems: [1], title: "100%" })
  ];

  items = [
    new FamItemConfig({ id: 1, parents: [3, 5, 6, 7], title: "James", label: "James", description: "James is First and he is child of Brad, Sara & Lynette", image: "./assets/photos/j.png" }),
    new FamItemConfig({ id: 2, parents: [1], title: "Brad", label: "Brad", description: "", image: "./assets/photos/b.png" }),
    new FamItemConfig({ id: 3, parents: [2], title: "Thomas", label: "Thomas", description: "", image: "./assets/photos/t.png" }),
    new FamItemConfig({ id: 4, parents: [3], title: "David", label: "David", description: "", image: "./assets/photos/d.png" }),
    new FamItemConfig({ id: 5, parents: [4], title: "Lynette", label: "Lynette", description: "", image: "./assets/photos/l.png" }),
    new FamItemConfig({ id: 6, parents: [4], title: "Sara", label: "Sara", description: "", image: "./assets/photos/s.png" }),
    new FamItemConfig({ id: 7, title: "Parent", label: "Parent", description: "Parent node of James", image: "./assets/photos/j.png" })
  ];
}
