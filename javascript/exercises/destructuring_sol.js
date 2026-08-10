/*
Objective:
Practice creating an object, using object destructuring to extract
properties into variables, and using array destructuring.
*/

// Create an object that stores information about an employee.
const employee = {
    firstName: "John",
    lastName: "Smith",
    salary: 60000
};

// Use object destructuring to extract the 'firstName' and
// 'salary' properties into new variables.
const {
    firstName: employeeFirstName,
    salary: employeeSalary
} = employee;

// Print the employee object.
console.log("employee:", employee);

// Print the extracted variables.
console.log(`employeeFirstName: ${employeeFirstName}`);
console.log(`employeeSalary: ${employeeSalary}`);

// The API response may be null.
const apiResponse = null;

// Safely destructure from the API response.
// If apiResponse is null, use an empty object instead.
const {
    firstName: apiFirstName,
    salary: apiSalary
} = apiResponse ?? {};

console.log(`\napiFirstName: ${apiFirstName}`);
console.log(`apiSalary: ${apiSalary}`);

// Convert the object's property values into an array.
const employeeValues = Object.values(employee);

// Use array destructuring to extract the first two values.
const [firstValue, secondValue] = employeeValues;

// Print the first two values.
console.log(`\nfirstValue: ${firstValue}`);
console.log(`secondValue: ${secondValue}`);