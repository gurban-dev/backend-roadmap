// PROMISE PRACTICE: LOADING A PLAYER

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

// PART 1:
// Complete the loadPlayer() function.

// 'loadPlayer' is simply a variable that references the arrow function
// which is anonymous (it has no name).
const loadPlayer = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = Math.random() > 0.5;

            if (success) {

                // TODO:
                // Resolve with:
                //
                // {
                //     name: 'Knight',
                //     level: 10
                // }

            } else {

                // TODO:
                // Reject with:
                //
                // 'Player failed to load'

            }

        }, 2000);

    });

};

// PART 2:
// Call loadPlayer().

loadPlayer()

    .then((player) => {

        // TODO:
        // Print:
        //
        // 'Player loaded successfully!'
        //
        // Then print the player object.

    })

    .catch((error) => {

        // TODO:
        // Print:
        //
        // 'An error occurred.'
        //
        // Then print the error.

    });

// After completing the exercise, answer:

// 1. Where is the Promise created?

// 2. Who provides resolve and reject?

// 3. When does the executor function run?

// 4. What causes .then() to run?

// 5. What causes .catch() to run?

// 6. What value will the player parameter receive?