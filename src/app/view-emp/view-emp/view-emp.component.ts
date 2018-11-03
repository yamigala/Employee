import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../core/emp.service';
import { employee } from '../../core/emp.model';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
  empData: employee[];
  constructor(private service: EmpService) { }
  
/**
 * get method 
 */
  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.empData = data;
      console.log(this.empData)
    });
  }
  /**
   * delete method
   */
  delete(i) {
    this.empData.pop();
  }
}
