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
// Task 1.
// ============================================================

function getStudentNames(students) {
    return students.map(student => student.name);
}


// ============================================================
// Task 2.
// ============================================================

function getAdultStudents(students) {
    return students.filter(student => student.age >= 18);
}


// ============================================================
// Task 3.
// ============================================================

function getAverageGrade(grades) {
    return grades.reduce(
        (sum, grade) => sum + grade,
        0
    ) / grades.length;
}


// ============================================================
// Task 4.
// ============================================================

function addAverageGrade(students) {
    return students.map(student => ({
        ...student,
        averageGrade: getAverageGrade(student.grades)
    }));
}


// ============================================================
// Task 5.
// ============================================================

function findStudent(students, id) {
    return students.find(student => student.id === id);
}


// ============================================================
// Task 6.
// ============================================================

function getStudentDescription(student) {
    const { name, age } = student;

    return `${name} is ${age} years old.`;
}


// ============================================================
// Task 7.
// ============================================================

function addStudent(students, student) {
    return [...students, student];
}


// ============================================================
// Task 8.
// ============================================================

function getPassingAdultNames(students) {
    return students
        .filter(student => student.age >= 18)
        .filter(student => getAverageGrade(student.grades) >= 70)
        .map(student => student.name);
}


// ============================================================
// Task 9.
// ============================================================

function processStudents(students, callback) {
    students.forEach(student => {
        callback(student);
    });
}


// ============================================================
// Task 10.
// ============================================================

function fetchStudents() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(students);
        }, 1000);
    });
}


// ============================================================
// Task 11.
// ============================================================

async function displayStudents() {
    const students = await fetchStudents();

    students.forEach(student => {
        console.log(student.name);
    });
}


// ============================================================
// Task 12.
// ============================================================

async function displayStudentsSafely() {
    try {
        const students = await fetchStudents();

        students.forEach(student => {
            console.log(student.name);
        });
    } catch (error) {
        console.error("Failed to fetch students.");
    }
}