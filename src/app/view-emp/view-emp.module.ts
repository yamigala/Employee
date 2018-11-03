import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEmpRoutingModule } from './view-emp-routing.module';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ViewEmpRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewEmpComponent]
})
export class ViewEmpModule { }
