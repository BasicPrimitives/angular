# First Organizational Chart for Angular 18

Basic Primitives Diagrams for Angular - data visualization component library that implements organizational chart and multi-parent dependency tree diagrams. It renders diagrams content using Angular Templates without direct DOM manipulations, so it is compliant with all Angular features

The recommended way to get familiar with our library is to clone our GitHub [angular](https://github.com/BasicPrimitives/angular) repository and run it locally. It contains simple, single-page examples.

Basic Primitives diagramming component library is implemented in JavaScript without dependencies on 3d party libraries and frameworks. It renders diagrams in browsers using SVG and HTML templates. By default, it provides a basic node template, which you can see in the following example. It serves only one purpose to make the first-time user experience as simple as possible. The software engineer is supposed to provide nodes structure with id, name, and parent id properties only, so it is enough to render the first diagram.

The control's API consists of options and collections of various diagram properties like items, annotations, etc. Similar configuration objects define nodes, annotations, templates, and other diagram elements.

Individual configuration objects must have unique ids. The control uses ids to define relations between visual elements in the diagram.

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

Add `<org-diagram></org-diagram>` component to the application template and define `items` collection to render

```
import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <div class="sample">
        <org-diagram 
            [items]="items"
            [pageFitMode]=PageFitMode.AutoSize
            [cursorItem]=0
            [hasSelectorCheckbox]=Enabled.True
            [centerOnCursor]=true>
        </org-diagram>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'First Organizational Chart';

  PageFitMode = PageFitMode;
  Enabled = Enabled;

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
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: 'James Smith',
      description: 'VP, Public Sector',
      image: this.photos.a
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: 'Ted Lucas',
      description: 'VP, Human Resources',
      image: this.photos.a
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: 'Fritz Stuger',
      description: 'Business Solutions, US',
      image: this.photos.a
    })
  ];
}
```

Start application

```Shell
ng serve
```

Clone our GitHub [angular](https://github.com/BasicPrimitives/angular) repository to see item templates and events handling samples.
