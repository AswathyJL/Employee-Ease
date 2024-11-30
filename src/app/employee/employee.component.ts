import { Component } from '@angular/core';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { DisplayEmployeeService } from '../services/display-employee.service';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [AddEmpComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employees: any[] = [];

  constructor(private displayEmployeeService: DisplayEmployeeService) {}

  ngOnInit() {
    this.displayEmployeeService.employees$.subscribe(employees => {
      this.employees = employees;  // Subscribe to get the latest employee list
    });
  }
}
