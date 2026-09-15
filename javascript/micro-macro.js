/*
In JavaScript, microtasks and macrotasks are two different
types of tasks that the event loop processes.

Microtasks have a higher priority and are executed immediately
after the current synchronous code finishes, before the browser
processes the next macrotask.

Examples:
Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()

Note that Promise.then() does not have higher priority than
Promise.catch().

Both schedule microtasks. The one that executes first depends
on when it gets queued (when the callbacks are added to the
microtask queue).

Macrotasks are placed in the task queue and run one at a time
after all microtasks have been completed.

Examples:
setTimeout()
setInterval()
setImmediate()

I/O (Input/Output) operations
This communication between your JavaScript program and some
external software.

Examples:
fetch("/api/users")
fs.readFile("file.txt")
database.query(...)

UI (user interface) events (clicks, keyboard events)
UI events come from user interaction.

Examples:
button.addEventListener("click", handler)

input.addEventListener("keydown", handler)

JavaScript Code Execution Order Hierarchy
│
├── Synchronous Code
│   ├── Variable declarations
│   ├── Function calls
│   └── Loops
│
└── Asynchronous Code
    ├── Microtasks
    │   ├── Promise.then()
    │   ├── Promise.catch()
    │   └── queueMicrotask()
    │
    └── Macrotasks
        ├── setTimeout()
        ├── setInterval()
        ├── UI events
        └── I/O events

Note: The tasks listed under each category are examples, not a
priority ranking. Their position in the list under each category
does not determine their execution order. Execution is determined
by the type of task (synchronous, microtask or macrotask) and when
that task is queued.

Synchronous code is code that is executed immediately, one statement
at a time, in the order it appears, with each operation completing
before the next one begins.
*/

// Execution Order Example

// Synchronous
console.log("1");

// Given two macrotasks, they will be exectued in the order
// from top to bottom.

// Macrotask
setTimeout(() => {
    console.log(2);
}, 0);

// Macrotask
setTimeout(() => {
    console.log("3");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log(4);
})

// Synchronous
console.log('5');