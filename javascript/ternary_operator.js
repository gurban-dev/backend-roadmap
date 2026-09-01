// The ternary operator (also called the conditional operator)
// is a single-line if-else statement.

// It takes three operands:
// the condition
// a result for true
// a result for false

// Syntax:
// condition ? result_if_true : result_if_false;

let category;

let age = 18;

if (age >= 18) {
    category = "Legal adult";
} else {
    category = "Legal minor";
}

console.log("category:", category, "\n");

age = 17;

category = (age >= 18) ? "Legal adult" : "Legal Minor";

console.log("category:", category);