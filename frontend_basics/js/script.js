
const readMoreBtn = document.getElementById("readMoreBtn");

const output = document.getElementById("output");

// Arrow functions are the modern standard for writing concise
// JavaScript code (ECMAScript 6 or ES6).
readMoreBtn.addEventListener("click", () => {
    output.textContent = "You clicked the button!";
});