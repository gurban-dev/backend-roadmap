/*
JavaScript Knowledge Assessment.

Keep in mind that the goal is not to memorize syntax, but to
explain your reasoning as you work through each question.
*/


// ============================================================
// Part 1: Predict the Output.
// ============================================================

console.log("Question 1");

let x = 10;

if (x > 5) {
    console.log("A");
} else {
    console.log("B");
}

// What will this print?


// ============================================================
// Question 2.
// ============================================================

console.log("\nQuestion 2");

let number = 0;

while (number < 3) {
    console.log(number);

    number++;
}

console.log("\nnumber after the while loop:", number);

// What will this print?


// ============================================================
// Question 3.
// ============================================================

console.log("\nQuestion 3");

function scopeTest() {
  if (true) {
    // If functionScoped has not been declared yet, what do you
    // think the following will log to the console?
    console.log("functionScoped before declaration:", functionScoped, "\n");

    var functionScoped = "I am a var!";
    let blockScoped = "I am a let!";
    
    console.log(blockScoped);
  }

  // Checking accessibility outside the if-statement block.
  console.log(functionScoped);

  // console.log(blockScoped);
}

scopeTest();

// Remember that let is block-scoped whereas var is function-scoped.

// var is legacy code because its scope is limited to the function
// rather than the block and a variable with the same name can be
// redeclared with var.

// Why do you think logging blockScoped outside of the if block
// cause an exception whereas logging functionScoped doesn't?

// ============================================================
// Question 4: Equality.
// ============================================================

console.log("\nQuestion 4");

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);


// Explain why the results are different.


// ============================================================
// Question 5: const.
// ============================================================

console.log("\nQuestion 5");

const user = {
    name: "John"
};

user.name = "Jane";

console.log(user.name);

// Does this cause an error?

// Explain what const actually prevents.


// ============================================================
// Question 6: Arrays.
// ============================================================

console.log("\nQuestion 6");

const nums = [1, 2, 3, 4, 5];

const result = nums
    .filter(num => num % 2 === 0)
    .map(num => num * 10);

console.log(result);

// What is the value of result?


// ============================================================
// Question 7: reduce.
// ============================================================

console.log("\nQuestion 7");

const prices = [10, 20, 30];

const total = prices.reduce(
    // reduce() processes each element in the array and
    // combines them into one final result.

    // The first argument is a callback function.
    // Here, the callback is written as an arrow function.
    
    // A callback function is a function passed to another function
    // so it can be called later.

    // sum is the accumulated value.
    // price is the current element in the array.
    (sum, price) => sum + price,
    0
);

console.log(total);

// What will 'total' be assigned?
// What does the second argument, 0, represent?


// ============================================================
// Question 8: Objects.
// ============================================================

console.log("\nQuestion 8");

const person = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

console.log(person.name);
console.log(person["age"]);

// Explain the difference between the two property accesses.


// ============================================================
// Question 9: Destructuring.
// ============================================================

console.log("\nQuestion 9");

const student = {
    name: "Sarah",
    age: 20
};

const { name, age } = student;

console.log(name);
console.log(age);

// Explain what happened here.

// Show how would you rename 'name' to 'universityStudent'.

// ============================================================
// Question 10: Spread.
// ============================================================

console.log("\nQuestion 10");

const zeroOne = [1, 2];
const twoThree = [3, 4,];
const fourFive = [4, 5];

const zeroToFive = [...zeroOne, ...twoThree, ...fourFive];

console.log(zeroToFive);

// Explain what the spread operator did in this case.

// ============================================================
// Part 2: Functions.
// ============================================================

// Question 11.

console.log("\nQuestion 11");

// Write a function called isEven that accepts a number
// and returns true if the number is even.
// Otherwise, it should return false.

// Show how you would write this with a ternary operator.

// Write your solution below.

// Question 12.

console.log("\nQuestion 12");

// Write a function called getAdults.

// It should accept an array of people:
// [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 15 },
//     { name: "Charlie", age: 31 }
// ]

// It should return only people who are at least 18.

// Use filter().

// Write your solution below.

// ============================================================
// Part 3: Callback Functions.
// ============================================================

// Question 13.

// Explain what a callback function is.

// Then explain what the following code does:

// function processNumber(number, callback) {
//     return callback(number);
// }

// const result = processNumber(5, function(number) {
//     return number * 2;
// });

// console.log(result);


// ============================================================
// Part 4: Promises.
// ============================================================

// Question 14.

// What are the three main states of a Promise?


// ============================================================
// Question 15.

// What is the difference between:
// promise.then(...).catch(...)

// and:

// async function example() {
//     try {
//         await promise;
//     } catch (error) {
//         ...
//     }
// }


// ============================================================
// Part 5: Event Loop.
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


// What is the order of:
//
// A
// B
// C
// D
//
// Explain why.


// ============================================================
// Part 6: Prototypes.
// ============================================================

// Question 17.

// Explain what a prototype is in JavaScript.

// You may use a simple example if it helps.


// ============================================================
// Part 7: Procedural vs OOP.
// ============================================================

// Question 18.

// Explain one difference between procedural programming
// and object-oriented programming.

// Give a simple example of each.


// ============================================================
// Part 8: Debugging.
// ============================================================

// Question 19.

// This function is supposed to return the sum of all
// numbers greater than 10.

// Find and fix the bug.

function sumLargeNumbers(numbers) {
    return numbers.filter(number => number > 10)
        .reduce((sum, number) => sum + number);
}

console.log(sumLargeNumbers([5, 15, 20, 3]));


// ============================================================
// Question 20.

// This function is supposed to return the names of adults.

// Find and fix the bug.

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