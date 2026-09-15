// The loose equality operator (==) allows type coercion
// (type conversion).

// true is converted into a number.
// true becomes 1.
console.log("true == 1:", true == 1);

// The strict equality operator (===) checks for both the
// value and the data type equality without converting
// anything.

// Data types:
// true: Boolean
// 1: Number
console.log("true === 1:", true === 1);