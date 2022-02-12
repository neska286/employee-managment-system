import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {PaginatorModule} from 'primeng/paginator';
import { DetalisEmployeeComponent } from './page/detalis-employee/detalis-employee.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UpdateEmployeeComponent } from './page/update-employee/update-employee.component';
import { LoginComponent } from './page/login/login.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';



@NgModule({
  declarations: [AppComponent, DetalisEmployeeComponent, DashboardComponent, UpdateEmployeeComponent, LoginComponent, NavBarComponent],
  imports: [BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
