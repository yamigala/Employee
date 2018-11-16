import { Component, OnInit } from "@angular/core";
import { EmpService } from "../../core/emp.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";

import { employee } from "../../core/emp.model";

@Component({
  selector: "app-add-emp",
  templateUrl: "./add-emp.component.html",
  styleUrls: ["./add-emp.component.css"]
})
export class AddEmpComponent implements OnInit {
  emp: employee[];
  empdetails: employee;
  empForm:FormGroup;
  constructor(
    private service: EmpService,
    private fb: FormBuilder,
    
  ) {
    this.empForm=this.fb.group({});
  }
  //
  /**
   * this method used to get the data
   */
   ngOnInit() {
    this.empForm = this.fb.group({
        name: ["", Validators.required],
        age: ["", Validators.required],
        designation: ["", Validators.required],
        joinningDate: ["", Validators.required]
      });
    
    this.service.getData().subscribe(data => {
      this.emp = data;
      console.log(this.emp);
    });
  }
  /**
   * this method used to add data
   */
  onSubmit(addData) {
    this.service.empdetails(addData).subscribe(temp => {
      this.empdetails = temp;
      console.log(this.empdetails);
    });
  }

}
