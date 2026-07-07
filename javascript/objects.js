// Create an object named user.
const user = {
    name: "Alice",
    age: 25,
    state: "Massachusetts",

    // Nested object named address.
    address: {
        city: "Boston"
    }
};

// JSON.stringify(
//     value,
//     replacer,
//     space
// )

// value: The object to convert to JSON.
// replacer: Optionally customizes the output.
// space: Controls the indentation of the output.
console.log(`user: ${JSON.stringify(user, null, 1)}\n`);

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