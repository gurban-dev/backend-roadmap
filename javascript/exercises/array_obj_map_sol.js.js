/*
A school stores information about its students.

Each student is represented as a JavaScript object.

The program should create a new array that contains
only the students' first names.
*/

const students = [
    {
        firstName: "Alice",
        gpa: 3.9
    },
    {
        firstName: "Bob",
        gpa: 3.4
    },
    {
        firstName: "Charlie",
        gpa: 3.2
    }
];

// Use .map() to create a new array that contains
// only each student's first name.

// The .map() method calls the arrow function once for
// each student object in the students array.

// During each call, student references the current
// student object.

// The firstName property is accessed from the current
// student object and returned.

// Each returned first name is added to the new array.
const studentNames = students.map((student) => {
    return student.firstName;
});

// Display the contents of each object in the original array
// using .forEach().
students.forEach((student) => {
    console.log(`firstName: ${student.firstName}`);
    console.log(`gpa: ${student.gpa}\n`);
});

// Display the new array using .join(" ").
console.log("studentNames:", studentNames.join(" "));

// Use a concise arrow function to create another array
// that contains only each student's first name.

// Since the arrow function has exactly one parameter,
// the parentheses around student can be omitted.

// Since the arrow function only needs to produce one
// result, the curly braces can be omitted.

// Without curly braces, JavaScript automatically returns
// the result of student.firstName.
const conciseStudentNames = students.map(
    student => student.firstName
);

// Display the array created with the concise arrow
// function.
console.log(
    "\nconciseStudentNames:",
    conciseStudentNames.join(" ")
);