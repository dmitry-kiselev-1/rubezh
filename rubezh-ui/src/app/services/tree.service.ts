import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { Http } from '@angular/http';

@Injectable()
export class TreeService {

  constructor(private http: Http) {}

  getFiles() {
    return this.http.get('../../assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]> res.json().data);
  }

}
