// In this case, both callbacks can execute.

// A callback is a function that is passed to another function
// so that it can be executed later on after some operation has
// completed.

// Two Separate promises.

Promise.resolve()
    .then(() => console.log("then"));

// If the catch() was placed before the then(), "catch" would be
// outputted in the terminal before "then".
Promise.reject()
    .catch(() => console.log("catch"));

// Three examples of where then() and catch() are in the same
// Promise chain.

// In this case, the catch() never runs because there was no error.
Promise.resolve("success")
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    })

Promise.resolve("failure")
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    })

Promise.resolve()
    .then(() => {
        console.log("\nBoth can be executed in the same chain:");

        console.log("then");

        throw new Error("boom");
    })
    .catch(error => {
        console.error("catch");
    })