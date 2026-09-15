// The loose equality operator (==) allows type coercion.
// JavaScript may convert one value to another data type before
// performing the comparison.


// Example 1: Number compared with a String.

// 5 is a Number.
// "5" is a String.

// JavaScript converts "5" into the Number 5.
// The comparison effectively becomes:
// 5 == 5

// Therefore, the result is true.

console.log('5 == "5":', 5 == "5");


// Example 2: Decimal number compared with a String.

// 5.0 is a Number.
// "5" is a String.

// 5 and 5.0 have the same numeric value.
// JavaScript converts "5" into the Number 5.

// The comparison effectively becomes:
// 5 == 5

// Therefore, the result is true.

console.log('5.0 == "5":', 5.0 == "5");


// Example 3: Boolean compared with a Number.

// true is a Boolean.
// 1 is a Number.

// JavaScript converts true into the Number 1.

// The comparison effectively becomes:
// 1 == 1

// Therefore, the result is true.

console.log("true == 1:", true == 1);


// The strict equality operator (===) does not perform
// type coercion.

// JavaScript checks whether both the value and data type
// are the same.


// Example 4: Number compared with a String.

// 5   -> Number
// "5" -> String

// The data types are different, so the result is false.

console.log('5 === "5":', 5 === "5");


// Example 5: Boolean compared with a Number.

// true -> Boolean
// 1    -> Number

// The data types are different, so the result is false.

console.log("true === 1:", true === 1);


// Key difference:
// ==  -> Allows type coercion before comparing.
// === -> Does not perform type coercion.

// For this reason, === is generally preferred because it makes
// comparisons more predictable.