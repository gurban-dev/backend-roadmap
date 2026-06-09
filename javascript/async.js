/*
How JavaScript Runs Code

JavaScript executes code one line at a time.

Each line must finish executing before the next line runs.
*/

console.log('Line 1');
console.log('Line 2');
console.log('Line 3');

// JavaScript functions are executed in the sequence that they're
// called. Not in the sequence that they're defined.

const greet_in_english = () => console.log('Hello!');

const greet_in_french = () => console.log('Bonjour!');

greet_in_french();

greet_in_english();

/*
Asynchronous code allows a program to begin a long-running task
(loading data from a file), and continue with other tasks before
the initial one finishes.

These tasks are run asychronously or at different times.

Control flow is the order in which statements in a program are
executed.

By default, JavaScript executes code from top to bottom and left
to right.

Asynchronous programming can change the order.
*/

console.log('A');

// Even if the delay is set to 0, this is still a macrotask.
// JavaScript will first run synchronous code before it empties
// the macrotask queue.
setTimeout(() => {
    console.log('B');
}, 0);

console.log('C');

let num;

// Asychronous code
setTimeout(() => {
    num = 10;
}, 0);

// 'num' is undefined because the line of sychronous code
// below was executed before JavaScript emptied the macrotask
// queue and assigned 10 to 'num'.

// The asynchronous code did not finish yet.
console.log(`num: ${num}`);