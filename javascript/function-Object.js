/*
 * Functions are objects in JavaScript, which means they
 * can have properties and methods just like other objects.
 *
 * However, typeof returns "function" for function values,
 * rather than "object".
 */

const person = {
    name: "John"
};

const greet = function () {
    console.log("Hello!");
};

// A plain object produces "object".
console.log("typeof person:", typeof person);

// A function produces "function".
console.log("typeof greet:", typeof greet);

// Functions are objects, so they can have properties.
greet.description = "Says hello.";

console.log("greet.description:", greet.description);

greet();