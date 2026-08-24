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
// 'salary' properties into new variables.
const {
    // propertyName: newVariabelName
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
const {
    firstName: apiFirstName,
    salary: apiSalary
} = apiResponse ?? {};

console.log(`\napiFirstName: ${apiFirstName}`);
console.log(`apiSalary: ${apiSalary}`);

// Convert the employee plain object's property values into
// an array.

// Object is a global built-in foundation of JavaScript.
// Object acts as the parent of everything. Meaning that
// almost everything in JavaScript inherits from Object.
// When a plain object {} is created, JavaScript will link
// it to its master starter pack Object.prototype.
// Due to this link, methods like .toString() can be called
// on plain objects.

// object is a primitive type label used to classify data.
// Almost anything that isn't a primitive value (like a
// number or a string) is classified under the object data
// type because it is stored by reference.
// Arrays, Dates, Functions and Plain Objects are all of the
// object data type.
// It represents the actual stuctural data type.
const employeeValuesArr = Object.values(employee);

console.log("employeeValuesArr:", employeeValuesArr)

// Use array destructuring to extract the first two values.
const [givenName, surname] = employeeValuesArr;

// Print the first two values.
console.log(`\ngivenName: ${givenName}`);
console.log(`surname: ${surname}`);