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
console.log("num1:", num1);

// Attempting to access the block-scoped variable outside the block
// would cause an error.
// console.log("\nnum2:", num2);

// Demonstrate primitive data types. These store simple, immutable
// values.
let str = "Hello";
let num = 42;
let isTrue = false;

// Objects (not primitive data types):

// Demonstrate an array. Arrays are ordered collections of values.
let arr = [1, 2, 3];

// Demonstrate an object. Objects store data as key-value pairs.
let person = { firstName: "John", lastName: "Doe" };

// Access a property from an object using dot notation.
console.log(person.lastName);

// Demonstrate an array of objects. This pattern is commonly used
// in backend data handling.

// In JavaScript, square brackets ([]) indicates that the data type
// is an array.
const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

/*
Primitive types are values that are immutable and variables
that reference primitive types independent do so that changing
what one variable references, won't affect another.

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

An object is anything that is not primitive.
This includes:
Plain objects -> {name: "Alice"}
Arrays -> [1, 2, 3]
Functions -> () => {}
Dates -> new Date()
Maps, Sets, etc.
*/

let a = 5;
let b = a;

console.log("\na:", a);
console.log("b:", b);

// With primitive types, every assignment creates a new independent
// value.
b = 10;

console.log("\nAfter 10 is assigned to \'b\':");

console.log("a:", a);
console.log("b:", b);

// Plain object.
let obj1 = { value: 5 };

// The variables hold a reference to the objects.

// Instead of each variable having its own copy, both variables
// hold the same object in memory.
let obj2 = obj1;

console.log("\nobj1:", obj1);
console.log("obj2:", obj2);

// Since the variables 'obj1' and 'obj2' hold a reference to
// the same object in memory, modifying the 'value' property
// for 'obj2', will also modify it for 'obj1'.
obj2.value = 10;

console.log("obj1.value:", obj1.value);