// Concepts:
// Spread Operator
// Shallow Copy
// Deep Copy


// Part 1: Original Array

// This is the original array that we will copy and extend.
const arr = [10, 20];


// Part 2: Array Spread

// The spread operator (...) takes each element from arr
// and places those elements into the new array.
const updatedNumbers = [...arr, 30, 40];

// We can also spread arr into a new array while adding
// another value before the copied elements.
const moreNumbers = [0, ...arr, 30, 40];

// Print all three arrays so we can compare them.
console.log("Original array:", arr);
console.log("Updated numbers:", updatedNumbers);
console.log("More numbers:", moreNumbers);

// Expected output:
// Original array: [10, 20]
// Updated numbers: [10, 20, 30, 40]
// More numbers: [0, 10, 20, 30, 40]


// Part 3: Shallow Copy

// This object contains a nested address object.
const user = {
    name: "Alice",
    age: 25,
    address: {
        city: "Toronto"
    }
};

// The spread operator creates a new object with the
// properties from user copied into it.
const shallowCopy = { ...user };

// Change the age in the shallow copy.
shallowCopy.age = 30;

// age is a primitive value, so changing the copy's age
// does not change the original object's age.
console.log("\nuser.age:", user.age);
console.log("shallowCopy.age:", shallowCopy.age);

// Expected output:
// user.age: 25
// shallowCopy.age: 30

// Change the city inside the nested address object.
shallowCopy.address.city = "Vancouver";

// Because the spread operator only creates a shallow copy,
// user.address and shallowCopy.address refer to the same object.
console.log("\nuser.address.city:", user.address.city);
console.log("shallowCopy.address.city:", shallowCopy.address.city);

// Expected output:
// user.address.city: Vancouver
// shallowCopy.address.city: Vancouver


// Part 4: Deep Copy

// structuredClone() creates a deep copy of the object,
// including a separate copy of the nested address object.
const deepCopy = structuredClone(user);

// Change the city inside the deep copy.
deepCopy.address.city = "Montreal";

// The nested address objects are separate, so changing
// deepCopy.address does not change user.address.
console.log("\nuser.address.city:", user.address.city);
console.log("deepCopy.address.city:", deepCopy.address.city);

// Expected output:
// user.address.city: Vancouver
// deepCopy.address.city: Montreal


// Part 5: Shallow vs. Deep Copy

// A shallow copy only copies the first level of an object.
// The nested address object is still shared between user
// and shallowCopy.

// A deep copy creates a completely separate copy of the
// object and its nested objects.

// Therefore:
// shallowCopy.address === user.address -> true
// deepCopy.address === user.address -> false

console.log("Same address in shallow copy:",
            shallowCopy.address === user.address);

console.log("\nSame address in deep copy:",
            deepCopy.address === user.address);

// Expected output:
// Same address in shallow copy: true
// Same address in deep copy: false