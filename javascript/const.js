// JavaScript or ECMAScript, introduced the const keyword in 2015.

// A declaration is the introduction of a variable, constant or
// function.

// Block-scoped means the variable can only be accessed within the
// block of code where it was declared.

// A block of code or code block always begins with an opening curly
// brace { and ends with a closing curly brace }.
// Anything written between these curly braces, belongs to that block.
// {
//     // This is the start of the block.

//     let message = "Hello";

//     // This is the end of the block.
// }

// Variables declared with const:
// • cannot be redeclared
// • cannot be reassigned
// • must be initialised
// • have block scope

const number = 42;

// Redeclaration in the same scope is not allowed.

// The following is considered redeclaration of the variable
// 'number' because the const keyword preceded.
// const number = 42;

// Reassignment is not allowed:
// number = 42;

// A const variable must be initialised when it is declared.

// An uninitialised variable declared with const generates a SyntaxError.

// This SyntaxError occurs while the program is being parsed,
// so a try...catch block in the same program cannot catch it.
// const number;

// An array in JavaScript falls under the category of an object.
// If a variable declared with const refers to an object, the contents
// of that object can still be mutated.
const nums = [1, 2, 3];

const employee = {
    id: 1001,
    name: "John",
    isSenior: false
};

// Reassignment is not allowed with variables declared with const.
// nums = [1, 2, 3];
// employee = {};

// The body of the if statement is different scope because it's
// a new code block due to the curly braces.
if (true) {
    // Since this is a new block of code, the inner 'number' variable
    // declared below hides the global 'number' variable.
    const number = 40;

    // Logs 40 to the console because JavaScript always looks for
    // variables starting from the most locally declared scope.
    console.log("number:", number);

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