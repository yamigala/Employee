import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmpRoutingModule } from './add-emp-routing.module';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AddEmpRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddEmpComponent]
})
export class AddEmpModule { }
