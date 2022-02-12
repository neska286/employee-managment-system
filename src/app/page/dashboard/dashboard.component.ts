import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees : Employee[] =[];
  employee: Employee | undefined;
  employeeId = 0;
  form: FormGroup;

  constructor(private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.getEmployeePaged(1); 
  }
  // getAllEmployeeList(){
  //   this.employeeService.getEmployeesList(1).subscribe(response=>{
  //     this.employees = response["data"];
     
  //   })

  // }
  getEmployeePaged(page:number){
    this.employeeService.getEmployeesList(page).subscribe(response=>{
      this.employees = response["data"];
    })

  }
  addNewEmployee(form){
    let newEmployee = {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      avatar:''
    };
    this.employeeService.createEmployee(newEmployee).subscribe(data => {
    
      this.employee = data;
      alert("Employee Added Succefully")
      console.log(this.employee);
      form.reset()
     
    })

  }

  deleteEmployee(id){
    this.employeeService.deleteEmployee(id).subscribe(res => {
         this.employees = this.employees.filter(item => item.id !== id);
         alert(`Employee Id ${id} deleted successfully!`);
         console.log('Employee deleted successfully!');
    })
  }

  paginate(event){
   
    this.getEmployeePaged(event.page+1); 

  }

}
