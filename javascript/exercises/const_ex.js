// Concepts:
// const redeclaration, reassignment, initialisation and block scope


// Part 1: const Reassignment

// Predict what will happen when this program runs.

const name = "Alice";

// Uncomment the following line after making your prediction.
// What happens when we try to change the value of name?

// name = "Alice";

console.log("name:", name);

// Answer:
// Is changing name from "Alice" to "Bob" reassignment
// or redeclaration?

// Why can't "Alice" be assigned to 'name' a second time?


// Part 2: const Redeclaration

// Predict what will happen here.

// Uncomment the following line after making your prediction.
// const age = 30;

// Answer:
// Is declaring age a second time reassignment or redeclaration?
// What will be the cause of the error?


// Part 3: Initialisation

// Predict the output.

let city;

console.log(city);

city = "Quebec";

console.log(city);

city = "Vienna";

// Answer:
// 1. What is the value of city before "Québec" is assigned?
//    'city' is undefined before "Québec" is assigned to it.

// 2. What happens when "Québec" is assigned to 'city'?

// 3. What is it called when a new value, "Vienna", is assigned
//    to 'city', replacing its previous value, "Québec"?


// Part 5: Block Scope

let message = "Outside";

if (true) {
    let message = "Inside";

    console.log(message);
}

console.log(message);

// Answer:
// 1. What will the first console.log() print?
// 2. What will the second console.log() print?
// 3. Why can both variables be called message?


// Part 6: Global Scope

let username = "Alice";

if (true) {
    console.log(username);
}

// Answer:
// Why is username accessible inside the if block?

// Now create your own example where username is declared
// inside the if block.

// Can you access username outside the block?


// Part 7: Write Your Own Program

// Write a program that demonstrates all six concepts.

// Your program must:
// 1. Create a global variable called score.
// 2. Initialise it with the value 100.
// 3. Create a block using an if statement.
// 4. Inside the block, create a variable called message.
// 5. Give message the value "Passed".
// 6. Print message inside the block.
// 7. Try to print message outside the block.
// 9. Create a const variable.
// 10. Demonstrate what happens when you try to reassign it.
// 11. Demonstrate what happens when you try to redeclare it.

// Important:
// Comment out any code that causes an error so that the rest
// of your program can run.