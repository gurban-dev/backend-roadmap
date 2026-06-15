// Functions allow us to group code into reusable blocks.

// Remember that in a JavaScript program:
// • Two different functions cannot have the same name.
// • camelCase is the standard naming convention for JavaScript
//   function names.

// Traditional Function Syntax
function greetTrad(name) {
    return `Hello ${name}`;
}

// Arrow Function Syntax
const greetArrow = (name) => {
    return `Hello ${name}`;
};

// One-line Arrow Function Syntax
const greetOneLineArrow = (name) => `Hello ${name}`;

// In modern JavaScript codebases, arrow functions tend to
// be more common due to less syntax needed to write one.

// Arrow functions are declared with const keyword because it
// prevents the function variable from being accidentally
// reassigned:

// greetOneLineArrow = "Not a function anymore.";

// See functions_ex2.py.