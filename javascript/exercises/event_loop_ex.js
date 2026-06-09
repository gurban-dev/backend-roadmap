// JavaScript Event Loop and Promises Exercise

// Practice:
// then()
// catch()
// Microtasks
// Macrotasks
// async
// await
// Arrow functions
// Traditional functions

// Part 1: Predict the Output

// Without running the code, write down the exact order of the output.

console.log("A");

setTimeout(function () {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Questions
// 1. What is the output?
// 2. Which lines are synchronous?
// 3. Which callback is a microtask?
// 4. Which callback is a macrotask?

// Part 2: Add a catch()

// Complete the missing code so that the error is handled.

function getNumber() {
  return Promise.reject("Something went wrong");
}

getNumber()

// Write your code below.

// The console should display:
// Something went wrong

// Part 3: Create a Promise

// Write a function named getGreeting.

// Requirements:
// Use the traditional function keyword.
// Return a Promise.
// Resolve with the string "Hello, World!".

// Starter code:

function getGreeting() {
  // Your code here.
}

// Then use then() to print the result.

// Expected output:

// Hello, World!


// Part 4: async and await

// Complete the code below.

const getMessage = () => {
  return Promise.resolve("Learning JavaScript");
};

async function displayMessage() {
  // Use await here.

  // Print the message.
}

displayMessage();


// Expected output:

// Learning JavaScript

// Part 5: Event Loop Challenge

// Without running the code, predict the output.

javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise 1");
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");

// Questions

// 1. What is the output?
// 2. Why does "Timer" not run before the Promise callbacks?
// 3. Which items enter the microtask queue?
// 4. Which item enters the macrotask queue?

// Part 6: Build an async Function

// Create an async function named loadUser.

// Requirements:

// 1. Create a Promise that resolves with "User Loaded".
// 2. Use await inside loadUser.
// 3. Print the result.
// 4. Use a try/catch block.

// Starter code:

async function loadUser() {
    try {
    // Your code here.
    } catch (error) {
    console.log(error);
    }
}

loadUser();

// Expected output:


// User Loaded


// Predict the output before running it.


console.log("1");

Promise.resolve()
  .then(() => {
    console.log("2");
  })
  .then(() => {
    console.log("3");
  });

setTimeout(function () {
  console.log("4");
}, 0);

console.log("5");

// Questions:

// 1. What is the output?
// 2. Which values come from synchronous code?
// 3. Which values come from microtasks?
// 4. Which value comes from a macrotask?