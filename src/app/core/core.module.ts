import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpService } from './emp.service';



@NgModule({
  imports: [
    CommonModule,
   
  ],
  declarations: [],
  providers:[EmpService],
  
})
export class CoreModule { }
