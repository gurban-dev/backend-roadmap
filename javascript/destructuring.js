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

// JavaScript provides a shorter way for accessing items in an array.
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

// Without destructuring:
const studentName = student.name;
const studentAge = student.age;

// With destructuring:
const { name, age } = student;

console.log(`name: ${name}\n`);
console.log(`age: ${age}\n`);

// Extract the value of the 'grade' property and store it in
// a variable named 'letterGrade'.
const { grade: letterGrade } = student;

console.log(`letterGrade: ${letterGrade}`);