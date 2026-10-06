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

// None of the source code is executed in the while block when
// number becomes 3 because 3 < 3 is false.


// ============================================================
// Question 3.
// ============================================================

console.log("\nQuestion 3");

function scopeTest() {
    if (true) {

        console.log(
            "functionScoped before declaration:",
            functionScoped,
            "\n"
        );

        var functionScoped = "I am a var!";
        let blockScoped = "I am a let!";

        console.log(blockScoped);
    }

    // functionScoped is accessible here because var is
    // function-scoped rather than block-scoped.

    console.log(functionScoped);

    // blockScoped is not accessible here because let is
    // block-scoped.

    // console.log(blockScoped);
}

scopeTest();

// Expected output:
// functionScoped before declaration: undefined

// I am a let!
// I am a var!

// Why can functionScoped be accessed outside the if block?

// var is function-scoped.

// Its scope is the entire scopeTest() function:

// function scopeTest() {
//     var functionScoped;
//
//     if (true) {
//         functionScoped = "I am a var!";
//     }
//
//     console.log(functionScoped);
// }


// Why can't blockScoped be accessed outside the if block?

// let is block-scoped.

// Its scope is limited to the braces:

// if (true) {
//     let blockScoped = "I am a let!";
// }

// Outside those braces, blockScoped does not exist.

// Therefore this would cause a ReferenceError:
// console.log(blockScoped);


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

// The loose equality operator (==) allows type coercion.

// The strict equality operator (===) compares both the value
// and data type.

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
// No, this would not cause an error.

// Output:
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

// filter() returns a new array containing only the items from the
// original array that satisfy the condition.

// In this case, because .map() is chained onto .filter(), map() iterates
// over each element in the new array returned by filter() and multiplies
// each element by 10.

// 'result' is assigned the final array returned by map().
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

// The second argument, 0, is the initial value of the accumulator.

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

// Renaming the 'name' variable to 'universityStudent':
// const { name: universityStudent, age } = student;

// ============================================================
// Question 10.
// ============================================================

console.log("\nQuestion 10");

const zeroOne = [1, 2];
const twoThree = [3, 4,];
const fourFive = [4, 5];

const zeroToFive = [...zeroOne, ...twoThree, ...fourFive];

console.log(zeroToFive);

// Output:
// [0, 1, 2, 3, 4, 5]

// Here, the spread operator ... takes the individual elements
// from each array and places them into a new array.


// ============================================================
// Question 11.
// ============================================================

console.log("\nQuestion 11");

const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }else {
        return false;
    }

    // Also correct:
    // return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// Output:
// true
// false

// Even numbers have a remainder of 0 when divided by 2.

const num = 10;

const numIsEven = (num % 2 === 0) ? true : false;

console.log("\nnumIsEven:", numIsEven)

// Output:
// numIsEven: true

// ============================================================
// Question 12.
// ============================================================

console.log("\nQuestion 12");

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

// .filter() returns a new array containing elements for which
// the callback returns true.

///////////////////////////////////////////////////////////////
// Continue from here.

// ============================================================
// Question 13.
// ============================================================

console.log("\nQuestion 13");

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

console.log("\nQuestion 14");

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

console.log("\nQuestion 18");

// Explain one difference between procedural programming
// and object-oriented programming.

// Give a simple example of each.

// Procedural programming organises code around functions and
// sequences of operations.

// Object-oriented programming organises code around objects
// that combine data and behavior.

// Suppose you wanted to calculate the area of a rectangle.

// Procedural programming approach:
function calculateArea(width, height) {
    // Inside of a function, both let and const become locally
    // scoped to the function or any block {} within it.

    // Since 'area' was declared inside this function, it cannot
    // because accessed outside of the function.

    // const is the default since it prevents new data from being
    // assigned to an existing variable.
    const area = width * height;

    // return width * height;

    // The following is preferred since 'area' is more understandable
    // than width * height.
    return area;
}

console.log("calculateArea(10, 5):", calculateArea(10, 5));

// Object-oriented programming approach:

// What data an instance of this Rectangle class should store?
// width
// height

// What behavior should this class define?

class Rectangle {
    constructor(width, height) {
        // Defining the data that an object of this class will
        // store.

        // The 'this' keyword indicates that the attribute belongs
        // to an instance of this class:
        this.width = width;
        this.height = height;
    }

    // In Python:
    // def __init__(self, width, height):
    //     self.width = width
    //     self.height = height

    calculateArea() {
        const area = this.width * this.height;

        return area;
    }
}

// Create an instance of the Rectangle class.

// This invokes the constructor method declared in the Rectangle
// class.
const rectangle1 = new Rectangle(10, 5);
const rectangle2 = new Rectangle(8, 4);

// Calling the calculateArea() method on the Rectangle object.
console.log("\nrectangle1.calculateArea():", rectangle1.calculateArea());

// When you call calculateArea() on an instance, it automatically has
// full access to that specific obect's attributes and their current
// values.
console.log("\nrectangle2.calculateArea():", rectangle2.calculateArea());

// ============================================================
// Question 19.
// ============================================================

console.log("\nQuestion 19");

// This function is supposed to return the sum of all numbers
// greater than 10.

// Find and fix the bug.

// What if the array doesn't have any numbers greater than 10?
// Notice how the .reduce() method doesn't have a second argument
// for the first parameter of the arrow function.

function sumLargeNumbers(numbers) {
    // sum is initialised with 0.
    return numbers.filter(number => number > 10)
        .reduce((sum, number) => sum + number);
}

console.log("[5, 15, 20, 3].filter(number => number > 10):\n",
            [5, 15, 20, 3].filter(number => number > 10));

console.log("\n[5, 6, 9, 3].filter(number => number > 10):\n",
            [5, 6, 9, 3].filter(number => number > 10));

console.log("\nsumLargeNumbers([5, 15, 20, 3]):", sumLargeNumbers([5, 15, 20, 3]));

console.log("\nsumLargeNumbers([5, 6, 9, 3]):", sumLargeNumbers([5, 6, 9, 3]));

// What occurs when [5, 6, 9, 3] is passed as an argument
// to sumLargeNumbers():
// [].reduce((sum, number) => sum + number);

// The .reduce() method is called on an empty array which
// produces a TypeError.


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