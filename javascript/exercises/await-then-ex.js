// ========================================
// Exercise: Get Customer Orders with await
// ========================================

// Instructions:

// Part 1:
// 1. Complete the getCustomerOrders function.
// 2. Use await to get the orders.
// 3. Print the orders to the console.

// Expected Output:
// Orders:
// [ 'Bike Helmet', 'Water Bottle', 'Bike Lock' ]

// Part 2:
// Rewrite the solution using .then() instead of await.
// Which version do you find easier to read?

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

// TODO:
// Make this function async.
// Use await to get the orders from fetchOrders().
// Print "Orders:".
// Print the orders array.
function getCustomerOrders() {
  // Your code here
}

getCustomerOrders();

// ========================================
// Part 2
// ========================================

// Rewrite getCustomerOrders using .then().

// Example:

// function getCustomerOrdersThen() {
//   // Your code here
// }

// getCustomerOrdersThen();