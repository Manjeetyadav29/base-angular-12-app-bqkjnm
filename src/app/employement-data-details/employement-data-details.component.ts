import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';
@Component({
  selector: 'app-employement-data-details',
  templateUrl: './employement-data-details.component.html',
  styleUrls: ['./employement-data-details.component.css']
})
export class EmployementDataDetailsComponent implements OnInit {

  constructor(private employeeService: EmployeeDetailsService) { }

  ngOnInit() {
  }
  employees = this.employeeService.getEmployees();

  
  sortByName(): void {
    this.employeeService.sortByName();
  }

  sortByJoiningDate(): void {
    this.employeeService.sortByJoiningDate();
  }

  searchByName(name: any): void {
    this.employees = this.employeeService.searchByName(name.target.value);
  }

  filterExperience(years: any): void {
    this.employees = this.employeeService.filterExperience(years.target.value);
  }

  getDistinctDepartments(): void {
    const departments = this.employeeService.getDistinctDepartments();
    console.log(departments);
  }

  removeDevelopers(): void {
    this.employeeService.removeDevelopers();
    this.employees = this.employeeService.getEmployees(); 
  }

  groupbydepartment(): void {
    const departmentdata = this.employeeService.groupEmployeesByDepartment();
    console.log(departmentdata)
  }
}