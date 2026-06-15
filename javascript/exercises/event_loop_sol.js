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

setTimeout(function () {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");


/*
Part 2: Add a catch().

Handle the rejected Promise and print the error.
*/

function getNumber() {
  return Promise.reject("Something went wrong");
}

getNumber().catch(function (error) {
  console.log(error);
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

/*
Print the resolved value using then().
*/
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
  /*
  Wait for the Promise to resolve.
  */
  const message = await getMessage();

  /*
  Print the resolved value.
  */
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

setTimeout(() => {
  console.log("Timer");
}, 0);

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
    /*
    Create a Promise that resolves successfully.
    */
    const result = await Promise.resolve("User Loaded");

    /*
    Print the resolved value.
    */
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

loadUser();


/*
Bonus Challenge

Answers:

1. Output:
   1
   5
   2
   3
   4

2. Values from synchronous code:
   1
   5

3. Values from microtasks:
   2
   3

4. Value from a macrotask:
   4

Explanation:

- "1" runs immediately.
- The first then() callback is queued as a microtask.
- setTimeout() callback is queued as a macrotask.
- "5" runs immediately.
- Microtasks run before macrotasks:
  -> "2" prints.
  -> The second then() is queued and executed.
  -> "3" prints.
- Finally the timer callback runs and prints "4".
*/

console.log("1");

Promise.resolve()
  .then(() => {
    console.log("2");
  })
  .then(() => {
    console.log("3");
  });

setTimeout(function () {
  console.log("4");
}, 0);

console.log("5");