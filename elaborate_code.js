/* 
Filename: elaborate_code.js
Content: Complex JavaScript code demonstrating an employee management system.
*/

// Define Employee class
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name}, ${this.age} years old, earning $${this.salary}`;
  }
}

// Create employees
const employee1 = new Employee("John Doe", 30, 5000);
const employee2 = new Employee("Jane Smith", 25, 4000);
const employee3 = new Employee("Mark Johnson", 35, 6000);

// Create EmployeeDatabase class
class EmployeeDatabase {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employee) {
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

  getEmployeeByName(name) {
    return this.employees.find(employee => employee.name === name);
  }

  getEmployeesByAge(age) {
    return this.employees.filter(employee => employee.age === age);
  }

  getEmployeesBySalaryRange(minSalary, maxSalary) {
    return this.employees.filter(employee => employee.salary >= minSalary && employee.salary <= maxSalary);
  }

  getTotalSalaryBill() {
    return this.employees.reduce((total, employee) => total + employee.salary, 0);
  }
}

// Create EmployeeDatabase instance
const employeeDatabase = new EmployeeDatabase();

// Add employees to database
employeeDatabase.addEmployee(employee1);
employeeDatabase.addEmployee(employee2);
employeeDatabase.addEmployee(employee3);

// Get employee details
console.log(employee1.getDetails());

// Remove an employee
employeeDatabase.removeEmployee(employee2);

// Get employees by age
const employeesAged30 = employeeDatabase.getEmployeesByAge(30);
console.log(employeesAged30);

// Get employees within a salary range
const employeesInRange = employeeDatabase.getEmployeesBySalaryRange(4000, 6000);
console.log(employeesInRange);

// Get total salary bill
const totalSalaryBill = employeeDatabase.getTotalSalaryBill();
console.log(`Total Salary Bill: $${totalSalaryBill}`);