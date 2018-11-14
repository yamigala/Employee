import { Component, OnInit } from "@angular/core";
import { EmpService } from "../core/emp.service";
import { FormBuilder, Validators } from "@angular/forms";
import { employee } from "../core/emp.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  // consructor() { }

  empData: employee;
  empdetails;
  updateEmp;

  id: number;
  constructor(
    private service: EmpService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.empData = new employee();
    this.id = +this.route.snapshot.paramMap.get("id");
    this.updateEmp = [];
  }

  empForm = this.fb.group({
    /**
     * required validation
     */
    id: ["", Validators.required],
    name: ["", Validators.required],
    age: ["", Validators.required],
    designation: ["", Validators.required],
    date: ["", Validators.required]
  });

  ngOnInit() {}
  getEmpDetails(emp: employee) {
    debugger;
    this.empData = emp;
    this.empForm.patchValue({
      id: this.empData.id,
      name: this.empData.name,
      age: this.empData.age,
      designation: this.empData.designation,
      date: this.empData.joiningDate
    });
  }
  getData() {
    this.service.getData().subscribe(data => {
      this.empdetails = data;
      console.log("hello get data", this.empdetails);
    });
  }

  onUpdate(id: number) {
    this.service.update(id).subscribe(data => {
      this.getEmpDetails(this.empData);
      console.log("from edit");
    });
    // this.service.update(id).subscribe(data => {
    //   this.updateEmp = data;
    //   console.log("update", this.updateEmp);
    // });
  }
}
