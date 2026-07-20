// filter() does not modify the original array.
// Instead, it creates and returns a new array.


// Array
const prices = [20, 35, 40, 75, 100];

// Create a new array that only keeps prices that are at least 50.
const expensivePrices = prices.filter((price) => {
    // filter() visits every element in the array one by one.
    
    // Each element is passed as an argument to the callback
    // function and assigned to the parameter 'price'.

    // During the first iteration, the value 20 is assigned to
    // the parameter 'price'.

    // The comparison produces either true or false.

    // If the expression evaluates to true, the current price
    // is copied into the new array.

    // If it evaluates to false, the current element is not
    // included in the new array.
    return price >= 50;
});

console.log(`prices: ${prices.join(", ")}\n`);

console.log(`expensivePrices: ${expensivePrices.join(", ")}`);