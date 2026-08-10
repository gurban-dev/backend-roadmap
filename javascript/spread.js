// Learning goal:
// Understand that the spread operator can take the elements
// of an array and place those elements into another array.

const arr1 = [1, 2];

// Create a new array containing all of the numbers from
// arr1 plus 3 and 4 without manually writing all of the
// numbers in arr1.

// ... is the spread operator and it precedes the name
// of the variable that references the array whose items
// should be copied into the new array.
const arr2 = [arr1, 3, 4];

console.log("arr2:", arr2);