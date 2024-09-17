# First Family Chart for Angular 18

Basic Primitives Diagrams for Angular - data visualization component library that implements organizational chart and multi-parent dependency tree diagrams. It renders diagrams content using Angular Templates without direct DOM manipulations, so it is compliant with all Angular features

The recommended way to get familiar with our library is to clone our GitHub [angular](https://github.com/BasicPrimitives/angular) repository and run it locally. It contains simple, single-page examples.

Basic Primitives diagramming component library is implemented in JavaScript without dependencies on 3d party libraries and frameworks. It renders diagrams in browsers using SVG and HTML templates. By default, it provides a basic node template, which you can see in the following example. It serves only one purpose to make the first-time user experience as simple as possible. The software engineer is supposed to provide nodes structure with id, name, and parent id properties only, so it is enough to render the first diagram.

The control's API consists of options and collections of various diagram properties like items, annotations, etc. Similar configuration objects define nodes, annotations, templates, and other diagram elements.

Individual configuration objects must have unique ids. The control uses ids to define relations between visual elements in the diagram.

## Organizational chart vs. Family Diagram
The Family diagram is a layered dependencies visualization component, supporting multiple parents and loops in nodes relations. 
The family diagram shares a lot of features with the organizational chart diagram. See the organizational chart specific samples:
* First Organizational Chart - describes how to create, update and destroy controls.
* Adding new items at run-time - explains how to modify diagram items collection.
* Placement and auto-sizing - shows how to resize diagram on page resize
* Etc.

The main difference of the family diagram compared to the organizational chart is the support of multiple parents. The organizational chart uses a regular tree structure of items, where every item has a reference to the single logical parent. Every branch of the tree structure is independent, so it is possible to place children in custom locations relative to their parents and group children into various formations. 

Now, let's look at the family diagram where every item may belong to multiple parents. There is no such thing as a single parent anymore, so it is impossible to define child placement relative to its numerous parents. So the organizational chart is a simple tree structure enhanced with layout customizations. If your data is a tree structure, we recommend staying within the Organizational chart API functionality as long as possible. Your chart structure is going to be simple to understand for end-users. The organizational chart provides limited multiple parent's support with partner item types. It provides on-screen annotations to show non-hierarchical relations between nodes of your tree. It supports numerous root items to place multiple organizational charts side by side, so you can define relations between several hierarchies within a single diagram or display broken tree structure having missing parent references. 

It would be best if you considered using the family diagram API in cases where the node's parents are equal in value when there is no significant difference in which parent of your node has higher priority.  So the Family diagram supports multiple parents, but it lacks usage of custom item types. The family diagram can shape a group of nodes having a shared set of parents and children into the matrix formation. Still, you cannot specify the children's layout for the specific parent.

The family diagram provides some features specific to multi-parent layout, not available in the organizational chart. For example, it supports in-layout cascades of labels over connections between parents and children. 

You can guide the family diagram control on how to order nodes in layout relative to each other. You can define the preferred parent node when it is impossible to place the node equally close to its parents. This layout hints help you define logical relations between nodes of the family diagram, so it does not change layout dramatically every time we add a new node into it. 

The following is the copy-paste of the "First Organization Chart" sample, but for the family diagram. See the organizational chart sample for more technical details.


## Adding library from NPM repository:

```Shell
ng add ngx-basic-primitives
i Using package manager: npm
√ Found compatible package version: ngx-basic-primitives@6.5.1.
√ Package information loaded.

The package ngx-basic-primitives@6.5.1 will be installed and executed.
Would you like to proceed? Yes
√ Package successfully installed.
The package that you are trying to add does not support schematics. You can try using a different version of the package or contact the package author to add ng-add support.
```

Add `BasicPrimitivesModule` to the application's `src/app/app.module.ts`

```TypeScript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicPrimitivesModule } from 'ngx-basic-primitives';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicPrimitivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Add `<fam-diagram></fam-diagram>` component to the application template and define `items` collection to render

```
import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <div class="sample">
        <fam-diagram 
            [items]="items"
            [pageFitMode]=PageFitMode.AutoSize
            [cursorItem]=2
            [linesWidth]=1
            [arrowsDirection]=GroupByType.Parents
            [showExtraArrows]=true
            [linesColor]="'black'"
            [normalLevelShift]=20
            [dotLevelShift]=20
            [lineLevelShift]=20
            [normalItemsInterval]=10
            [dotItemsInterval]=30
            [lineItemsInterval]=30
            [hasSelectorCheckbox]=Enabled.True
            [centerOnCursor]=true>
        </fam-diagram>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'First Family Chart';

  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  photos = {
    a: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARn' + 
    'QU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxIC' + 
    'RTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dh' + 
    'ls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0e' + 
    'ut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+' + 
    '0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr6' + 
    '5tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxt' + 
    'iPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII='
  };

  items = [
    new FamItemConfig({ id: 1, title: "Thomas Williams", label: "Thomas Williams", description: "1st husband", image: this.photos.a }),
    new FamItemConfig({ id: 2, title: "Mary Spencer", label: "Mary Spencer", description: "The Mary",image: this.photos.a }),
    new FamItemConfig({ id: 3, title: "David Kirby", label: "David Kirby", description: "2nd Husband", image: this.photos.a }),
    new FamItemConfig({ id: 4, parents: [1, 2], title: "Brad Williams", label: "Brad Williams", description: "1st son", image: this.photos.a }),
    new FamItemConfig({ id: 5, parents: [2, 3], title: "Mike Kirby", label: "Mike Kirby", description: "2nd son, having 2 spouses", image: this.photos.a}),
    new FamItemConfig({ id: 6, title: "Lynette Maloney", label: "Lynette Maloney", description: "Spouse I", image: this.photos.a }),
    new FamItemConfig({ id: 11, parents: [5, 6], title: "Steven Powell", label: "Steven Powell", description: "1st son", image: this.photos.a }),
    new FamItemConfig({ id: 7, title: "Sara Kemp", label: "Sara Kemp", description: "Spouse II", image: this.photos.a }),
    new FamItemConfig({ id: 12, parents: [5, 7], title: "John Smith", label: "John Smith", description: "2ns son", image: this.photos.a }),
    new FamItemConfig({ id: 8, parents: [7], title: "Leon Kemp", label: "Leon Kemp", description: "", image: this.photos.a })
  ];
}

```

Start application

```Shell
ng serve
```

Clone our GitHub [angular](https://github.com/BasicPrimitives/angular) repository to see item templates and events handling samples.
