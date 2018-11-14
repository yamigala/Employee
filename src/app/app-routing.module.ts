import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  { path: "add", loadChildren: "./add-emp/add-emp.module#AddEmpModule" }, //applied routing
  { path: "view", loadChildren: "./view-emp/view-emp.module#ViewEmpModule" }, //applied routing
  { path: "edit", loadChildren: "./edit/edit.module#EditModule" },
  { path: "edit/:id", loadChildren: "./edit/edit.module#EditModule" },
  {path:'',redirectTo:'add',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
