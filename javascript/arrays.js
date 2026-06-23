// Array composed of items with distinct data types.
const students = ["Alice", 10, true];

// Display the entire array with a whitespace character as
// the separator.
console.log(`students: ${students.join(" ")}`);

// Display the first element in the array.
console.log(`\nstudents[0]: ${students[0]}`);

// Display the last element in the array.

// Unlike Python, -1 indexing to access the last element
// is not native in JavaScript.

// In this context, the word "native" means that a feature
// is built directly into the core JavaScript language.
// console.log(`\nstudents[-1]: ${students[-1]}`);

// The .at() method was introduced and it natively supports
// negative integers.
console.log(`\nstudents.at(-1): ${students.at(-1)}`);

const fruits = ["orange", "madarin", "apple"];

// Add an item to the end of the array.
fruits.push("fig");

console.log(`\nfruits: ${fruits.join(" ")}`)

// Remove the last item.
fruits.pop()

// Insert an element at particular index.
// The element at that index gets pushed to the right
// just as the ones that follow it.

// Syntax:
// .splice(index_to_insert_at, no_of_items_to_remove, item_to_insert);

// The .splice() method cannot accept keyword argument; it only
// accepts positional arguments.

// Positional arguments (no parameters included):
// order_coffee("Medium", "Oat Milk", true);

// Keyword arguments (parameter names included):
// order_coffee(size="Medium", milk="Oat Milk", is_iced=true);

// The parameter names are: size, milk and is_iced

fruits.splice(1, 0, "clementine");

console.log(`\nfruits: ${fruits.join(" ")}`)

// Add an item to the beginning.
fruits.unshift("apricot");

console.log(`\nfruits: ${fruits.join(" ")}`)

// Remove the item at the beginning.
fruits.shift();

console.log(`\nfruits: ${fruits.join(" ")}`)