// Array composed of items with distinct data types.
const student_info = ["Alice", 10, true];

// Display the entire array with a whitespace character as
// the separator.
console.log(`student_info: ${student_info.join(" ")}`);

// Display the first element in the array.
console.log(`\nstudent_info[0]: ${student_info[0]}`);

// Display the last element in the array.

// Unlike Python, -1 indexing to access the last element
// is not native in JavaScript.

// In this context, the word "native" means that a feature
// is built directly into the core JavaScript language.
// console.log(`\nstudent_info[-1]: ${student_info[-1]}`);

// The .at() method was introduced and it natively supports
// negative integers.
console.log(`\nstudent_info.at(-1): ${student_info.at(-1)}`);

const fruits = ["orange", "madarin", "apple"];

// Add an item to the end of the array.
fruits.push("fig");

console.log(`\nfruits: ${fruits.join(" ")}`)

// Remove the item at the end of the array.
fruits.pop()

// Insert an element at a particular index.
// The element at that index gets pushed to the right
// just as the ones that follow it.

// Syntax:
// .splice(index_to_insert_at, no_of_items_to_remove, item_to_insert);

// The .splice() method cannot accept keyword arguments; it only
// accepts positional arguments.

// Positional arguments (no parameters included):
// order_coffee("Medium", "Oat Milk", true);

// Keyword arguments (parameter names included):
// order_coffee(size="Medium", milk="Oat Milk", is_iced=true);

// The parameter names are: size, milk and is_iced

fruits.splice(1, 0, "clementine");

console.log(`\nfruits: ${fruits.join(" ")}`)

// If an integer greater than zero is passed as an argument for
// the no_of_items_to_remove parameter, an array containing the
// items that were removed will be returned.

const removed_fruits = fruits.splice(0, 2, "avocado");

console.log(`\nremoved_fruits: ${removed_fruits.join(" ")}`)

console.log(`\nfruits: ${fruits.join(" ")}`)

// Add an item to the beginning.
fruits.unshift("apricot");

console.log(`\nfruits: ${fruits.join(" ")}`)

// Remove the item at the beginning.
fruits.shift();

console.log(`\nfruits: ${fruits.join(" ")}`)