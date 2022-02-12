import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-detalis-employee',
  templateUrl: './detalis-employee.component.html',
  styleUrls: ['./detalis-employee.component.scss']
})
export class DetalisEmployeeComponent implements OnInit {
  employeeId = 0;

  employee : Employee;

  constructor(private activatedRoute : ActivatedRoute,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      console.log(res);
      this.employeeId = res.id;
      });
      this.employeeService.detailsEmployee(this.employeeId).subscribe(employeeData=>{
        this.employee = employeeData["data"]
      })
  }

}
