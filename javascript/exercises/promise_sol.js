// =========================================================
// PROMISE PRACTICE: LOADING A PLAYER
// =========================================================

// Imagine a game needs to load a player.

// Sometimes loading succeeds.
// Sometimes loading fails.

// Your job is to complete the Promise.

// Concepts:
// - Promise
// - resolve()
// - reject()
// - .then()
// - .catch()
// - Arrow functions

// =========================================================
// PART 1:
// Complete the loadPlayer() function.
// =========================================================

const loadPlayer = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Math.random() returns a floating-point number that's
            // greater than or equal to 0 and less than 1.
            const success = Math.random() > 0.5;

            if (success) {
                resolve({
                    name: 'Knight',
                    level: 10
                });
            } else {
                // Invoking reject() in the callback function causes
                // the .catch() block to execute.
                reject('Player failed to load');
            }
        }, 2000);
    });
};

// =========================================================
// PART 2:
// Call loadPlayer().
// =========================================================

loadPlayer()
    .then((player) => {
        console.log('Player loaded successfully!');
        console.log(player);
    })
    .catch((error) => {
        console.log('An error occurred.');
        console.log(error);
    });

// =========================================================
// QUESTIONS
// =========================================================

// 1. Where is the Promise created?
// Answer:
// The Promise is created here:
// return new Promise((resolve, reject) => {
// });
// =========================================================

// 2. Who provides resolve and reject?
// Answer:
// The Promise constructor provides them.
// =========================================================

// 3. When does the executor function run?
// Answer:
// Immediately when the Promise is created.

// In this code:
// new Promise((resolve, reject) => {
// });
// the arrow function passed as an argument is the executor
// function.
// =========================================================

// 4. What causes .then() to run?
// Answer:
// Calling resolve() causes the Promise to become fulfilled,
// which causes .then() to run.
// =========================================================

// 5. What causes .catch() to run?
// Answer:
// Calling reject() causes the Promise to become rejected,
// which causes .catch() to run.

// =========================================================

// 6. What value will the player parameter receive?

// Answer:
// {
//     name: 'Knight',
//     level: 10
// }

// Because that plain object was passed into resolve().

// resolve({
//     name: 'Knight',
//     level: 10
// });

// The value passed to resolve() becomes the value received
// by the .then() callback.

// resolve(value)
//      ↓
// .then((player) => { ... })

// Therefore:
// player === {
//     name: 'Knight',
//     level: 10
// }