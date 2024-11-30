import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisplayEmployeeService } from '../services/display-employee.service';


@Component({
  selector: 'app-add-emp',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent {

  employeeForm: FormGroup;
  // employees: any[] = [];

  constructor(private fb: FormBuilder, private displayEmployeeService: DisplayEmployeeService) {
    // Initialize the form
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      contact: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
    });
  }

  // Convenience getter for easy access to form controls in the template
  get formControls() {
    return this.employeeForm.controls;
  }

  // Handle form submission
  onSubmit() {
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      this.displayEmployeeService.addEmployee(employee);  // Add employee via service
      alert(`${employee.name} details added`);
      this.employeeForm.reset();
      
    } else {
      alert('Form is invalid. Please enter the details in correct format to proceed');
    }
  }
}
