import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {Tree, TreeModule, TreeNode} from 'primeng/primeng';
import {TreeServiceMock} from '../services/tree.service-mock';
import {FlatTreeModel} from "../models/flat-tree.model";
import {TreeDifferenceModel} from "../models/tree-difference.model";

import * as _ from 'lodash';

@Component({
  selector: 'app-tree-compare',
  template: `
    <h1>{{title}}</h1>
    <div class="ui-grid ui-grid-responsive">
      <div class="ui-grid-col-3">
        <h2>Структура 1</h2>
        <p-tree [value]="tree1" selectionMode="none"></p-tree>
      </div>
      <div class="ui-grid-col-3">
        <h2>Структура 2</h2>
        <p-tree [value]="tree2" selectionMode="none"></p-tree>
      </div>
      <div class="ui-grid-col-3">
        <h2>Массив отличий</h2>
        <textarea readonly rows="20" style="width: 100%">{{treeDifferenceModelToString()}}</textarea>
      </div>
    </div>
    <br/>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class TreeCompareComponent implements OnInit {

  title = 'TreeCompareComponent';

  tree1: TreeNode;
  tree2: TreeNode;

  treeDifferenceModel: TreeDifferenceModel[] = [];
  flatTreeModel1: FlatTreeModel[] = [];
  flatTreeModel2: FlatTreeModel[] = [];

  private tempSensorId: number;

  constructor(private treeService: TreeServiceMock) {
  }

  ngOnInit() {
    Promise.all([

      // Извлекаем структуру 1:
      this.treeService.getTree1().then(tree => {
        this.tree1 = tree;
      }),

      // Извлекаем структуру 2:
      this.treeService.getTree2().then(tree => {
        this.tree2 = tree;
      })

      // После того, как обе структуры асинхронно извлечены, можно их обработать:
    ]).then(all => {

      // Обработка структуры 1:
      _.forEach(this.tree1, (node) => {
        this.tempSensorId = 0;
        this.processTreeRecursive(node, this.flatTreeModel1);
      });

      // Обработка структуры 2:
      _.forEach(this.tree2, (node) => {
        this.tempSensorId = 0;
        this.processTreeRecursive(node, this.flatTreeModel2);
      });

      //console.log(this.flatTreeModel1);
      //console.log(this.flatTreeModel2);

      // Вывод отличий структур в заданном формате в интерфейс и в консоль:
      _.forEach(this.flatTreeModel1, (item) => {
        if (item.label != this.flatTreeModel2[item.id].label) {
          this.treeDifferenceModel.push({id: item.id, tree1: item.label, tree2: this.flatTreeModel2[item.id].label})
        }
      });
      console.log(this.treeDifferenceModel);

      // Рекурсивная подсветка дерева:
      this.lightTreeRecursive(this.tree1[0], this.treeDifferenceModel.map(item => item.id))
    });
  }

  // Рекурсивная обработка дерева:
  processTreeRecursive(node: TreeNode, flatTreeModel: FlatTreeModel[]) {

    node.expanded = true;
    node.data = {"id": this.tempSensorId++};
    node.styleClass = "TreeNodeStyleClass";

    flatTreeModel.push({id: node.data.id, label: node.label});

    if (node.children) {
      _.forEach(node.children, (children) => {

        this.processTreeRecursive(children, flatTreeModel);
      })
    }
  }

  // Рекурсивная подсветка дерева:
  lightTreeRecursive(node: TreeNode, id: number[]) {

    if (node.data && node.data.id && (_.indexOf(id, node.data.id) !== -1)) {
      node.styleClass = "TreeNodeStyleClassChanged";
    }

    if (node.children) {
      _.forEach(node.children, (children) => {

        this.lightTreeRecursive(children, id);
      })
    }
  }

  // Вывод TreeDifferenceModel в UI:
  treeDifferenceModelToString(): string {
    if (this.treeDifferenceModel)
      return JSON.stringify(
        this.treeDifferenceModel.map((item) => {
          return {tree1: item.tree1, tree2: item.tree2}
        }),
        null, "\t");
  }

}
