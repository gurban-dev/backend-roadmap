// Part 1 Solution

const fetchOrders = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "Bike Helmet",
                "Water Bottle",
                "Bike Lock"
            ]);
        }, 1000);
    });
};

// Mark the function as async so that await can be used inside it.
async function getCustomerOrdersAwait() {

    try {
        // Pause execution of this async function until the promise resolves.

        // Once the promise resolves, the array is assigned to orders.
        const orders = await fetchOrders();

        console.log(`Orders:\n${orders.join("\n")}`);
    } catch (error) {
        console.error(error);
    }
}

getCustomerOrdersAwait();


// Part 2 Solution

// This version uses .then() instead of await.
function getCustomerOrdersThen() {

    // fetchOrders() returns a promise.

    // .then() registers a callback that runs when the promise
    // resolves.
    fetchOrders().then((orders) => {

        // The resolved array is passed into the orders parameter.
        console.log(`\nOrders: ${orders.join(" ")}`);
    });
}

getCustomerOrdersThen();


// Comparison:

// In both solutions, orders contains the same array.

// await:
// const orders = await fetchOrders();

// .then():
// fetchOrders().then((orders) => { ... });

// The difference is that await assigns the resolved value
// directly to a variable, while .then() passes the resolved
// value into a callback function.

// async/await is often preferred because it allows asynchronous
// code to be written in a top-to-bottom style, avoiding long chains
// of .then() calls, and lets errors from multiple asynchronous
// operations be handled in a single try/catch block.