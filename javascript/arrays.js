// Array composed of items with different data types.
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

// The .pop() method will return the item that was removed at
// the end of the array.
fruits.pop()

// Insert an element at a particular index.
// The element currently at that index and all following
// elements are shifted one position to the right.

// Syntax:
// .splice(start, deleteCount, item1, item2, ..., itemN);

// start
// Specifies the index where splice() begins modifying the array.
// The element at this index is the first element that can be removed.
// A negative value counts backward from the end of the array.

// deleteCount
// Specifies how many elements should be removed starting at start.
// A value of 0 means that no elements are removed.
// If omitted, all elements from start to the end are removed.

// item1, item2, ..., itemN
// Specifies the new elements to insert into the array at start.
// These parameters are optional and can contain any JavaScript value.
// If no items are provided, splice() only removes elements.

// Insert an element at the beginning of an array without
// removing any existing items:

// The .splice() method always returns an array containing the
// removed items. If no items are removed, it returns an empty
// array.
fruits.splice(0, 0, "watermelon");

// The .splice() method does not support keyword arguments.
// JavaScript passes these arguments by position.

// Positional arguments:
// orderCoffee("Medium", "Oat Milk", true);

// Python-style keyword arguments are not supported in JavaScript.
// orderCoffee(size="Medium", milk="Oat Milk", isIced=true);

// The parameter names are size, milk, and isIced.

fruits.splice(1, 0, "clementine");

console.log(`\nfruits: ${fruits.join(" ")}`)

// If an integer greater than zero is passed as the deleteCount
// argument, splice() returns an array containing the removed
// items.

// 0 is assigned to the start parameter.
// 2 is assigned to the deleteCount parameter.
// "avocado" is assigned to the first item parameter.
let removedFruits = fruits.splice(0, 2, "avocado");

console.log(`\nremovedFruits: ${removedFruits.join(" ")}`);

// In this case, 0 is assigned to the start parameter,
// which specifies where splice() begins modifying the array.

// "avocado" is assigned to the deleteCount parameter.
// JavaScript attempts to convert the string to a number.

// Since "avocado" cannot be converted to a valid number,
// the conversion produces NaN. For deleteCount, NaN is
// treated as 0, so no items are removed.
removedFruits = fruits.splice(0, "avocado");

console.log(`\nremovedFruits: ${removedFruits.join(" ")}`);

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