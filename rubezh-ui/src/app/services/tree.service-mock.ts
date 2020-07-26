import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class TreeServiceMock {

  constructor(private http: Http) {}

  // Извлечение структуры 1:
  getTree1() {
    return this.http.get('assets/mock/tree.service-mock1.json')
      .toPromise()
      .then(
        result => {
          return <TreeNode> result.json().data;
        });
  }

  // Извлечение структуры 2:
  getTree2() {
    return this.http.get('assets/mock/tree.service-mock2.json')
      .toPromise()
      .then(
        result => {
          return <TreeNode> result.json().data;
        });
  }

}
