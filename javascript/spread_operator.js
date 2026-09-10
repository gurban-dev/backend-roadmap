// Learning goal:
// Understand that the spread operator can take the elements
// of an array and place those elements into another array.
const arr1 = [1, 2];

// Create a new array containing all of the numbers from
// arr1 plus 3 and 4 without manually writing all of the
// numbers that were in arr1.

// ... is the spread operator and it precedes the name of the
// variable that references the array whose elements should be
// spread into the new array. The spread operator cannot be
// placed on the right side of the variable name:
// const arr2 = [arr1..., 3, 4];

// The spread operator must be placed before the variable name:
const arr2 = [...arr1, 3, 4];

// Begin inserting arr1's elements starting from index one.
const arr3 = [0, ...arr1, 3, 4];

console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3, "\n");

const originalUser = {
    name: "Alice",
    age: 25,

    // 'address' refers to a nested object.
    // The object is nested because it's a plain object
    // inside of another plain object.
    address: {
        city: "Toronto"
    }
};

// Shallow copy
// The spread operator creates a new object called shallowCopiedUser.

// It copies the properties that are directly inside originalUser:
// name, age, and address.

// Top-level contents are properties directly inside an object
// or elements directly inside an array.

// shallowCopiedUser is a different object from originalUser.

// The values of name and age are copied into shallowCopiedUser.

// However, the value stored in address is another object.

// The spread operator does not create a new copy of that inner object.

// Therefore, originalUser.address and shallowCopiedUser.address refer
// to the same object containing the city property.

const shallowCopiedUser = {...originalUser};

// A shallow copy typically requires less time and memory than a
// deep copy because nested objects are reused rather than copied.
console.log("originalUser:", originalUser);
console.log("shallowCopiedUser:", shallowCopiedUser);

shallowCopiedUser.age = 26;

// Changing shallowCopiedUser.age does not change originalUser.age
// because the number assigned to age is copied separately.
console.log("\noriginalUser.age:", originalUser.age);
console.log("shallowCopiedUser.age:", shallowCopiedUser.age);

// originalUser.address and shallowCopiedUser.address both refer to
// the same object that contains the city property.
shallowCopiedUser.address.city = "Vancouver";

console.log("\noriginalUser.address.city:", originalUser.address.city);
console.log("shallowCopiedUser.address.city:", shallowCopiedUser.address.city);

// Deep copy:
// structuredClone() creates a new copy of the nested objects.

// Unlike the shallow copy, structuredClone() creates a separate
// copy of originalUser and its nested address object.

// Therefore, originalUser and deepCopy do not share the same object
// stored in their address properties.

// A deep copy typically requires more time and memory because
// nested objects are copied rather than reused.
const deepCopy = structuredClone(originalUser);

// Changing the city in deepCopy does not change the city in originalUser.
deepCopy.address.city = "Montreal";

console.log("\noriginalUser:", originalUser);
console.log("deepCopy:", deepCopy);