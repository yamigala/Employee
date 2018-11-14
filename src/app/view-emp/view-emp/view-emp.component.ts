import { Component, OnInit } from "@angular/core";
import { EmpService } from "../../core/emp.service";

import { Router } from "@angular/router";
import { employee } from "../../core/emp.model";

@Component({
  selector: "app-view-emp",
  templateUrl: "./view-emp.component.html",
  styleUrls: ["./view-emp.component.css"]
})
export class ViewEmpComponent implements OnInit {
  employees:employee[]
  empData: employee[];
  constructor(private service: EmpService, private router: Router) {}

  /**
   * get method
   * 
   */
  ngOnInit() {
    debugger
    this.service.getData().subscribe(data => {
      this.empData = data;
      console.log(this.empData);
    });
    
  }

  /**
   * delete method
   */

  delete(id: number) {
    this.service.delete(id).subscribe();
    this.service.getData().subscribe(data => {
      this.empData = data;
      console.log(this.empData);
    });
    console.log("delete function call");
  }
  update(id: number) {
    debugger
    
    this.service.update(id).subscribe(data=>{
      
      let temp=data;
      
      console.log(temp);
      
    })
  }
}
