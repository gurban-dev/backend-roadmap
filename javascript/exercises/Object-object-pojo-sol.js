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
 *
 * Correct prediction:
 * Object: [Function: Object]
 */

console.log("1.", Object);


/*
 * 2. object
 *
 * Correct answers:
 * - name is not an object.
 * - age is not an object.
 * - user is an object.
 * - numbers is an object.
 */

const name = "John";

const age = 25;

const user = {
    name: "John",
    age: 25
};

const numbers = [1, 2, 3];

console.log("2a.", "not object");
console.log("2b.", "not object");
console.log("2c.", "object");
console.log("2d.", "object");


/*
 * 3. POJO
 *
 * Correct answers:
 * - person is a POJO.
 * - scores is not a POJO.
 * - today is not a POJO.
 */

const person = {
    name: "Alice",
    age: 30
};

const scores = [90, 85, 95];

const today = new Date();

console.log("3a.", "POJO");
console.log("3b.", "not POJO");
console.log("3c.", "not POJO");


/*
 * 4. Create a POJO
 *
 * The value contains:
 * - name: "Mike"
 * - age: 28
 */

const customer = {
    name: "Mike",
    age: 28
};

console.log("4.", customer);


/*
 * 5. Identify the concepts
 *
 * Correct answers:
 * - Object is a built-in JavaScript constructor.
 * - object is a JavaScript data type.
 * - POJO is a plain JavaScript object.
 */

// Built-in JavaScript constructor.
console.log("5a.", "Object");

// JavaScript data type.
console.log("5b.", "object");

// Plain JavaScript object (POJO).
console.log("5c.", "POJO");


/*
 * 6. Final check
 *
 * Correct answers:
 * - product is a POJO.
 * - products is not a POJO.
 * - createdDate is not a POJO.
 * - product is an object.
 * - Object is a built-in constructor.
 */

const product = {
    name: "Laptop",
    price: 1000
};

const products = [product];

const createdDate = new Date();

// product is a POJO.
console.log("6a.", true);

// products is a POJO.
console.log("6b.", false);

// createdDate is a POJO.
console.log("6c.", false);

// product is an object.
console.log("6d.", true);

// Object is a built-in constructor.
console.log("6e.", true);