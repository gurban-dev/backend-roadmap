// Create a Promise that simulates looking up a user.
const userPromise = new Promise((resolve, reject) => {

    // Indicate whether the user was found.
    const userFound = true;

    // Resolve the Promise if the user exists.
    if (userFound) {
        resolve("User found successfully.");
    }

    // Reject the Promise if the user does not exist.
    else {
        reject("User could not be found.");
    }
});

// Handle the fulfilled state of the Promise.
userPromise
    .then((message) => {

        // Display the success message.
        console.log(message);
    })

    // Handle the rejected state of the Promise.
    .catch((error) => {

        // Display the error message.
        console.error(error);
    });