import { Component, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { OrgConfig, OrgItemConfig, Enabled, PageFitMode } from 'basic-primitives';
// @ts-ignore
import { LCA, Tree } from 'basicprimitives';

@Component({
  selector: 'app-adding-new-items-to-chart-at-runtime',
  templateUrl: './adding-new-items-to-chart-at-runtime.component.html',
  styleUrls: ['./sample.css']
})
export class AddingNewItemsToChartAtRuntimeComponent implements AfterViewInit {
  @ViewChild('buttonsTemplate') buttonsTemplateRef: TemplateRef<any> | undefined;  

  config: OrgConfig = new OrgConfig();
  index: number = 0;

  ngAfterViewInit() {
    this.config = new OrgConfig({
      pageFitMode: PageFitMode.None,
      hasSelectorCheckbox: Enabled.True,
      hasButtons: Enabled.True,
      buttonsPanelSize: 40,
      cursorItem: 0,
      highlightItem: 0,

      items: [
        new OrgItemConfig({
          id: 0,
          parent: null,
          title: 'James Smith',
          description: 'VP, Public Sector',
          image: '/assets/photos/a.png'
        }),
        new OrgItemConfig({
          id: 1,
          parent: 0,
          title: 'Ted Lucas',
          description: 'VP, Human Resources',
          image: '/assets/photos/b.png'
        }),
        new OrgItemConfig({
          id: 2,
          parent: 0,
          title: 'Fritz Stuger',
          description: 'Business Solutions, US',
          image: '/assets/photos/c.png'
        }),
        new OrgItemConfig({
          id: 3,
          parent: 0,
          title: "Lynne Rathinam",
          description: "GM, Enterprise Services",
          image: "/assets/photos/d.png"
        })
      ],
      buttonsTemplate: this.buttonsTemplateRef
    });

    this.index = this.config.items.length;
  }

  onAddButtonClick(itemConfig: OrgItemConfig) {
    const { items } = this.config;

    var newItem = new OrgItemConfig({
      id: this.index++,
      parent: itemConfig.id,
      title: "New Title",
      description: "New Description",
      image: "/assets/photos/z.png"
    });

    this.config = new OrgConfig({
      ...this.config,
      items: [...items, newItem],
      cursorItem: newItem.id
    });
  }

  onRemoveButtonClick(itemConfig: OrgItemConfig) {
    const { items } = this.config;
    this.config = new OrgConfig({
      ...this.config,
      ...(this.getDeletedItems(items, [ itemConfig.id as number]))
    });
  }

  getDeletedItems(items: Array<OrgItemConfig> = [], deletedItems: Array<number> = []) {
    const tree = this.getTree(items);
    const hash: {[id: number]:boolean} = {};
    deletedItems.forEach(itemId => {
      hash[itemId] = true;
    })
    const cursorParent = this.getDeletedItemsParent(tree, deletedItems, hash);
    const result: Array<OrgItemConfig> = [];
    tree.loopLevels(this, (nodeId: number, node: OrgItemConfig) => {
      if (hash[nodeId]) {
        return tree.SKIP;
      }
      result.push(node);
    });

    return {
      items: result,
      cursorItem: cursorParent
    };
  }

  getDeletedItemsParent(tree: any, deletedItems: Array<number>, deletedHash: {[id: number]:boolean}) {
    let result: number | null = null;
    const lca = LCA(tree);
    result = deletedItems.reduce((agg: number | null, itemId: number) => {
      if (agg == null) {
        agg = itemId;
      } else {
        agg = lca.getLowestCommonAncestor(agg, itemId);
      }
      return agg;
    }, null);

    if (deletedHash[result!]) {
      result = tree.parentid(result);
    }
    return result;
  }

  getTree(items: Array<OrgItemConfig> = []) {
    const tree = Tree();

    // rebuild tree
    for (let index = 0; index < items.length; index += 1) {
      const item = items[index];
      tree.add(item.parent, item.id, item);
    }

    return tree;
  }
}
