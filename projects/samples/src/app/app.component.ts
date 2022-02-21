import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import libInfo from '../../../ngx-basic-primitives/package.json';

interface SampleNode {
  name: string;
  path?: string;
  children?: SampleNode[];
}

const TREE_DATA: SampleNode[] = [
  {
    name: 'Create & Update Use Cases',
    children: [
      { name: 'First Organizational Chart', path: 'firstorganizationalchart'}, 
      { name: 'First Family Chart', path: 'firstfamilychart'}, 
      { name: 'Adding New Items To Chart at Runtime', path: 'addingnewitemstochartatruntime'},
      { name: 'Page Size Organizational Chart', path: 'pagesizeorganizationalchart'},
      { name: 'Auto size diagram in article', path: 'autosize'}
    ]
  },
  {
    name: 'User Interface Events & Options',
    children: [
      { name: 'Selecting Cursor Item', path: 'selectingcursoritem' },
      { name: 'Selecting Highlight Item', path: 'selectinghighlightitem' },
      { name: 'Selected items & Check boxes', path: 'selectingitems' },
      { name: 'Show Frame', path: 'showframe' },
      { name: 'Buttons Panel', path: 'buttonspanel' },
      { name: 'Group Title', path: 'grouptitle'},
      { name: 'Group Title Template', path: 'grouptitletemplate'},
      { name: 'Labels', path: 'labels'}
    ]
  },
  {
    name: "Organizational Chart Layout Options",
    children: [
      { name: "Children Placement", path: "childrenplacementtype" },
      { name: "Cross-Branch Alignment", path: "crossbranchalignment" },
      { name: "Children & Assistants Levels", path: "childrenandassistantsleveloffset" },
      { name: "Adviser and Assistant item types", path: "adviserandassistantitemtypes" },
      { name: "Sub Advisers and Assistants", path: "subadviserandsubassistantitemtypes" },
      { name: "General Partner item type", path: "generalpartneritemtype" },
      { name: "Limited Partner item type", path: "limitedpartneritemtype" },
      { name: "Adviser Partner item type", path: "adviserpartneritemtype" },
      { name: "Multiple root items in chart", path: "multiplerootitemsinchart" },
      { name: "Matrix layout of multiple root items", path: "matrixlayoutofmultiplerootitemsinchart" },
      { name: "Selection path mode", path: "selectionpathmode" },
      { name: "Inactive Items in layout", path: "inactiveitems" },
      { name: "Custom layout with invisible items", path: "customlayoutwithinvisibleitems" },
      { name: "Assistants Children Placement", path: "placeassistantsabovechildren" },
      { name: "Advisers Children Placement", path: "placeadvisersabovechildren" },
      { name: "Skip levels", path: "skippedlevels" }
    ]
  },
  {
    name: "Family Diagram Layout Use Cases",
    children: [
      { name: "Inactive Family Items in layout", path: "inactivefamilyitems" },
      { name: "Matrix Nodes layout", path: "matrixlayoutinfamilychart" },
      { name: "Matrix Groups", path: "matrixgroupsinfamilychart" },
      { name: "Labels cascades over connection lines", path: "labelscascadesinfamilychart" },
      { name: "Labels over matrix shaped nodes connection lines", path: "labelsnmatrixinfamilychart" },
      { name: "Nodes ordering", path: "familychartitemsordering" },
      { name: "Families ordering", path: "multiplefamiliesordering" },
      { name: "Primary Parent", path: "familychartprimaryparent" },
      { name: "Loops Layout Mode", path: "loopsinfamilychart" },
      { name: "Selection path mode", path: "selectionpathmodeinfamilychart" }
    ]
  },
  {
    name: "Item Template Use Cases",
    children: [
      { name: "Item template", path: "itemtemplate" },
      { name: "Zoom using item template", path: "zoomwithitemtemplate" },
      { name: "Zoom using CSS Scale Transform", path: "zoomwithcssscaletransform" },
      { name: "Labels & Item Template", path: "itemtemplatelabel" },
      { name: "Selection Checkbox Inside Item Template", path: "selectioncheckboxinitemtemplate" },
      { name: "Cursor Template", path: "cursortemplate" },
      { name: "Highlight template", path: "highlighttemplate" }
    ]
  },
  {
    name: "Annotations",
    children: [
      { name: "On-screen Connector Annotation", path: "connectorannotation" },
      { name: "Shape & Background Annotations", path: "shapeannotation" },
      { name: "Level Annotation", path: "levelannotation" },
      { name: "Level Annotation - Custom template", path: "levelannotationtemplate" },
      { name: "Highlight Path Annotation", path: "highlightpathannotation" },
      { name: "PERT Chart & Critical Path Visualization", path: "pertchart" },
      { name: "Routing hidden grand parents connections", path: "familyhidegrandparentsconnections" }
    ]
  }
];

interface SampleFlatNode {
  expandable: boolean;
  name: string;
  path: string | undefined;
  level: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'samples';
  showFiller = true;

  private _transformer = (node: SampleNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<SampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  version: string = libInfo.version;

  constructor() {
    this.dataSource.data = TREE_DATA;
    this.showFiller = true;
  }

  hasChild = (_: number, node: SampleFlatNode) => node.expandable;
}
