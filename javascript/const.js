// JavaScript or ECMAScript, introduced the const keyword in 2015.

// The const declaration declares block-scoped local variables.
// A variable declared with const cannot be reassigned.

// Variables declared with const:
// • cannot be redeclared
// • cannot be reassigned
// • must be initialised
// • have block scope

const number = 42;

// Redeclaration in the same scope is not allowed.
// const number = 42;

// A const variable must be initialised when it is declared.
// An uninitialised variable declared with const generates a SyntaxError.
// This SyntaxError occurs while the program is being parsed,
// so a try...catch block in the same program cannot catch it.
// const number;

const nums = [1, 2, 3];

const employee = {
    id: 1001,
    name: "John",
    isSenior: false
};

// Reassignment is not allowed with variables declared with const.
// number = 42;
// nums = [1, 2, 3];
// employee = {};

if (true) {
    const message = "Hello";

    console.log('message:', message, '\n');
}

// 'message' cannot be accessed here since variables declared
// with const are block-scoped.
// console.log('message:', message);

// However, if a const variable refers to an object, the object's
// properties can be mutated.

// Mutation (4 is inserted at the end of the array)
nums.push(4);

employee.isSenior = true;

console.log('nums:', nums, '\n');

console.log('employee:', employee);