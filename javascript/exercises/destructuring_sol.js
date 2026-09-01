// Objective:
// Practice creating an object, using object destructuring to extract
// properties into variables, and using array destructuring.

// Create an object that stores information about an employee.
const employee = {
    firstName: "John",
    lastName: "Smith",
    salary: 60000
};

// Use object destructuring to extract the 'firstName' and
// 'lastName' properties into new variables.

// -The property names can be renamed and then the new names
// can be used to reference the same values that the original
// property names were referencing.
const {
    // propertyName: newVariableName
    firstName: employeeFirstName,
    lastName: employeeLastName
} = employee;

// Print the employee object.
console.log("employee:", employee);

// Print the extracted variables.
console.log(`employeeFirstName: ${employeeFirstName}`);
console.log(`employeeLastName: ${employeeLastName}`);

// The API response may be null.
const apiResponse = null;

// Safely destructure from the API response.
// If apiResponse is null, use an empty object instead.

// The nullish coalescing operator (??) is a logical operator
// that returns its right-hand side when its left-hand side
// is either null or undefined. Otherwise, it returns its
// left-hand side value.
// -
const {
    firstName: apiFirstName,
    salary: apiSalary
} = apiResponse ?? {};

console.log(`\napiFirstName: ${apiFirstName}`);
console.log(`apiSalary: ${apiSalary}`);

// Object.values() will convert the employee plain object's
// property values into an array.

// Object is a built-in JavaScript function that can be used
// to create objects and provides useful static methods such
// as Object.keys(), Object.values(), and Object.entries().
const employeeValuesArr = Object.values(employee);

console.log("\nemployeeValuesArr:", employeeValuesArr);

// Use array destructuring to extract the first two values.
const [givenName, surname] = employeeValuesArr;

console.log(`\ngivenName: ${givenName}\nsurname: ${surname}`);

// What if only the third item needs to be extracted?
// const [, , salary] = employeeValuesArr;

// What if only the first and third items need to be extracted?
const [firstName, , salary] = employeeValuesArr;

console.log(`\nfirstName: ${firstName}, salary: ${salary}`)