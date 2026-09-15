// ============================================================
// Part 2: const Reassignment.
// ============================================================

// Predict what will happen when this program runs.

const name = "Alice";

// Uncomment the following line after making your prediction.
// What happens when we try to change the value of name?

// name = "Bob";

console.log(name);

// Answer:
// Is changing name from "Alice" to "Bob" reassignment
// or redeclaration?
// Why does JavaScript allow or reject it?


// ============================================================
// Part 3: const Redeclaration.
// ============================================================

// Predict what will happen here.

// Uncomment the following line after making your prediction.
// const age = 30;

// Answer:
// Is declaring age a second time reassignment
// or redeclaration?
// What error do you expect?


// ============================================================
// Part 4: Initialization.
// ============================================================

// Predict the output.

let city;

console.log(city);

city = "Toronto";

console.log(city);

// Answer:
// 1. What is the value of city before "Toronto" is assigned?
// 2. What is happening when let city; is written?
// 3. What is happening when city = "Toronto"; is written?


// ============================================================
// Part 5: Block Scope.
// ============================================================

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


// ============================================================
// Part 6: Global Scope.
// ============================================================

let username = "Alice";

if (true) {
    console.log(username);
}

// Answer:
// Why is username accessible inside the if block?


// Now create your own example where username is declared
// inside the if block.

// Can you access username outside the block?


// ============================================================
// Part 7: Write Your Own Program.
// ============================================================

// Write a program that demonstrates all six concepts.

// Your program must:

// 1. Create a global variable called score.
// 2. Initialize it with the value 100.
// 3. Create a block using an if statement.
// 4. Inside the block, create a variable called message.
// 5. Give message the value "Passed".
// 6. Print message inside the block.
// 7. Try to print message outside the block.
// 8. Create two values that demonstrate the difference
//    between == and ===.
// 9. Create a const variable.
// 10. Demonstrate what happens when you try to reassign it.
// 11. Demonstrate what happens when you try to redeclare it.

// Important:
// Comment out any code that causes an error so that the
// rest of your program can run.

// Explain the difference between:
// initialization
// reassignment
// redeclaration
// block scope
// global scope