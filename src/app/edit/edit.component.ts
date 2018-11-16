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
 public empData: employee;
  empdetails: employee;
  updateEmployee;

  id: number;
  constructor(
    private service: EmpService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.empData = new employee();
    // this.id = +this.route.snapshot.paramMap.get("id");
    // this.updateEmployee = [];
  }
  /**
   * forms control
   */
  empForm = this.fb.group({
    id: ["", Validators.required],
    name: ["", Validators.required],
    age: ["", Validators.required],
    designation: ["", Validators.required],
    date: ["", Validators.required]
  });
/**
 * form validation
 */
  ngOnInit() {
    this.getData();
  }

  getData() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.service.getData1(id).subscribe(data => {
      this.empdetails = data;
      console.log("hello get data", this.empdetails);
      this.empForm.patchValue({
        id: this.empdetails.id,
        name: this.empdetails.name,
        age: this.empdetails.age,
        designation: this.empdetails.designation,
        date: this.empdetails.joiningDate
      });
    });
  }

  onUpdate(id: number) {
    this.service.updateEmployee(id).subscribe(data => {
      this.empData = data;
      this.router.navigate(["/view"]);
      console.log("from edit");
    });
  }
}
