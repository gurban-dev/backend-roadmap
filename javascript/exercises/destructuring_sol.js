/*
Objective:
Practice creating an object and using object destructuring to
extract its properties into variables.
*/

// Create an object that stores information about an employee.
const employee = {
    firstName: "John",
    lastName: "Smith",
    salary: 60000
};

// Use object destructuring to extract the 'firstName' and
// 'salary' properties into new variables.

// The property 'firstName' is renamed to the variable
// 'employeeFirstName'.

// The property 'salary' is renamed to the variable
// 'employeeSalary'.
const {
    firstName: employeeFirstName,
    salary: employeeSalary
} = employee;

// Display the extracted variables.
console.log(`employeeFirstName: ${employeeFirstName}\n`);

console.log(`employeeSalary: ${employeeSalary}`);