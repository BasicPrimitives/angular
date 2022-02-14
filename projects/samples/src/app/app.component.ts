import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

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
      { name: 'Adding New Items To Chart at Runtime', path: 'addingnewitemstochartatruntime'}
    ],
  },
  {
    name: 'User Interface Events & Options',
    children: [
      { name: 'Selecting Cursor Item', path: 'selectingcursoritem' },
      { name: 'Selecting Highlight Item', path: 'selectinghighlightitem' },
    ],
  },
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

  constructor() {
    this.dataSource.data = TREE_DATA;
    this.showFiller = true;
  }

  hasChild = (_: number, node: SampleFlatNode) => node.expandable;
}
