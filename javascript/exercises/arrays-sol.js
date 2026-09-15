// Create an array named "cart" with the initial items.
const cart = ["Bread", "Milk"];

// Add "Eggs" to the end of the array.
cart.push("Eggs");

// Display the items in the array.
console.log(`cart: ${cart.join(", ")}`);

// Remove the last item from the array.
cart.pop();

// Display the array again.
console.log(`\ncart: ${cart.join(", ")}`);

// Add "Butter" to the beginning of the array.
cart.unshift("Butter");

// Display the array again.
console.log(`\ncart: ${cart.join(", ")}`);

// Remove the first item from the array.
cart.shift();

// Display the final array.
console.log(`\ncart: ${cart.join(", ")}`);