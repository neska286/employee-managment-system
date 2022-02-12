import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeId=0;
  employee : Employee

  constructor(private activatedRoute: ActivatedRoute,private employeeService: EmployeeService,private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      this.employeeId = res.id;
      this.employeeService.detailsEmployee(this.employeeId).subscribe(employeeData=>{
      this.employee = employeeData["data"]
      // console.log(this.employee);
      })
      })
  }
  updateEmployee(form){
    // console.log(form);
    let updateEmployee = {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      avatar:''
    };
    this.employeeService.updateEmployee(this.employeeId,updateEmployee).subscribe(resp=>{
      console.log(resp);
      alert("Employee Updated Succefully");
      this.gotoList();
    },err=>{
      console.log(err);
    })
  }

  gotoList() {
    this.router.navigate(['/']);
  }

}
