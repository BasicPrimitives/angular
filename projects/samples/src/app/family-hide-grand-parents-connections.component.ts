import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, HighlightPathAnnotationConfig, Colors, AnnotationType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-family-hide-grand-parents-connections',
  templateUrl: './family-hide-grand-parents-connections.component.html',
  styleUrls: ['./sample.css', './family-hide-grand-parents-connections.component.css']
})
export class FamilyHideGrandParentsConnectionsComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  hideGrandParentsConnectors = false;
  
  items = [
    new FamItemConfig({ id: 1, title: "Thomas Williams", label: "Thomas Williams", groupTitle: "Great Grand Parent", description: "Great Grand Parent", image: "/assets/photos/g.png" }),
    new FamItemConfig({ id: 2, parents: [1], title: "Mary Spencer", label: "Mary Spencer", description: "Spouse", image: "/assets/photos/s.png" }),
    new FamItemConfig({ id: 3, parents: [1], title: "David Kirby", label: "David Kirby", groupTitle: "Grand Parent", description: "Grand Parent", image: "/assets/photos/g.png" }),
    new FamItemConfig({ id: 4, parents: [1, 3], title: "Brad Williams", label: "Brad Williams", groupTitle: "Parent", description: "Parent", image: "/assets/photos/p.png" }),
    new FamItemConfig({ id: 5, parents: [1, 4], title: "Mike Kirby", groupTitle: "The node", label: "Mike Kirby", description: "Item connected to grand parents", image: "/assets/photos/c.png" }),
    new FamItemConfig({ id: 6, parents: [2, 5], title: "Lynette Maloney", label: "Lynette Maloney", description: "Grand Child", image: "/assets/photos/c.png" })

  ];

  annotations = [
    new HighlightPathAnnotationConfig({
      annotationType: AnnotationType.HighlightPath,
      items: [5, 1],
      color: Colors.Red,
      lineWidth: 2,
      opacity: 1,
      showArrows: true
    })
  ];
}
