import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AddEmpModule} from './add-emp/add-emp.module';
// import {ViewEmpModule} from './view-emp/view-emp.module';


const routes: Routes = [
  { path: 'add', loadChildren: './add-emp/add-emp.module#AddEmpModule' }, //applied routing
  { path: 'view', loadChildren: './view-emp/view-emp.module#ViewEmpModule'} //applied routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
