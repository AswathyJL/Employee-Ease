import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisplayEmployeeService {
  private employeesSubject = new BehaviorSubject<any[]>([]);
  employees$ = this.employeesSubject.asObservable();

  addEmployee(employee: any) {
    const currentEmployees = this.employeesSubject.value;
    this.employeesSubject.next([...currentEmployees, employee]);
  }
}
