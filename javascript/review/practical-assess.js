/*
Student Management System.

You will progressively implement the functions below.

Try to solve each problem yourself before asking for help.
*/


const students = [
    {
        id: 1,
        name: "Alice",
        age: 22,
        grades: [85, 90, 92]
    },
    {
        id: 2,
        name: "Bob",
        age: 17,
        grades: [70, 65, 80]
    },
    {
        id: 3,
        name: "Charlie",
        age: 25,
        grades: [95, 88, 91]
    },
    {
        id: 4,
        name: "Diana",
        age: 19,
        grades: [60, 72, 68]
    }
];


// ============================================================
// Task 1: Get Names.
// ============================================================

/*
Create a function called getStudentNames.

It should accept the students array and return:
[
    "Alice",
    "Bob",
    "Charlie",
    "Diana"
]

Use map().
*/

function getStudentNames(students) {
    // Write your solution here.
}


// Test your function.

console.log(getStudentNames(students));


// ============================================================
// Task 2: Get Adults.
// ============================================================

/*
Create a function called getAdultStudents.

Return only students who are at least 18 years old.

Use filter().
*/

function getAdultStudents(students) {
    // Write your solution here.
}

console.log(getAdultStudents(students));


// ============================================================
// Task 3: Calculate Average Grade.
// ============================================================

/*
Create a function called getAverageGrade.

It should accept an array of grades.

For example:
getAverageGrade([80, 90, 100])

should return:

90

Use reduce().
*/

function getAverageGrade(grades) {
    // Write your solution here.
}

console.log(getAverageGrade([80, 90, 100]));


// ============================================================
// Task 4: Add Average Grade.
// ============================================================

/*
Create a function called addAverageGrade.

It should return a NEW array of student objects.

Each student should have an additional property:
averageGrade

For example:
{
    id: 1,
    name: "Alice",
    age: 22,
    grades: [85, 90, 92],
    averageGrade: 89
}

Use map().

Do not modify the original students.
*/

function addAverageGrade(students) {
    // Write your solution here.
}

const studentsWithAverages = addAverageGrade(students);

console.log(studentsWithAverages);
console.log(students);


// ============================================================
// Task 5: Find a Student.
// ============================================================

/*
Create a function called findStudent.

It should accept:

1. The students array.
2. A student ID.

It should return the matching student.

Use find().
*/

function findStudent(students, id) {
    // Write your solution here.
}

console.log(findStudent(students, 3));


// ============================================================
// Task 6: Destructuring.
// ============================================================

/*
Rewrite the following function using object destructuring.

function getStudentDescription(student) {
    return student.name + " is " + student.age + " years old.";
}
*/

function getStudentDescription(student) {
    // Write your solution here.
}

console.log(
    getStudentDescription(students[0])
);


// ============================================================
// Task 7: Spread Operator.
// ============================================================

/*
Create a function called addStudent.

It should accept:
1. The existing students array.
2. A new student.

It should return a new array containing all existing
students and the new student.

Do not modify the original array.

Use the spread operator.
*/

function addStudent(students, student) {
    // Write your solution here.
}

const newStudent = {
    id: 5,
    name: "Ethan",
    age: 21,
    grades: [88, 91, 84]
};

const updatedStudents = addStudent(students, newStudent);

console.log(updatedStudents);
console.log(students);


// ============================================================
// Task 8: Combined Operations.
// ============================================================

/*
Create a function called getPassingAdultNames.

A passing student:
1. Is at least 18 years old.
2. Has an average grade of at least 70.

Return an array containing only their names.

Example:
[
    "Alice",
    "Charlie",
    ...
]

You should use filter(), map(), and your
getAverageGrade() function.
*/

function getPassingAdultNames(students) {
    // Write your solution here.
}

console.log(getPassingAdultNames(students));


// ============================================================
// Task 9: Callback.
// ============================================================

/*
Create a function called processStudents.

It should accept:
1. An array of students.
2. A callback function.

The function should pass every student to the callback.

For example:
processStudents(students, function(student) {
    console.log(student.name);
});

Use forEach().
*/

function processStudents(students, callback) {
    // Write your solution here.
}


// Test it.

processStudents(students, function(student) {
    console.log(student.name);
});


// ============================================================
// Task 10: Promise.
// ============================================================

/*
Create a function called fetchStudents.

It should return a Promise.

After one second, the Promise should resolve
with the students array.

Use setTimeout().
*/

function fetchStudents() {
    // Write your solution here.
}


// ============================================================
// Task 11: async/await.
// ============================================================

/*
Create an async function called displayStudents.

It should:
1. Call fetchStudents().
2. Wait for the Promise.
3. Print the names of all students.

Use await.
*/

async function displayStudents() {
    // Write your solution here.
}

displayStudents();


// ============================================================
// Task 12: Error Handling.
// ============================================================

/*
Modify displayStudents() so that it handles
a rejected Promise.

Use try/catch.
*/

async function displayStudentsSafely() {
    // Write your solution here.
}