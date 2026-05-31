// A Promise is an object that represents a value that will
// be available later on in the program.

// A Promise is a placeholder for a future result.

// Instead of immediately giving you a result, a Promise says
// I don't have the result yet, but will eventually give you
// a success value or an error.

// Keep in mind that a Promise does not require a delay.
// It's simply an object that represents the eventual result of
// an operation. Sometimes that result is availably immediately,
// and sometimes it arrives later.

// Why do Promises exist?
// Many operations take time:
// Downloading data from a server.
// Waiting for user input.
// Accessing a database.

// Promises make it possible to run other code while waiting
// for another operation.

// When the operation finishes, the Promise is updated with
// the result.

// A Promise can be in one of three states:
// 1. Pending - the work is still occurring.
// 2. Fulfilled - the operation succeeded.
// 3. Rejected - the operation failed.

// A Promise constructor receives a function.
// That function receives two arguments.

// In this case, the arrow function receives resolve and
// reject as two arguments.

// new Promise indicates that this is a built-in JavaScript class.

// The constructor callback is included because the Promise expects
// a function:
// (resolve, reject) => {}

// The Promise constructor calls the function and supplies those
// arguments.

// The Promise constructor expects one argument and that argument
// must be a function.

// The executor function's responsibility is to perform some work
// and evnetually tell the Promise whether it succeeded or failed.

// The Promise constructor executes the executor function.

// When you write:
// new Promise((resolve, reject) => {
// 
// });

// A function is being passed to the Promise constructor.

// The Promise constructor provides the two functions and passes
// them into the executor function.

// The executor function:
// (resolve, reject) => {
//     ...
// }

const promise = new Promise((resolve, reject) => {
    const success = true;

    // The setTimeout simulates a delay of 3 seconds.
    setTimeout(() => {

        // resolve and reject are provided automatically by
        // JavaScript.

        if (success) {
            resolve('Loaded successfully.');
        } else {
            reject('Loading failed.')
        }
    }, 3000);
});

console.log("Before call to arrow function.");

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("After call to arrow function.");

// Promise.resolve(5) creates a Promise that is already fulfilled
// with the value 5.

// The first .then() receives that value of 5.
// 5 * 2 -> 10

// The second .then() in the Promise chain receives the result
// from the previous .then().

// 10 + 1 -> 11

// The last .then() receives 11.
Promise.resolve(5)
    .then((number) => {
        return number * 2;
    })
    .then((number) => {
        return number + 1;
    })
    .then((number) => {
        console.log(number);
    });