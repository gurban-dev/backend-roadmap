// Declare a variable using let. This value can be reassigned later.
let name = "John";

// Declare a constant using const. This value cannot be reassigned
// after initialization.
const age = 24;

// Declare a variable using var. This approach is outdated and
// should generally be avoided.
var oldway = "Avoid this";

// Demonstrate the difference between function scope and block scope.
if (true) {
    // Declare a variable with var. It is function-scoped and accessible
    // outside this block.
    var num1 = 10;

    // Declare a variable with let. It is block-scoped and only
    // accessible inside this block.
    let num2 = 20;
}

// Access the function-scoped variable outside the block. This works
// as expected.
console.log(num1);

// Attempting to access the block-scoped variable outside the block
// would cause an error.
// console.log(num2);

// Demonstrate primitive data types. These store simple, immutable
// values.
let str = "Hello";
let num = 42;
let isTrue = false;

// Demonstrate an array. Arrays are ordered collections of values.
let arr = [1, 2, 3];

// Demonstrate an object. Objects store data as key-value pairs.
let person = { fName: "John", lastName: "Doe" };

// Demonstrate an array of objects. This pattern is commonly used
// in backend data handling.
const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

// Access a property from an object using dot notation.
console.log(person.lastName);

/*
Explain primitive types. These values are immutable and stored directly.

Primitive types in JavaScript include:
string
number
boolean
null
undefined
bigint
symbol

-------------------------------------------------------------

Explain objects. Objects are mutable and stored by reference.

Objects include:
{} (plain objects)
[] (arrays)
functions
dates
*/