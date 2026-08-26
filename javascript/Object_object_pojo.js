/*
 * Object vs object vs POJO
 *
 * The three terms are related, but they are not the same thing.
 */


/* 1. Object
 *
 * "Object" with a capital O is a built-in JavaScript constructor.
 *
 * It can be used to create objects and provides useful methods
 * for working with objects.
 */

// Output: Object: [Function: Object]
console.log("Object:", Object);


/* 2. object
 *
 * "object" with a lowercase o is a JavaScript data type.
 */

const user = {
    name: "John",
    age: 25
};

// Output:
// typeof user: object
console.log("typeof user:", typeof user);


/* 3. POJO
 *
 * POJO = Plain Old JavaScript Object.
 *
 * This is a normal object created without a special class.
 */

const person = {
    name: "Alice",
    age: 30
};

console.log("person:", person);


// Not every object is a POJO.

// Array object
const numbers = [1, 2, 3];

// Date object
const date = new Date();

// Output:
// typeof numbers: object
console.log("typeof numbers:", typeof numbers);

// Output:
// typeof date: object
console.log("typeof date:", typeof date);


/*
 * QUICK RECAP
 *
 * Object
 * -> Built-in constructor.
 *
 * object
 * -> JavaScript data type.
 *
 * POJO
 * -> A simple, ordinary JavaScript object.
 *
 *
 * Therefore:
 *
 * POJO -> object
 *
 * But:
 * object != necessarily POJO
 */