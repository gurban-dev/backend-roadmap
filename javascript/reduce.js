// Objective:
// Understand how the reduce() method processes each element of
// an array by using an accumulator to compute a single result.

// In JavaScript, all of these values are simply of the data type number.
const prices = [10.0, 20.0, 30.0, 40];

/*
Syntax of the .reduce() method:
array.reduce(
    (accumulator, currentValue, currentIndex, array) => {
        // Code to process each element.

        return updatedAccumulator;
    },
    initialValue
)

The accumulator stores the running result.
After each iteration, it is updated with the value returned
by the callback function.

The currentValue is the current element being processed.

The currentIndex is the index of the current element.

The array is the original array.

The initialValue is assigned to the accumulator before the first
iteration begins.

Here, the accumulator starts with a value of 0.

In practice, most uses of .reduce() only need the
accumulator and currentValue parameters.
*/

// Use the .reduce() method to compute the sum of all the items
// in the array.
const total = prices.reduce(
    (accumulator, currentValue, currentIndex, array) => {
        console.log(
            "--------------------\n" +
            `Iteration ${currentIndex + 1}\n` +
            `accumulator: ${accumulator}\n` +
            `currentValue: ${currentValue}\n`
        );

        // Return the updated accumulator.
        // This value becomes the accumulator during the next iteration.
        return accumulator + currentValue;
    },
    0
);

/*
Initial accumulator = 0

Iteration 1
0 + 10 = 10

Iteration 2
10 + 20 = 30

Iteration 3
30 + 30 = 60

Iteration 4
60 + 40 = 100
*/

console.log(`total: ${total}`);