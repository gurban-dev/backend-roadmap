// Traditional function that returns the sum of two numbers.
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Arrow function that returns the sum of two numbers.
const addNumbersArrow = (num1, num2) => {
    return num1 + num2;
};

// One-line arrow function that returns the sum of two numbers.
const addNumbersOneLine = (num1, num2) => num1 + num2;

// Invoke each function and log the returned value.
console.log(`addNumbers(5, 10): ${addNumbers(5, 10)}`);
console.log(`\naddNumbersArrow(5, 10): ${addNumbersArrow(5, 10)}`);
console.log(`\naddNumbersOneLine(5, 10): ${addNumbersOneLine(5, 10)}`);