// Predict what the output of this program will be.

// Synchronous code
console.log("A");

// Macro task
setTimeout(() => {
    console.log("E");
}, 0);

const fetchData = async () => {

    // Synchronous code
    console.log("B");

    try {
        // Micro task
        await Promise.reject("D");

    } catch (error) {

        console.log(error);
    }
};

fetchData();

// Synchronous code
console.log("C");