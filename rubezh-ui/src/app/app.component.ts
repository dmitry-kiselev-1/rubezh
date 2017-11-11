import {Component, OnInit} from '@angular/core';

import { TreeModule, TreeNode } from 'primeng/primeng';
import { TreeService } from './services/tree.service';

@Component({
  selector: 'app-root',
  template: `

    <p-tree [value]="files" selectionMode="single" [(selection)]="selectedFile"></p-tree>

    <button pButton type="button" label="Click"></button>
    <button pButton type="button" label="Danger"  class="ui-button-danger"></button>
    
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';

  files: TreeNode[];
  selectedFile: TreeNode;

  constructor(private treeService: TreeService) {}

  ngOnInit() {
    this.treeService.getFiles().then(files => this.files = files);
  }
}
