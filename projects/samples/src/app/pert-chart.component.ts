import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, LineType, OrientationType, HighlightPathAnnotationConfig, AnnotationType, Colors, ZOrderType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-pert-chart',
  templateUrl: './pert-chart.component.html',
  styleUrls: ['./sample.css', './pert-chart.component.css']
})
export class PertChartComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;
  LineType = LineType;
  OrientationType = OrientationType;

  items = [
    new FamItemConfig({ id: 1, title: "Design", label: "Design", context: { et: 80, lt: 100 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 2, parents: [1], title: "Aerodynamics", label: "Aerodynamics", context: { et: 30, lt: 45 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 3, parents: [1], title: "Structure", label: "Structure", context: { et: 35, lt: 55 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 4, parents: [2], title: "Propulsion", label: "Propulsion", context: { et: 50, lt: 65 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 5, parents: [3], title: "Control & Stability", label: "Control & Stability", context: { et: 40, lt: 50 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 6, parents: [1, 4, 5], title: "Build & Test Model", label: "Build & Test Model", context: { et: 50, lt: 70 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 7, parents: [6], title: "Computation", label: "Computation", context: { et: 20, lt: 30 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 8, parents: [6], title: "Wind Tunnel", label: "Wind Tunnel", context: { et: 20, lt: 30 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 9, parents: [7, 8], title: "Review", label: "Review", context: { et: 45, lt: 55 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 10, parents: [6, 9], title: "Build Prototype", label: "Build Prototype", context: { et: 60, lt: 80 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 11, parents: [9], title: "Research flights", label: "Research flights",context: { et: 50, lt: 60 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 12, parents: [10], title: "Finalize", label: "Finalize", context: { et: 20, lt: 30 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 13, parents: [7], title: "Flight Simulation", label: "Flight Simulation", context: { et: 30, lt: 45 }, itemTitleColor: "#4b0082" }),
    new FamItemConfig({ id: 14, parents: [13], title: "Revise & Review", label: "Revise & Review", context: { et: 45, lt: 55 }, itemTitleColor: "#4b0082" })
  ];

  annotations = [
    new HighlightPathAnnotationConfig({
      annotationType: AnnotationType.HighlightPath,
      items: [1, 3, 5, 6, 8, 9, 10, 12],
      color: Colors.Red,
      lineWidth: 2,
      zOrderType: ZOrderType.Foreground,
      opacity: 0.5
    })
  ]
}
