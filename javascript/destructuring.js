// Objective:
// Learn how destructuring provides a shorter way to extract
// values from arrays and properties from plain objects.

// Destructuring is a JavaScript feature that lets you extract
// values from arrays or properties from objects into variables.

// With array destructuring, variables receive values based on
// their position in the array.

// Array
const colors = ["red", "green", "blue"];

// Indexing
const firstColor = colors[0];
const secondColor = colors[1];

// With destructuring, JavaScript provides a shorter way for
// accessing items in an array.

// Unpacking the items begins from the beginning of the array.
// Meaning that the first variable written inside of the square
// brackets will be assigned the first item in the array.

// The ordering of variables matters when destructuring elements.
// If these two variables were to switch places, they would be
// assigned different colors.
const [firstColour, secondColour] = colors;

console.log(`firstColour: ${firstColour}\n`);
console.log(`secondColour: ${secondColour}\n`);

// Plain object
const student = {
    name: "Alice",
    age: 20,
    grade: "A"
};

// With object destructuring, JavaScript matches properties by
// their names, not by their position.

// Variables must match the property names because object unpack
// data by exact name matches.

// Without destructuring:
const studentName = student.name;
const studentAge = student.age;

// With destructuring:

// When destructuring a a plain object, the order does not
// make a difference.
const { age, name } = student;

console.log(`name: ${name}\n`);
console.log(`age: ${age}\n`);

// Extract the value of the 'grade' property and store it in
// a variable named 'letterGrade'.
const { grade: letterGrade } = student;

console.log(`letterGrade: ${letterGrade}`);

const apiResponse = null;

// || {} acts a safety mechanism called a logical fallback.
// This guarantees that even if your data is null or undefined,
// your code will still have a valid object to interact with.

// || is the OR operator.
// The logical OR operator evaluates expressions from left to
// right. It checks the first value is truthy.
const { response } = apiResponse || {};