import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { Http } from '@angular/http';

@Injectable()
export class TreeServiceMock {

  constructor(private http: Http) {}

  getTree1() {
    return this.http.get('../../assets/mock/tree.service-mock1.json')
      .toPromise()
      .then(res => <TreeNode[]> res.json().data);
  }

  getTree2() {
    return this.http.get('../../assets/mock/tree.service-mock2.json')
      .toPromise()
      .then(res => <TreeNode[]> res.json().data);
  }

}
