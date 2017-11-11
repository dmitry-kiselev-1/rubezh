import {Component, OnInit, ViewChild} from '@angular/core';

import {Tree, TreeModule, TreeNode} from 'primeng/primeng';
import { TreeServiceMock } from './services/tree.service-mock';

@Component({
  selector: 'app-root',
  template: `

    <!--<p-tree [value]="files" selectionMode="single" [(selection)]="selectedFile"></p-tree>-->

    <div class="ui-grid">
      <div class="ui-grid-col-3">
        <p-tree [value]="tree1" selectionMode="single" [(selection)]="selectedTree1"></p-tree>
      </div>
      <div class="ui-grid-col-3">
        <p-tree [value]="tree2" selectionMode="single" [(selection)]="selectedTree2"></p-tree>
      </div>
    </div>

<!--
    <button pButton type="button" label="Click"></button>
    <button pButton type="button" label="Danger"  class="ui-button-danger"></button>
-->
  `,
  styles: []
})
export class AppComponent implements OnInit {

  title = 'app';

  files: TreeNode[];
  selectedFile: TreeNode;

  tree1: TreeNode[];
  selectedTree1: TreeNode;

  tree2: TreeNode[];
  selectedTree2: TreeNode;

  constructor(private treeService: TreeServiceMock) {}

  ngOnInit() {
    this.treeService.getTree1().then(tree => this.tree1 = tree);
    this.treeService.getTree2().then(tree => this.tree2 = tree);

/*

*/

  }
}
