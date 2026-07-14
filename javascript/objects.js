// Create an object named user.
const user = {
    name: "Alice",
    age: 25,
    state: "Massachusetts",

    // Nested object named address.
    "address": {
        "city": "Boston"
    },

    2: "two"
};

// An object is made up of properties, and each property has a
// corresponding value.

// This is a JavaScript object.

// JavaScript Object Notation, or JSON, is a text-based data
// format commonly used to store and exchange data.

// JSON.stringify() converts a JavaScript value into a JSON
// string.

// JSON syntax rules:
// 1. All strings must be written with double quotation marks.
// 2. Functions cannot be stored inside JSON.
// 3. The last item in an object cannot have a comma after it.
// 4. The allowed data types are: strings, numbers, booleans,
//    arrays, objects and null.

// JSON.stringify(
//     value,
//     replacer,
//     space
// )

// value: The JavaScript value to convert to a JSON string.
// replacer: Optionally customises which values are included.
// space: Controls the indentation of the JSON string.
console.log(`user: ${JSON.stringify(user, null, 4)}\n`);

// Access the name property using dot notation.
console.log('user.name:', user.name, '\n');

// Dot notation is widely preferred because it is concise
// and makes property access easier to read.

// Dot notation reduces visual clutter since symbols like
// brackets and quotation marks are not needed. This makes
// it easier to skim complex code quickly.

// Bracket notation is useful when the property name is
// stored in a variable or contains spaces or special
// characters.

// Access the state property using bracket notation.
console.log("user[\"state\"]:", user["state"], '\n');

// Access the address property using dot notation.
console.log('user.address.city:', user.address.city, '\n');

// Access the nested city property using bracket notation.
console.log("user[\"address\"][\"city\"]:", user["address"]["city"], '\n');

// Access the numeric property using bracket notation.
// You cannot write user.2 because that produces a syntax error.

// Numeric property keys like the number 2 are converted to strings
// when the object is converted to JSON.
console.log("user[2]:", user[2]);