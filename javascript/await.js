// await is built on top of promises and provides a readable
// way to work with them.

// Normally, a promise represents a value that will be available
// sometime in the future.

// await tells JavaScript:
// "Wait for this promise to finish, then give me its result."

// await can only be used inside an async function.

async function displayOrders() {
    console.log("Start");

    // Promise.resolve() creates a promise that immediately
    // resolves to the string "Orders fetched".

    // await pauses this async function until the promise
    // resolves.

    // Once the promise resolves, its value is assigned
    // to the result variable.
    const result = await Promise.resolve("Orders fetched");

    // This line runs after the promise has resolved.
    console.log(result);
}

displayOrders();

// The main benefit of await is readability.

// It allows asynchronous code to be written from top to
// bottom, making it look similar to synchronous code.

// Imagine we need to:
// 1. Get a user.
// 2. Get that user's orders.
// 3. Display the orders.

// Each step depends on the previous step finishing first.

// With await():

// Wait for getUser() to finish and store the resolved value
// in the user variable.
const user = await getUser();

// Wait for getOrders() to finish and store the resolved value
// in the orders variable.
const orders = await getOrders(user.id);

// Display the orders.
console.log(orders);

// With .then():

// getUser() returns a promise.
//
// .then() registers a callback that runs when the promise
// resolves.
getUser()
    .then(user => {

        // Return another promise so the next .then()
        // waits for it to finish.
        return getOrders(user.id);
    })
    .then(orders => {

        // The resolved orders are passed into this callback.
        console.log(orders);
    })
    .catch(error => {

        // Handle any errors that occur in the promise chain.
        console.error(error);
    });

// Both approaches do the same thing.

// The difference is how the resolved value is accessed.

// With await:
// const orders = await getOrders(user.id);

// With .then():
// getOrders(user.id).then(orders => { ... });

// In both cases, orders contains the resolved value from
// the promise.

// await does not replace promises.
// It is simply a cleaner syntax for working with them.