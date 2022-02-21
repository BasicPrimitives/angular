import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode, LineType, GroupByType, Colors, AnnotationType, HighlightPathAnnotationConfig } from 'ngx-basic-primitives';

@Component({
  selector: 'app-highlight-path-annotation',
  templateUrl: './highlight-path-annotation.component.html',
  styleUrls: ['./sample.css']
})
export class HighlightPathAnnotationComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  LineType = LineType;
  GroupByType = GroupByType;
  
  items = [
    new OrgItemConfig({ id: 0, parent: null, title: "James Smith", description: "VP, Public Sector", image: "/assets/photos/a.png" }),
    new OrgItemConfig({ id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: "/assets/photos/b.png" }),
    new OrgItemConfig({ id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: "/assets/photos/c.png" }),
    new OrgItemConfig({ id: 3, parent: 0, title: "Mike Wazowski", description: "Business Analyst, Canada", image: "/assets/photos/o.png" }),
    new OrgItemConfig({ id: 4, parent: 3, title: "Edward Smith", description: "Field Engineer", image: "/assets/photos/s.png" }),
    new OrgItemConfig({ id: 5, parent: 1, title: "Doug Parker", description: "Field Engineer", image: "/assets/photos/p.png" })
  ];

  annotations = [
    new HighlightPathAnnotationConfig({
      annotationType: AnnotationType.HighlightPath,
      items: [5, 0],
      color: Colors.Navy,
      lineWidth: 12,
      opacity: 0.3,
      showArrows: false
    }),
    new HighlightPathAnnotationConfig({
      annotationType: AnnotationType.HighlightPath,
      items: [4, 0],
      color: Colors.Red,
      lineWidth: 2,
      opacity: 1,
      showArrows: true
    })
  ];
}
