// =========================================================
// Introduction to JavaScript Promises
// =========================================================

// A Promise is an object that represents a value that will
// be available later on throughout a program.

// A Promise is a placeholder for a future result.

// Instead of immediately giving you a result, a Promise says:
// "I don't have the result yet, but I will eventually provide
// either a success value or an error."

// A Promise does not require a delay.

// It simply represents the eventual outcome of an operation.
// Sometimes the result is available immediately.
// Sometimes it arrives later.

// =========================================================
// Why Promises Exist
// =========================================================

// Many operations take time:
// • Downloading data from a server.
// • Reading a file.
// • Accessing a database.
// • Waiting for user input.

// JavaScript does not want to stop the entire program while
// waiting for these operations to finish.

// Promises allow JavaScript to continue running other code
// while waiting for the result.

// When the operation finishes, the Promise is updated with
// either a success value or an error.

// =========================================================
// Promise States
// =========================================================

// A Promise can be in one of three states:
// 1. Pending
//    The operation is still in progress.
// 2. Fulfilled
//    The operation succeeded.
// 3. Rejected
//    The operation failed.

// Once a Promise becomes fulfilled or rejected, its state
// cannot change again.

// =========================================================
// Creating a Promise
// =========================================================

// Promise is a built-in JavaScript class.

// The Promise constructor expects one argument:

// new Promise(executorFunction)

// The executor function is responsible for performing some
// work and eventually reporting success or failure.

const promise = new Promise((resolve, reject) => {

    // The Promise constructor provides these two functions:
    // resolve()
    // reject()

    // The executor uses them to report the outcome of the
    // operation.

    const success = true;

    // Simulate an operation that takes 3 seconds.

    // setTimeout() schedules a macrotask.

    // Without setTime(), this would simply be synchronous code.
    setTimeout(() => {

        if (success) {
            // Fulfill the Promise.
            resolve('Loaded successfully.');
        } else {
            // Reject the Promise.
            reject('Loading failed.');
        }

    }, 3000);
});

// =========================================================
// Consuming a Promise
// =========================================================

// .then() runs when the Promise is fulfilled.

// The parameter receives the value that was passed to
// resolve().

promise
    // .then() runs only when the Promise has been resolved.

    // The parameter named message, is assigned the argument that
    // was passed to resolve().
    .then((message) => {
        console.log(`message: ${message}`);
    })

    // .catch() runs only when the Promise has been rejected.

    // The parameter named error, is assigned the argument that
    // was passed to reject().
    .catch((error) => {
        console.log(`error: ${error}`);
    });

// =========================================================
// Execution Order
// =========================================================

console.log('Before Promise settles.');

// The Promise is still waiting for setTimeout().

console.log('After Promise settles.');

// The output will be:
// Before Promise settles.
// After Promise settles.
// Loaded successfully.

// because JavaScript continues running other code while
// waiting for the Promise to settle.

// =========================================================
// Promise Chaining
// =========================================================

// Promise.resolve(5) creates a Promise that is already
// fulfilled with the value 5.

// JavaScript always empties the microtask queue first before emptying
// the macrotask queue first which s why 'number: 11' is logged to the
// console before 'message: Loaded successfully.'.

// Promise.resolve.then() schedules a microtask.
Promise.resolve(5)

    // Receives 5.
    .then((number) => {
        return number * 2;
    })

    // Receives 10.
    .then((number) => {
        return number + 1;
    })

    // Receives 11.
    .then((number) => {
        console.log(`number: ${number}`);
    });

// Visual Flow:

// Promise.resolve(5)
//         ↓
//         5
//         ↓
//       5 * 2
//         ↓
//        10
//         ↓
//      10 + 1
//         ↓
//        11
//         ↓
//   console.log(11)

// =========================================================
// Mental Model
// =========================================================

// Create Promise
//       ↓
// Executor runs immediately
//       ↓
// Start some work
//       ↓
// resolve(value) OR reject(error)
//       ↓
// Promise settles
//       ↓
// .then() OR .catch()

// The Promise constructor creates the Promise object and
// provides resolve() and reject().

// The executor function performs the work and uses
// resolve() or reject() to report the outcome.