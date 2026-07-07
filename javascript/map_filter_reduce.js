const numbers = [2, 4, 6, 8, 10];

// map() is a built-in array method.

// It creates a new array by applying a function to every
// element.
const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

// Notice how the original array did not change.
console.log("numbers:", numbers, "\n");

console.log("doubledNumbers:", doubledNumbers, "\n");

const cityNames = ["ottowa", "washington, D.C."];

// uppercasedCityNames is the name of the variable that references
// the new array that the .map() method will return.
const uppercasedCityNames = cityNames.map((cityName) => {
    // Invoking one method immediately after another with dot notation,
    // is known are method chaining.

    // .slice(1) extracts the characters beginning at index 1
    // through the end of the string.
    return cityName.charAt(0).toUpperCase() + cityName.slice(1);
});

console.log("cityNames:", cityNames, "\n");

console.log("uppercasedCityNames:", uppercasedCityNames, "\n");

// An array of objects that were fetched from a database.
const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Charlie", role: "Guest" }
];

// Extract a single property from the array of objects.

// user => user.name is a concise arrow function with an
// implicit return.

// Rule 1:
// If a function takes exactly one parameter, you can omit
// the parentheses.

// Rule 2:
// If the body of the arrow function only contains one line
// of code, you can remove the curly braces.

// Rule 3:
// When you omit the curly braces, JavaScript automatically
// returns the value of the expression.
const userNames = users.map(user => user.name);

// const userNames = users.map(user => user["name"]);

console.log("userNames:", userNames);