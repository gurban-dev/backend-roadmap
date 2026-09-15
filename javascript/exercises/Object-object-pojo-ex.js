/*
 * JavaScript Exercise: Object vs object vs POJO
 *
 * Concepts:
 * - Object
 * - object
 * - POJO
 * - Arrays and Date objects
 */


/*
 * 1. Object
 *
 * Predict what will be printed.
 * Then run the code to check your answer.
 */

console.log("1.", Object);


/*
 * 2. object
 *
 * For each value, write:
 * - "object"
 * - "not object"
 *
 * Replace the ___ with your answer.
 */

const name = "John";

const age = 25;

const user = {
    name: "John",
    age: 25
};

const numbers = [1, 2, 3];

console.log("2a.", ___);
console.log("2b.", ___);
console.log("2c.", ___);
console.log("2d.", ___);


/*
 * 3. POJO
 *
 * For each value, write:
 * - "POJO"
 * - "not POJO"
 *
 * Replace the ___ with your answer.
 */

const person = {
    name: "Alice",
    age: 30
};

const scores = [90, 85, 95];

const today = new Date();

console.log("3a.", ___);
console.log("3b.", ___);
console.log("3c.", ___);


/*
 * 4. Create a POJO
 *
 * Replace the ___ with a valid JavaScript value.
 *
 * The value must contain:
 * - name: "Mike"
 * - age: 28
 */

const customer = ___;

console.log("4.", customer);


/*
 * 5. Identify the concepts
 *
 * Replace each ___ with the correct answer:
 *
 * "Object"
 * "object"
 * "POJO"
 */

// Built-in JavaScript constructor.
console.log("5a.", ___);

// JavaScript data type.
console.log("5b.", ___);

// Plain JavaScript object (POJO).
console.log("5c.", ___);


/*
 * 6. Final check
 *
 * Replace each ___ with:
 * - true
 * - false
 */

const product = {
    name: "Laptop",
    price: 1000
};

const products = [product];

const createdDate = new Date();

// product is a POJO.
console.log("6a.", ___);

// products is a POJO.
console.log("6b.", ___);

// createdDate is a POJO.
console.log("6c.", ___);

// product is an object.
console.log("6d.", ___);

// Object is a built-in constructor.
console.log("6e.", ___);