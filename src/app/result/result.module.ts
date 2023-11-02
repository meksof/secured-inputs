import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ResultComponent } from './result.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ResultComponent
  ]
})
export class ResultModule { }
