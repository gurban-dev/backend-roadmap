
/* A do...while loop has a post-test condition.

   This means that the condition is evaluated after the code block
   within the loop has been executed.

   This contrasts with the while loop, which evaluates the condition
   before executing the code block.

   This means that the code block in do...while loop will always run
   at least one time.
*/

// The two below declarations of 'count' will cause the do...while
// loop to run the same amount of times.
// let count = 1_000_000;

let count = 4;

// Estimate how many times the do...while loop will run, then uncomment
// the subsequent line to see if you are correct.
// let count = 0;

do {
    console.log("Count is: " + count);

    // Python version:
    // count += 1

    count++;
} while (count < 5);

console.log("\nThe do...while loop has finished.");