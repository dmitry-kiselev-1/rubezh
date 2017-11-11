import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';

import {
  InputTextModule,
  DropdownModule,
  FieldsetModule,
  DataTableModule,
  ButtonModule,
  DialogModule,
  TreeModule,
  Tree,
  TreeNode,
  SelectItem
} from 'primeng/primeng';

import { TreeServiceMock } from './services/tree.service-mock';
import { ReactiveFormComponent } from './components/reactive-form.component';
import { TreeCompareComponent } from './components/tree-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TreeCompareComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    InputTextModule,
    DropdownModule,
    FieldsetModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    TreeModule
  ],
  providers: [TreeServiceMock],
  bootstrap: [AppComponent]
})
export class AppModule { }
