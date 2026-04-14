// Why should var be avoided in modern JavaScript development?

// var is function-scoped, meaning if a variable is declared with
// var inside of an if block or for loop, it will be accessible
// outside of these blocks.

// let is block-scoped, meaning a variable only exists inside the
// nearest pair of curly braces {} where it was declared.

// With let, you cannot redeclare a variable with the same name in
// the same scope the way you can with var.

var surname = "Smith";

// SyntaxError: Identifier 'surname' has already been declared
// let surname = "Hamilton";

const display_msg = () => {
    var message = "Good morning";

    if (true) {
        // Since variables declared with var are not blocked-scoped,
        // redeclaring the same variable inside the same function
        // will overwrite the previous one.
        var message = "Hello";
    }

    // Since var is function-scoped, 'message' is accessible
    // outside of the if block.
    console.log("Inside display_msg() message:", message);
};

// var is function-scoped, but if declared outside a function, it
// becomes globally scoped.

// console.log("\nOutside display_msg message:", message);

const display_greeting = () => {
    // Block-scoped variable.
    // Comment the line below to see what changes when this program
    // is executed.
    let message = "Good morning";

    if (true) {
        // This variable is limited to this if block.

        // If there isn't a variable named 'message' inside this if block,
        // the next scope that will be checked is the function.
        // let message = "Hello";

        console.log("\nInside the if block in display_greeting() message:", message);
    }

    // If let is declared inside a block, it is not accessible outside
    // that block.

    // But if it is declared outside, inner blocks can still access it.
    console.log("\nInside display_greeting() message:", message);
};

display_msg();

display_greeting();

setTimeout(() => {
    console.log("\nIterating with var:");

    // i++ is the equivalent of i = i + 1
    for (var i = 0; i < 3; i++) {
        // Wait 100 ms before running this function:
        // () => {
        //     console.log(`i: ${i}`);
        // }

        // var is function-scoped, not block-scoped.
        // There is only one 'i' shared across all iterations.

        // The for loop runs immediately:
        // i = 0, i = 1, i = 2

        // After the for loop completes, i is now 3.

        // All the setTimeout callbacks are scheduled, but they don't run
        // yet.

        // By the time the setTimeout callbacks run, the for loop has
        // finished iterating and 'i' is now 3.

        // Each callback prints the same final value for the shared 'i'.
        setTimeout(() => {
            console.log(`i: ${i}`);
        }, 100);
    }
}, 100);

setTimeout(() => {
    console.log("\nIterating with let:");

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            // Since let is block-scoped, a new 'i' is created for each
            // loop iteration.

            // Each callback now has its own unique 'i'.
            console.log(`i: ${i}`);
        }, 100);
    }
}, 300);