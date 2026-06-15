/*
Certain operations take time:
• Downloading data
• Reading files
• Calling APIs
• Database queries

JavaScriptuses asynchronous programming so the program does
not freeze while waiting.

A Promise is an object tat represents a value that will become
available later on throughout a program.

A Promise can be in one of three states:
Pending
|
+ ----> Fulfilled
|
+ ----> Rejected

• Pending means that work is still taking place.
• Fulfilled means that the work was completed successfully.
• Rejected means that something went wrong.
*/

// Since Promise is a built-in class in JavaScript, the new
// keyword must be used when creating an object of this class.

// The Promise constructor (new Promise()) accepts an executor
// function as its parameter.

// resolve and reject are the functions provided by the Promise
// constructor.

// In this case, they are the parameters for the executor function.
const myPromise = new Promise((resolve, reject) => {

    const success = false;

    if (success) {
        resolve("Data loaded successfully.");
    } else {
        reject("Something went wrong.");
    }
});

// .then() is a method that runs when the Promise object has
// been fulfilled. Fulfilled is one of the states and this
// means that the operation succeeded and the resolve()
// method was called.

// .catch() is a method that runs when the Promise object has
// been rejected. This means the reject() method was invoked
// because the operation failed.

// Note that the more modern approach is to use await instead
// of .then() and .catch().
myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })

// See promises_ex2.py.