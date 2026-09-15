/*
 * JavaScript: Nullish Coalescing Operator (??)
 *
 * The ?? operator gives us a fallback value when an expression
 * is null or undefined.
 */

// Imagine we want to display a user's nickname.
const nickname = null;

// If nickname exists, use it.
// Otherwise, use "Guest".
const displayName = nickname ?? "Guest";

console.log("displayName:", displayName);


// Here, the nickname has a value.
const nickname2 = "John";

const displayName2 = nickname2 ?? "Guest";

console.log("displayName2:", displayName2);


/*
 * Remember:
 * ?? only uses the fallback value when the left side is
 * null or undefined.
 */

const lastName = null;
const result = lastName ?? "No last name provided";

console.log("result:", result);