// Concepts:
// Loose equality operator.
// Strict equality operator.

// Instructions:
// For each instruction, first predict what will happen.
// Then run the code to check your answer.

// What does == compare?

// The == operator performs type coercion when the two values
// have different data types.

// The number 5 is compared with the string "5".
// JavaScript converts the string "5" to the number 5.
// Therefore, the comparison is true.
console.log("5 == \"5\":", 5 == "5");

// The number 5 is compared with the string "5.0".
// JavaScript converts the string "5.0" to the number 5.
// Therefore, the comparison is true.
console.log("5 == \"5.0\":", 5 == "5.0");


// What does === compare?

// The === operator compares both the value and the data type.

// The number 5 and the string "5" have different data types.
// Therefore, the comparison is false.
console.log("5 === \"5\":", 5 === "5");

// The == operator performs type coercion.
// The boolean true is converted to the number 1.
// Therefore, 1 == 1 is true.
console.log("true == 1:", true == 1);

// The === operator does not perform type coercion.

// true is a boolean, while 1 is a number.
// Because their data types are different, the comparison is false.
console.log("true === 1:", true === 1);


// Answers:
// 1. What does == compare?

// == compares values after performing type coercion when necessary.
// This means JavaScript may convert one value to another data type
// before comparing them.

// Example:
// 5 == "5" is true because "5" is converted to the number 5.


// 2. What does === compare?

// === compares both the value and the data type.
// It does not perform type coercion.

// Example:
// 5 === "5" is false because 5 is a number and "5" is a string.


// 3. Why do 5 == "5" and 5 === "5" produce different results?

// 5 == "5" is true because == converts the string "5" to the number 5.
// The comparison becomes 5 == 5.

// 5 === "5" is false because === does not convert the string.
// The values have different data types:
// 5 is a number.
// "5" is a string.

// Therefore, the comparisons produce different results.