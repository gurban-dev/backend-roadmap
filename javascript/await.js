// await is built on top of promises and provides a readable
// way to work with them.

// await pauses an async function.

async function displayOrders() {
    console.log("Start");

    // The function pauses at await until the promise settles.

    // await only works inside an async function.
    const result = await Promise.resolve("Orders fetched");

    console.log(result);
}

displayOrders();

// The main benefit is that it lets asychronous code read from
// the top to bottom like sychronous code.

// Suppose you had a simple task:
// 1. Get a user.
// 2. Get that user's orders.
// 3. Display the orders.

// With await():
const user = await getUser();

const orders = await getOrders(user.id);

console.log(orders);

// With .then():
getUser()
    .then(user => {
        return getOrders(user.id);
    })
    .then(orders => {
        console.log(orders);
    })
    .catch(error => {
        console.error(error);
    });