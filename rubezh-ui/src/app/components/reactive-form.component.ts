import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  template: `
    <p>
      reactive-form works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
