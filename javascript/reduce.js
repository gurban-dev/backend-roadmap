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

The accumulator is the running results from previous iterations.

The currentValue is the current element being processed.

The currentIndex is the index of the current element.

The array is the original array.

The initialValue is the value assigned to the accumulator before
the first iteration begins.
*/

// Use the .reduce() method to compute the sum of all the items
// in the array.
const total = prices.reduce(
    (accumulator, currentValue, currentIndex, array) => {
        console.log(
            `accumulator: ${accumulator}\n` +
            `currentValue: ${currentValue}\n` +
            `currentIndex: ${currentIndex}\n` +
            `array: ${array.join(", ")}\n`
        );

        return accumulator + currentValue;
    },
    0
);

console.log(`total: ${total}`);