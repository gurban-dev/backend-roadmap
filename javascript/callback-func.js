/*
A callback function is a function passed as an argument to
another function.

Note that the callback function is invoked after the function
that accepts it as a parameter.

The receiving function can execute the callback function
whenever necessary.

Visual Flow:

Function orderCoffee
        ↓
Pass Function coffeeIsReady to orderCoffee
        ↓
Function orderCoffee executes Function coffeeIsReady

In this example, the function coffeeIsReady() is the callback
function.
*/

function orderCoffee(coffee_type, callback) {
    console.log(`Ordering a ${coffee_type}.`);

    console.log("Five minutes later...");

    callback(coffee_type);
}

function coffeeIsReady(name) {
    console.log(`\nThe ${name} is ready!`);
}

orderCoffee("capuccino", coffeeIsReady);

// See callback_func_ex.js.