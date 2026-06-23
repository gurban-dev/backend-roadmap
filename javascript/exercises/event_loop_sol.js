/*
Part 1: Predict the Output

Answers:

1. Output:
   A
   D
   C
   B

2. Synchronous lines:
   console.log("A");
   console.log("D");

3. Microtask:
   Promise.resolve().then(() => {
     console.log("C");
   });

4. Macrotask:
   setTimeout(function () {
     console.log("B");
   }, 0);
*/

console.log("A");

// Macro task
setTimeout(function () {
	console.log("B");
}, 0);

// Micro task
Promise.resolve().then(() => {
	console.log("C");
});

console.log("D");


// Part 2: Add a .catch().

// Handle the rejected Promise and print the error.

// Micro task
function getNumber() {
	return Promise.reject("Something went wrong");
}

// Handle the rejected Promise.
getNumber().catch(function (error) {
	console.error(error);
});


/*
Part 3: Create a Promise.

Use the traditional function keyword and return a Promise
that resolves with "Hello, World!".
*/

function getGreeting() {
	return new Promise(function (resolve) {
		resolve("Hello, World!");
	});
}

// Micro task

// Print the resolved value using .then().
getGreeting().then(function (message) {
	console.log(message);
});


/*
Part 4: async and await.

Await the Promise and print the message.
*/

const getMessage = () => {
	return Promise.resolve("Learning JavaScript");
};

async function displayMessage() {
	// Micro task

	// Wait for the Promise to resolve.
	const message = await getMessage();

	console.log(message);
}

displayMessage();

/*
Part 5: Event Loop Challenge

Answers:

1. Output:
   Start
   End
   Promise 1
   Promise 2
   Timer

2. "Timer" does not run first because Promise callbacks
   are microtasks, and the event loop processes all
   microtasks before moving to the macrotask queue.

3. Microtasks:
   Promise 1 callback
   Promise 2 callback

4. Macrotask:
   Timer callback
*/

console.log("Start");

// Macro task
setTimeout(() => {
	console.log("Timer");
}, 0);

// Micro tasks
Promise.resolve().then(function () {
	console.log("Promise 1");
});

Promise.resolve().then(() => {
	console.log("Promise 2");
});

console.log("End");


/*
Part 6: Build an async Function.

Create a Promise, await it, and print the result
inside a try/catch block.
*/

async function loadUser() {
	try {
		// Micro task

		// Create a Promise that resolves successfully.
		const result = await Promise.resolve("User Loaded");

		// Print the resolved value.
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

loadUser();