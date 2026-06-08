// Part 1 Solution.

// Mark the function as async so that await can be used inside it.
async function getCustomerOrders() {

    // Wait for the promise returned by fetchOrders() to resolve.

    // Once the promise resolves, the array is assigned to orders.
    const orders = await fetchOrders();

    // Print a label to the console.
    console.log("Orders:");

    // Print the actual array.
    console.log(orders);
}

getCustomerOrders();


// Part 2 Solution.
//
// This version uses .then() instead of await.
function getCustomerOrdersThen() {

    // fetchOrders() returns a promise.

    // .then() registers a callback that runs when the promise
    // resolves.
    fetchOrders().then((orders) => {

    // The resolved array is passed into the orders parameter.
    console.log("Orders:");

    // Print the array.
    console.log(orders);
    });
}

getCustomerOrdersThen();


// Comparison:

// In both solutions, orders contains the same array.
//
// await:
// const orders = await fetchOrders();

// .then():
// fetchOrders().then((orders) => { ... });

// The difference is that await assigns the resolved value
// directly to a variable, while .then() passes the resolved
// value into a callback function.