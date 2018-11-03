import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  {path:'',component:ViewEmpComponent} //applied routing
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewEmpRoutingModule { }
