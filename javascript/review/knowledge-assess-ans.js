/*
JavaScript Knowledge Assessment - Answers.

Use this file to review the answers for knowledge-assess.js.

Focus on explaining why each answer is correct.
*/


// ============================================================
// Question 1.
// ============================================================

console.log("\nQuestion 1");

let x = 10;

if (x > 5) {
    console.log("A");
} else {
    console.log("B");
}

// Answer:
// A

// 10 is greater than 5, so the if block runs.


// ============================================================
// Question 2.
// ============================================================

console.log("\nQuestion 2");

let number = 0;

while (number < 3) {
    console.log(number);
    number++;
}

console.log(number);

// Answer:
// 0
// 1
// 2

// number after the while loop: 3

// The loop stops when number becomes 3 because
// 3 < 3 is false.


// ============================================================
// Question 3.
// ============================================================

console.log("\nQuestion 3");

{
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 0);
    }
}

{
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 0);
    }

    console.log(i);
}

// Answer:
// 3
// 0
// 1
// 2
// 3
// 3

// The first 3 comes from console.log(i) after the var loop.

// The let loop prints 0, 1, 2 because each iteration gets
// its own block-scoped i.

// The var loop prints 3 three times because all callbacks
// share the same var i. By the time they execute, the loop
// has finished and i is 3.

// setTimeout(..., 0) still runs later, not immediately.


// ============================================================
// Question 4.
// ============================================================

console.log("\nQuestion 4");

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);

// Answer:
// true
// false
// true
// false

// == allows type coercion.

// === compares both value and type.

// Prefer === in most JavaScript code because it avoids
// unexpected type conversion.


// ============================================================
// Question 5.
// ============================================================

console.log("\nQuestion 5");

const user = {
    name: "John"
};

user.name = "Jane";

console.log(user.name);

// Answer:
// Jane

// const prevents reassignment of the variable:
// user = {};

// would cause an error.

// It does not prevent us from changing properties of
// the object that user refers to.


// ============================================================
// Question 6.
// ============================================================

console.log("\nQuestion 6");

const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 10);

console.log(result);

// Answer:
// [20, 40]

// filter() keeps [2, 4].
// map() changes them to [20, 40].


// ============================================================
// Question 7.
// ============================================================

console.log("\nQuestion 7");

const prices = [10, 20, 30];

const total = prices.reduce(
    (sum, price) => sum + price,
    0
);

console.log(total);

// Answer:
// 60

// The 0 is the initial value of the accumulator.

// 0 + 10 + 20 + 30 = 60.


// ============================================================
// Question 8.
// ============================================================

console.log("\nQuestion 8");

const person = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

console.log(person.name);
console.log(person["age"]);

// Answer:
// Alice
// 25

// Both access object properties.

// Dot notation is convenient when the property name is known.

// Bracket notation is useful when the property name comes
// from a variable:
// const property = "age";
// person[property];


// ============================================================
// Question 9.
// ============================================================

console.log("\nQuestion 9");

const student = {
    name: "Sarah",
    age: 20
};

const { name, age } = student;

console.log(name);
console.log(age);

// Answer:
// Sarah
// 20

// Destructuring extracts properties into variables.

// This:
// const { name, age } = student;

// is similar to:
// const name = student.name;
// const age = student.age;


// ============================================================
// Question 10.
// ============================================================

console.log("\nQuestion 10");

const first = [1, 2, 3];
const second = [...first, 4, 5];

console.log(first);
console.log(second);

// Answer:
// [1, 2, 3]
// [1, 2, 3, 4, 5]

// The spread operator expands the elements of first
// into the new array. It does not modify first.


// ============================================================
// Question 11.
// ============================================================

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// Answer:
// true
// false

// Even numbers have a remainder of 0 when divided by 2.


// ============================================================
// Question 12.
// ============================================================

function getAdults(people) {
    return people.filter(person => person.age >= 18);
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 31 }
];

console.log(getAdults(people));

// Answer:
// [
//     { name: "Alice", age: 25 },
//     { name: "Charlie", age: 31 }
// ]

// filter() returns a new array containing elements for which
// the callback returns true.


// ============================================================
// Question 13.
// ============================================================

// A callback is a function passed to another function.

// In this example:

function processNumber(number, callback) {
    return callback(number);
}

const callbackResult = processNumber(5, function(number) {
    return number * 2;
});

console.log(callbackResult);

// Answer:
// 10

// processNumber() receives a function as callback.
// It then calls callback(5), which returns 10.


// ============================================================
// Question 14.
// ============================================================

// The three Promise states are:
// 1. pending
// 2. fulfilled
// 3. rejected

// A Promise starts pending and eventually becomes either
// fulfilled or rejected.


// ============================================================
// Question 15.
// ============================================================

// .then() and .catch() work directly with Promise methods:
// promise
//     .then(result => {
//         ...
//     })
//     .catch(error => {
//         ...
//     });

// async/await provides another syntax for working with
// Promises:
// async function example() {
//     try {
//         const result = await promise;
//     } catch (error) {
//         ...
//     }
// }

// Both approaches can handle successful results and errors.
// async/await often makes asynchronous code easier to read.


// ============================================================
// Question 16.
// ============================================================

console.log("\nQuestion 16");

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

// Answer:
// A
// D
// C
// B

// Synchronous code runs first, so A and D print first.

// Promise callbacks are microtasks and run before timer
// callbacks.

// Therefore C runs before the setTimeout callback B.


// ============================================================
// Question 17.
// ============================================================

// A prototype is an object that another object can inherit
// properties and methods from.

// Example:

const animal = {
    speak() {
        console.log("Animal sound");
    }
};

const dog = Object.create(animal);

dog.speak();

// dog does not have its own speak() method.
// JavaScript finds speak() on dog's prototype.


// ============================================================
// Question 18.
// ============================================================

// Procedural programming generally organizes code around
// functions and sequences of operations.

function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(10, 5));


// Object-oriented programming organizes code around objects
// that combine data and behavior.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.calculateArea());


// The important difference is how the program's data and
// behavior are organized.


// ============================================================
// Question 19.
// ============================================================

function sumLargeNumbers(numbers) {
    return numbers
        .filter(number => number > 10)
        .reduce((sum, number) => sum + number, 0);
}

console.log(sumLargeNumbers([5, 15, 20, 3]));

// Answer:
// 35

// filter() produces:
// [15, 20]

// reduce() then calculates:
// 0 + 15 + 20 = 35

// The initial 0 also makes the function safe when the
// filtered array is empty.


// ============================================================
// Question 20.
// ============================================================

function getAdultNames(people) {
    return people
        .filter(person => person.age >= 18)
        .map(person => person.name);
}

console.log(
    getAdultNames([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 15 },
        { name: "Charlie", age: 30 }
    ])
);

// Answer:
// ["Alice", "Charlie"]

// The code is already correct.

// filter() removes Bob because he is under 18.

// map() then extracts the names of the remaining people.

// An important debugging lesson:
// Do not change code simply because a question says there
// is a bug. First verify whether the code actually fails.