// JavaScript, or ECMAScript, introduced the const keyword in 2015.

// A declaration is the introduction of a variable, constant, or
// function.

// A block of code, or code block, always begins with an opening curly
// brace { and ends with a closing curly brace }.

// Anything written between these curly braces belongs to that block.
//
// {
//     // This is the start of the block.
//
//     let message = "Hello";
//
//     // This is the end of the block.
// }

// Block-scoped means a variable can only be accessed within the
// block of code where it was declared.

// Variables declared with const:
// • cannot be redeclared in the same scope.
// • cannot be reassigned.
// • must be initialised when they are declared.
// • have block scope.

// A const variable is declared and initialised in the same statement.

const number = 42;

// Redeclaration in the same scope is not allowed.

// The following is considered redeclaration because the const keyword
// is being used to declare another variable with the same name.
// const number = 42;

// Reassignment is not allowed.

// The variable 'number' already exists and has the value 42.
// Trying to give it another value is called reassignment.
// number = 50;

// A const variable must be initialised when it is declared.

// An uninitialised variable declared with const generates a SyntaxError.

// This SyntaxError occurs while the program is being parsed,
// so a try...catch block in the same program cannot catch it.
// const number;

// An array in JavaScript falls under the category of an object.

// If a const variable refers to an object, the variable itself cannot
// be reassigned, but the contents of the object can still be mutated.

const nums = [1, 2, 3];

const employee = {
    id: 1001,
    name: "John",
    isSenior: false
};

// Reassignment is not allowed with variables declared with const.

// These statements would try to make the variables refer to
// completely different arrays or objects.
// nums = [1, 2, 3];
// employee = {};

// Mutation is different from reassignment.

// Mutation changes the contents of the existing object or array.

// The following adds 4 to the existing array.
// nums.push(4);

// The following changes the value of an existing property
// in the existing employee object.
// employee.isSenior = true;

nums.push(4);

employee.isSenior = true;

console.log("nums:", nums, "\n");

console.log("employee:", employee);


// Block Scope

// Variables declared with const have block scope.

// The body of the if statement is a new block because it is surrounded
// by curly braces.

if (true) {
    // This creates a new variable called 'number' inside this block.
    // It is a different variable from the 'number' declared above.

    const number = 40;

    // JavaScript first looks for 'number' in the current block.
    // Therefore, this prints 40 instead of the outer value 42.
    console.log("number:", number);

    // 'message' is declared inside the if block.
    // Therefore, it can only be accessed inside this block.
    const message = "Hello";

    console.log("message:", message, "\n");
}

// The 'message' variable cannot be accessed here because it was
// declared inside the if block and has block scope.

// This would generate a ReferenceError.
// console.log("message:", message);