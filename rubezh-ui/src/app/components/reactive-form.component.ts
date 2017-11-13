import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
    <h1>{{title}}</h1>

    <div class="ui-grid ui-grid-responsive">
      <div class="ui-grid-col-6">
        <form [formGroup]="formGroup" novalidate 
              [ngClass]="{'validationError': (formGroup.invalid && (formGroup.dirty || formGroup.touched)), 'validationSuccess': !(formGroup.invalid && (formGroup.dirty || formGroup.touched))}">
      <span class="ui-float-label">
        <input id="float-input" type="email" size="50" pInputText #emailInput
               formControlName="emailFormControl" (keyup)="emailKeyup(emailInput.value)"> 
        <label for="float-input">Email (example@domain.com)</label>
      </span>
          <br/>
          <p>Form value: {{ formGroup.value | json }}</p>
          <p>Email value after 500ms: {{ EmailValueAfter500ms }}</p>
          <p>Form status: {{ formGroup.status | json }}</p>
        </form>
      </div>
    </div>
    
    <br/><br/>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveFormComponent implements OnInit {

  title = 'ReactiveFormComponent';

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      emailFormControl: ['', Validators.compose([Validators.required, Validators.email]) ]
    });
  }

  ngOnInit() {}

  // модель для вывода содержимого поля email на форму, после задержки:
  EmailValueAfter500ms: string;

  // обработчик нажатия кнопки на поле email:
  emailKeyup(value: string)
  {
    if (value) {
      this.emailProcess(value);
    }
  }

  // имитация задержки в 500 миллисекунд через Promise и вывод содержимого поля email в консоль и на форму
  public emailProcess(email: string): Promise<void> {
    return Promise
      .all(
        [
          Promise.resolve(email),
          new Promise((resolve) => setTimeout(resolve, 300))
        ])
      .then(result => {
        console.log(result[0]);
        this.EmailValueAfter500ms = result[0] as string;
      });
  }


}
