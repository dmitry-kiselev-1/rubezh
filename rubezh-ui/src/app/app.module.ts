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
  TreeNode,
  SelectItem
} from 'primeng/primeng';

import { TreeService } from './services/tree.service';

@NgModule({
  declarations: [
    AppComponent
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
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
