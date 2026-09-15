// Primitive data types (immutable).

// Both of the following are Number data types.
let num = 10;
let num_decimal = 10.5;

console.log(`typeof(num): ${typeof(num)}`);
console.log(`typeof(num_decimal): ${typeof(num_decimal)}`);

// BigInt data types.
const id1_bigint = 123456789012345678n;

// const id1_bigint = BigInt(123456789012345678);
const id2_bigint = BigInt(123456789012345677);

// Number data types.
const id1_number = 123456789012345678;
const id2_number = 123456789012345677;

// === is the strict equality operator.
// It returns false if the two operands being compared are of different data types.
console.log(`\nid1_bigint === id2_bigint: ${id1_bigint === id2_bigint}`);
console.log(`\nid1_number === id2_number: ${id1_number === id2_number}`);

// String data types.
let colour = "Magenta";
let firstName = 'Oliver';

// Boolean data types.
let hotOutside = true;
let notRaining = false;

// Undefined.
let country;

// Null.
let winnerOfWorldCup = null;

// Objects (mutable).

// Plain object.
const person = { firstName: "John", lastName: "Locke" };

// Array object.
const countries = ["Canada", "Norway", "Morocco"];

// Date object.
const date = new Date("03-05-2026");

// Set object.
const fruits = new Set(['apple', 'banana', 'banana']);

fruits.add('apple');

console.log('\nfruits:', fruits);

// Map object.
const map = new Map([
    ['first_name', 'John'],
    ['country', 'England']
]);

console.log('\nmap.get(\'first_name\'):', map.get('first_name'));