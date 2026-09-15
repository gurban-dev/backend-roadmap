// Create a function that accepts a callback.
function processOrder(callback) {
    // Display a message indicating that the order is being processed.
    console.log("Processing order...");

    // Execute the callback function after processing.
    callback();
}

// With an arrow function.
// const processOrder = (callback) => {
//     // Display a message indicating that the order is being processed.
//     console.log("Processing order...");

//     // Execute the callback function after processing.
//     callback();
// };

// Create a callback function.
function orderComplete() {
    // Display a message indicating that the order is complete.
    console.log("\nOrder complete!");
}

// Call processOrder() and pass orderComplete as the callback.
processOrder(orderComplete);