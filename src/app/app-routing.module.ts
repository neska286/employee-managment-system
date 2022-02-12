import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DetalisEmployeeComponent } from './page/detalis-employee/detalis-employee.component';
import { LoginComponent } from './page/login/login.component';
import { UpdateEmployeeComponent } from './page/update-employee/update-employee.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component:  LoginComponent  },
  { path: 'details-employee/:id', component: DetalisEmployeeComponent},
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
