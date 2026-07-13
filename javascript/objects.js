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

// -An object is made up of properties and values that they
// correspond to.

// This is known as JSON which stands for JavaScript Object
// notation.

// JSON rules to abide by:
// 1. All strings must be written with double quotation marks.
// 2. Functions cannot be stored inside JSON.
// 3. The last item in an object cannot have a comma after it.
// 4. The allowed data types are: strings, numbers, booleans,
//    arrays, object and null.

// JSON.stringify(
//     value,
//     replacer,
//     space
// )

// value: The object to convert to JSON.
// replacer: Optionally customizes the output.
// space: Controls the indentation of the output.
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