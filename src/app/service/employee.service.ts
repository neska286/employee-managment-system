import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl : string = 'https://reqres.in/api/users';

  constructor(private httpClient : HttpClient) { }
  getEmployeesList(page:number): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}?page=${page}`)
    }

    createEmployee(employeeBody:any): Observable<Employee>{
      return this.httpClient.post<Employee>(this.baseUrl,employeeBody);
    }  

    updateEmployee(id:number,employeeBody:any): Observable<Employee>{
      return this.httpClient.put<Employee>(this.baseUrl + '/'+id,employeeBody);
    }
    detailsEmployee(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseUrl +'/' +id);
    }

    deleteEmployee(id:number): Observable<Employee>{
      return this.httpClient.delete<Employee>(this.baseUrl +'/' +id);
      }

      loginUser(email,password){
 

        let headersVal = new HttpHeaders().set("email",email).set("password",password)  
        console.log(headersVal)
        return this.httpClient.get(this.baseUrl,{headers:headersVal}).toPromise();
        
      }// end od login user
}
