import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmpRoutingModule } from './add-emp-routing.module';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AddEmpRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [AddEmpComponent]
})
export class AddEmpModule { }
