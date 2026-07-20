// Array
const prices = [20, 35, 40, 75, 100];

// Create a new array that only keeps prices that are at least 50.
const expensivePrices = prices.filter((price) => {
    // On each iteration, filter() passes a different element of
    // the array as an argument to the parameter 'price'.

    // For the first item that the .filter() method accesses, 20
    // is assigned to the 'price' parameter of this arrow function.

    // For items in the array that will cause the expression to
    // return True, they will be included in the new array.
    return price >= 50;
});

console.log(`expensivePrices: ${expensivePrices.join(", ")}\n`);