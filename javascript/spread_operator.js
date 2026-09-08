// Learning goal:
// Understand that the spread operator can take the elements
// of an array and place those elements into another array.
const arr1 = [1, 2];

// Create a new array containing all of the numbers from
// arr1 plus 3 and 4 without manually writing all of the
// numbers that were in arr1.

// ... is the spread operator and it precedes the name of
// the variable that references the array whose elements
// should be spread into the new array. The spread cannot
// cannot be placed after the name of the variable.
const arr2 = [...arr1, 3, 4];

const arr3 = [0, ...arr1, 3, 4];

console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3, "\n");

const user = {
    name: "Alice",
    age: 25,

    // address refers to a nested object.
    // The object is nested because it's a plain object
    // inside of another plain object.
    address: {
        city: "Toronto"
    }
};

// Shallow copy
// The spread operator creates a new object called shallowCopiedUser.

// It copies the properties that are directly inside user: name, age,
// and address.

// Top-level contents refer to the properties or items that are
// directly inside plain objects or arrays.

// shallowCopiedUser is a different object from user.

// The values of name and age are copied into shallowCopiedUser.

// However, the value stored in address is another object.

// The spread operator does not create a new copy of that inner object.

// Therefore, user.address and shallowCopiedUser.address refer to the same
// object containing the city property.

const shallowCopiedUser = {...user};

// A shallow copy it requires less time and memory for the computer
// since the nested objects are not independent of the original.
// With a shallow copy, the nested object is reused.
console.log("user:", user);
console.log("shallowCopiedUser:", shallowCopiedUser);

shallowCopiedUser.age = 26;

// Changing the Number that the 'age' property in shallowCopiedUser
// is assigned, does not change the Number assigned to the
// 'age' property for the 'user' plain object.
console.log("\nuser.age:", user.age);
console.log("shallowCopiedUser.age:", shallowCopiedUser.age);

// user.address and shallowCopiedUser.address both refer to the same object
// that contains the city property.
shallowCopiedUser.address.city = "Vancouver";

console.log("\nuser.address.city:", user.address.city);
console.log("shallowCopiedUser.address.city:", shallowCopiedUser.address.city);

// Deep copy:
// structuredClone() creates a new copy of the nested objects.

// Unlike the shallow copy, structuredClone() creates a completely
// separate copy of user and the object stored in its address property.

// Therefore, user and deepCopy do not share the same object stored
// in their address properties.

// A deep copy requires more time and memory since the nested objects
// are not shared between the original and the copy.
const deepCopy = structuredClone(user);

// Changing the city in deepCopy does not change the city in user.
deepCopy.address.city = "Montreal";

console.log("\nuser:", user);
console.log("deepCopy:", deepCopy);