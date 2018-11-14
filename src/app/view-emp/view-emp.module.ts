import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEmpRoutingModule } from './view-emp-routing.module';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ViewEmpRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [ViewEmpComponent]
})
export class ViewEmpModule { }
