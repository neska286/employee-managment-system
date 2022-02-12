import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import{Router} from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg = new FormControl('')

  constructor(private fb: FormBuilder , private route : Router,private employeeService: EmployeeService) { 
    this.creatForm();
  }

  ngOnInit(): void {
  }
  creatForm(){
    this.loginForm = this.fb.group({
      email:['',Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password:['',Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    })
  }
  login(email,password){
    // presenataion logic
    this.employeeService.loginUser(email,password).then(resp=>{

      this.route.navigate(['/'])

  
      //   localStorage.setItem("token",resp['Token']);
      //   localStorage.setItem("email",email);
        
      //   if(email=="admin"){
      //   this.route.navigate(['/']);
      
      //   //this.msg.setValue("Login Succefully")
      // }else{
      //   this.msg.setValue("email or password in incorrect")
      // }
    }).catch(error=>{
      this.msg.setValue('Error:'+ error.message);
    })

}
}
