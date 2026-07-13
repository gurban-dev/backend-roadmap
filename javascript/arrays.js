// Array composed of items with distinct data types.
const studentInfo = ["Alice", 10, true];

// Display the entire array with a space character as
// the separator.
console.log(`studentInfo: ${studentInfo.join(" ")}`);

// Display the first element in the array.
console.log(`\nstudentInfo[0]: ${studentInfo[0]}`);

// Display the last element in the array.

// Unlike Python, -1 indexing to access the last element
// is not native in JavaScript.

// In this context, the word "native" means that a feature
// is built directly into the core JavaScript language.
// console.log(`\nstudentInfo[-1]: ${studentInfo[-1]}`);

// The .at() method was introduced to allow indexing from
// either end of an array. It natively supports negative
// indices.
console.log(`\nstudentInfo.at(-1): ${studentInfo.at(-1)}`);

const fruits = ["orange", "mandarin", "apple"];

// Add an item to the end of the array.

// The .push() method will return the updated number of
// items in the array.
fruits.push("fig");

console.log(`\nfruits: ${fruits.join(" ")}`)

// Remove the item at the end of the array.
fruits.pop()

// Insert an element at a particular index.
// The element currently at that index and all following
// elements are shifted one position to the right.

// Syntax:
// .splice(start, deleteCount, item1, item2, ..., itemN);

// -start

// -deleteCount

// Insert an element at the beginning of an array without
// removing any existing items:
fruits.splice(0, 0, "watermelon");

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

// In this case, 0 would be assigned to the start index
// which represents where the item will be inserted.

// "avocado" would be assigned to the deleteCount parameter
// which means that a string would be coerced to a Number.
const removed_fruits = fruits.splice(0, "avocado");

console.log(`\nremoved_fruits: ${removed_fruits.join(" ")}`)

console.log(`\nfruits: ${fruits.join(" ")}`)

// Add an item to the beginning.

// The .unshift() method returns the updated number of
// items in the array.
fruits.unshift("apricot");

console.log(`\nfruits: ${fruits.join(" ")}`)

// Remove the item at the beginning.

// The .shift() method will return the item that was
// removed.
fruits.shift();

// Since there isn't an item being added to the array,
// only the first and second arguments are provided.

// This simply removes one item starting from index 0.
// fruits.splice(0, 1);

console.log(`\nfruits: ${fruits.join(" ")}`)