// Concepts:
// const redeclaration, reassignment, initialisation and block scope.


// Part 1: const Reassignment

// 'const' creates a variable whose value cannot be reassigned.
const name = "Alice";

// This is reassignment because 'name' already exists.
// JavaScript will produce a TypeError if this line runs.
// name = "Bob";

// The original value is still "Alice" because the reassignment
// above is commented out.
console.log("name:", name);

// Answer:
// Changing name from "Alice" to "Bob" would be reassignment.

// It is reassignment because we are trying to give an existing
// variable a different value.

// A const variable cannot be reassigned after it is initialised.
// The variable 'name' already has the value "Alice", so JavaScript
// does not allow us to assign another value to it.


// Part 2: const Redeclaration

// 'age' is declared for the first time here.
const age = 25;

// This would be redeclaration because we are trying to declare
// another variable with the same name in the same scope.
// JavaScript will produce a SyntaxError if this line runs.
// const age = 30;

// Answer:
// Declaring 'age' a second time is redeclaration.

// Redeclaration means declaring a variable with the same name
// again in the same scope.

// The error occurs because 'const' does not allow the same
// variable name to be declared twice in the same scope.


// Part 3: Initialisation

// The variable 'city' is declared but has not been given a value.
// Therefore, its value is automatically undefined.
let city;

// The output is undefined.
console.log("city:", city);

// This assigns the value "Québec" to the existing variable.
// This is also the initialisation of 'city' because this is the
// first value assigned to the variable.
city = "Québec";

// The output is Québec.
console.log("city:", city);

// This assigns a new value to the existing variable.
// This is reassignment because 'city' already has a value.
city = "Vienna";

// Answer:
// 1. Before "Québec" is assigned, the value of 'city' is undefined.

// 2. Assigning "Québec" gives 'city' its first value.
//    This is the initialisation of 'city'.

// 3. Assigning "Vienna" replaces the previous value "Québec".
//    This is called reassignment.


// Part 5: Block Scope

// This variable is declared outside the if block.
// It is accessible outside the block.
let message = "Outside";

if (true) {
    // This is a different variable from the 'message' outside.
    // It exists only inside this if block.
    let message = "Inside";

    // This prints the message variable from inside the block.
    console.log("message:", message);
}

// This prints the message variable declared outside the block.
console.log("message:", message);

// Answer:
// 1. The first console.log() prints:
//    Inside

// 2. The second console.log() prints:
//    Outside

// 3. Both variables can be called 'message' because they are
//    declared in different block scopes.

// The 'message' inside the if block only exists inside that block.
// The 'message' outside the block exists in the outer scope.


// Part 6: Global Scope

// This variable is declared outside the if block.
// It is accessible from the code below it, including inside
// the if block.
let username = "Alice";

if (true) {
    // JavaScript looks for 'username' inside the block first.
    // If it does not find it there, it looks in the outer scope.
    console.log(username);
}

// Answer:
// 'username' is accessible inside the if block because it was
// declared in an outer scope.

// Variables declared in an outer scope can be accessed from
// an inner block.

// However, variables declared inside a block cannot normally
// be accessed from outside that block.


// Example of a variable declared inside the if block.

if (true) {
    // This variable exists only inside this if block.
    let username = "Bob";

    // This works because 'username' is inside the block.
    console.log(username);
}

// This would cause a ReferenceError because this 'username'
// belongs to the if block above.
// console.log(username);


// Part 7: Write Your Own Program

// This variable is declared outside the if block.
let score;

// This initialises 'score' with the value 100.
score = 100;

// This prints the initial value of score.
console.log("score:", score);

if (score >= 60) {
    // This variable is declared inside the if block.
    // Therefore, it has block scope.
    let message = "Passed";

    // This works because message is being accessed inside
    // the block where it was declared.
    console.log("message:", message);
}

// This would cause a ReferenceError because message was declared
// inside the if block and cannot be accessed outside that block.
// console.log("message:", message);


// Const example.

const status = "Passed";

// This would cause a TypeError because a const variable cannot
// be reassigned after it has been initialised.
// status = "Failed";

// This prints the original value.
console.log("status:", status);


// Const redeclaration example.

// This would cause a SyntaxError because 'status' has already
// been declared in the same scope.
// const status = "Failed";


// Summary:

// Initialisation:
// Giving a variable its first value.

// Reassignment:
// Giving an existing variable a new value.

// Redeclaration:
// Declaring a variable with the same name again in the same scope.

// Block scope:
// A variable declared with 'let' or 'const' inside a block,
// such as an if statement, is normally accessible only inside
// that block.

// Global or outer scope:
// A variable declared outside a block can be accessed from
// code inside that block.

// const:
// A const variable cannot be reassigned or redeclared in the
// same scope after it has been declared.