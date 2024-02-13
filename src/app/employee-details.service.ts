import { Injectable } from '@angular/core';
import{ EmployementDetails } from './employement-details'

@Injectable()
export class EmployeeDetailsService {

  constructor() { }
  private employeeData: EmployementDetails[] = [
    { "id": 11, "name": "Ash", "department": "Finance", "joining_date": "2016-10-08" },
    { "id": 12, "name": "John", "department": "HR", "joining_date": "2011-01-18" },
    { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "2019-11-28" },
    { "id": 14, "name": "Vish", "department": "Development", "joining_date": "2017-07-07" },
    { "id": 15, "name": "Barry", "department": "Operations", "joining_date": "2014-08-19" },
    { "id": 16, "name": "Ady", "department": "Finance", "joining_date": "2014-10-05" },
    { "id": 17, "name": "Gare", "department": "Development", "joining_date": "2014-04-06" },
    { "id": 18, "name": "Hola", "department": "Development", "joining_date": "2010-12-08" },
    { "id": 19, "name": "Ola", "department": "HR", "joining_date": "2011-05-07" },
    { "id": 20, "name": "Kim", "department": "Finance", "joining_date": "2010-10-20" },
  ];

  getEmployees(): EmployementDetails[] {
    return this.employeeData;
  }

  sortByName(): void {
    this.employeeData.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByJoiningDate(): void {
    this.employeeData.sort((a, b) => new Date(a.joining_date).getTime() - new Date(b.joining_date).getTime());
  }

  searchByName(name: string): EmployementDetails[] {
    return this.employeeData.filter(employee => employee.name.toLowerCase().includes(name.toLowerCase()));
  }

  filterExperience(years: number): EmployementDetails[] {
    const currentDate = new Date();
    const filteredEmployees = this.employeeData.filter(employee => {
      const joiningDate = new Date(employee.joining_date);
      const experienceInYears = (currentDate.getTime() - joiningDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
      return experienceInYears > years;
    });
    return filteredEmployees;
  }

  getDistinctDepartments(): { department: string; count: number }[] {
    const departmentCountMap = new Map<string, number>();
    this.employeeData.forEach(employee => {
      const department = employee.department;
      departmentCountMap.set(department, (departmentCountMap.get(department) || 0) + 1);
    });

    const distinctDepartments: { department: string; count: number }[] = [];
    departmentCountMap.forEach((count, department) => {
      distinctDepartments.push({ department, count });
    });

    return distinctDepartments;
  }

  removeDevelopers(): void {
    this.employeeData = this.employeeData.filter(employee => employee.department !== 'Development');
  }


// Write a method to group employees by department

// groupemployess(department: string): EmployementDetails[]{

// const employeesInDepartment = this.employeeData.filter(employee => employee.department.toLowerCase() === department.toLowerCase() );

// return employeesInDepartment;
// }

groupEmployeesByDepartment(): { [key: string]: EmployementDetails[] } {
  const groupedEmployees = {};

  this.employeeData.forEach(employee => {
    const departmentKey = employee.department.toLowerCase();

    groupedEmployees[departmentKey] = groupedEmployees[departmentKey] || [];

    groupedEmployees[departmentKey].push(employee);
  });

  console.log('Grouped Employees:', groupedEmployees);

  return groupedEmployees;
}

}