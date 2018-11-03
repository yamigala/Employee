import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../core/emp.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  emp;
  empdetails;
  constructor(private service: EmpService, private fb: FormBuilder) { }

  empForm = this.fb.group({
/**
 * required validation 
 */
    id: ['', Validators.required],
    name: ['', Validators.required],
    age: ['', Validators.required],
    designation: ['', Validators.required],
    joinningDate: ['', Validators.required],

  });
  ngOnInit() {

/**
 * subscribing get method
 */
    this.service.getData().subscribe(data => {
      this.emp = data;
      console.log(this.emp);
    })

  }
  /**
   * post method
   */
  onSubmit(addData) {
    this.service.empdetails(addData).subscribe(
      temp => {
        this.empdetails = temp
        console.log(this.empdetails);
      }
    )
  }

}

