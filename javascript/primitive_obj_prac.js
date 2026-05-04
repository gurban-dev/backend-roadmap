// Behaviour of primitives.

let a = 10;

// b is assigned a copy of the value of a.
let b = a;

// Reassigning a does not affect b.
a = 20;

// b is reassigned to the new value of a.
b = a;

console.log('b:', b);


// Both variables reference the same object, so mutations affect both.

let obj1 = { value: 10 };

// obj2 is assigned a reference to the same object as obj1.
let obj2 = obj1;

// Mutating the object through obj2 affects obj1.
obj2.value = 20;

console.log(`\nobj1.value: ${obj1.value}`);
console.log(`obj2.value: ${obj2.value}`);