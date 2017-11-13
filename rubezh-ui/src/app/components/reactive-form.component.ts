import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveFormComponent implements OnInit {

  title = 'ReactiveFormComponent';

  constructor() { }

  ngOnInit() {
  }

}
