/*
 * Learning Goal:
 * Understand what JavaScript objects are, how to create and
 * access them, how object references work, and how
 * Object.prototype relates to plain objects.
 */

// 1. What is an object?

// An object is a collection of related data and behavior.
// Data and behavior are represented as properties.
// Each property has a key and a value.

const person = {
    name: "John",
    age: 30,
    isDeveloper: true
};

console.log("person:", person);
console.log("name:", person.name);
console.log("age:", person.age);
console.log("isDeveloper:", person.isDeveloper);


// 2. Objects Can Store Different Types of Values

const developer = {
    name: "John",
    age: 30,
    languages: ["JavaScript", "Python"],
    greet: function() {
        return "Hello!";
    }
};

console.log("developer:", developer);
console.log("languages:", developer.languages);
console.log("greeting:", developer.greet());


// 3. What Is Object?

// Object is a built-in JavaScript constructor.
// It can be used to create objects.

// The objects created with {} are plain objects.
// Plain objects store related data as properties.
// Each property has a key and a value.

// The lowercase word "object" refers to the general concept.
// The uppercase name "Object" refers to the built-in constructor.

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2025
};

console.log("car:", car);
console.log("brand:", car.brand);


// 4. typeof Objects

// JavaScript has several primitive types, such as string,
// number, boolean, undefined, null, bigint, and symbol.

// Objects are non-primitive values.

// Plain objects, arrays, and Date objects all have a typeof
// result of "object".

const user = {
    name: "John"
};

const numbers = [1, 2, 3];

const date = new Date();

console.log("user type:", typeof user);
console.log("numbers type:", typeof numbers);
console.log("date type:", typeof date);

console.log("name type:", typeof user.name);


// 5. Objects Are Reference Values

// A variable that refers to an object contains a reference
// to that object.

// Assigning the object to another variable does not create
// a new object. Both variables refer to the same object.

const person1 = {
    name: "John"
};

const person2 = person1;

console.log("person1:", person1);
console.log("person2:", person2);

person2.name = "Alex";

console.log("person1 after change:", person1);
console.log("person2 after change:", person2);


// 6. Objects Have Shared Prototype Behavior

// Plain objects such as {} inherit from Object.prototype.

// Object.prototype provides shared methods such as toString().

const book = {
    title: "JavaScript"
};

console.log("book:", book);
console.log("book.toString():", book.toString());


// 7. The Prototype

// Object.prototype is the prototype shared by ordinary
// objects created with {}.

// This allows objects to access methods they do not
// directly define themselves.

console.log("Object.getPrototypeOf(book):", Object.getPrototypeOf(book));
console.log("typeof book.toString:", typeof book.toString);


// 8. Quick Comparison

const value = {
    name: "John"
};

console.log("object:", value);
console.log("object type:", typeof value);
console.log("array type:", typeof [1, 2, 3]);
console.log("function type:", typeof function() {});


// 9. Final Check

const student = {
    name: "Alice",
    age: 20
};

// student refers to the object containing the name and age properties.
console.log("student:", student);

// student is an object, so typeof returns "object".
console.log("typeof student:", typeof student);

// student.name accesses the value of the name property, which is "Alice".
console.log("student.name:", student.name);

// Object.getPrototypeOf(student) returns the prototype that student inherits from.
// A plain object created with {} inherits from Object.prototype.
console.log("Object.getPrototypeOf(student):", Object.getPrototypeOf(student));