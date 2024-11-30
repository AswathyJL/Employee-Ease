import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent
    },
    {
        path:"auth",component:AuthComponent
    },
    {
        path:"employee",component:EmployeeComponent
    },
];
