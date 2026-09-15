// Concepts:
// Spread Operator, Shallow Copy, and Deep Copy.

// Part 1: 
// You are given the following array:
// arr = [10, 20];

// Part 2: Array Spread.
// Create a new array called updatedNumbers that contains:
// 10, 20, 30, 40.

// You must use the spread operator.
// Do not manually write 10 and 20.

// Create another array called moreNumbers that contains:
// 0, 10, 20, 30, 40.

// You must use the spread operator.

// Print all three arrays.
// The output should allow you to compare the original array
// with the two new arrays.

// Part 3: Shallow Copy.
// Create a plain object called user with:
// name: "Alice"
// age: 25
// address: { city: "Toronto" }

// Create a shallow copy of user called shallowCopy.
// Use the spread operator.

// Change the age property of shallowCopy to 30.

// Print user.age and shallowCopy.age.
// Does changing the age in shallowCopy change user.age?

// Change the city property inside shallowCopy.address to "Vancouver".

// Print user.address.city and shallowCopy.address.city.

// Does changing the city in shallowCopy also change the city in user?

// Part 4: Deep Copy.
// Create a deep copy of user called deepCopy.
// Use structuredClone().

// Change the city property inside deepCopy.address to "Montreal".

// Print user.address.city and deepCopy.address.city.
// Does changing the city in deepCopy also change the city in user?

// Part 5: Shallow vs. Deep Copy
// Why does changing shallowCopy.address.city also change user.address.city,
// while changing deepCopy.address.city does not change user.address.city?