const readMoreBtn = document.getElementById("readMoreBtn");

const output = document.getElementById("output");

readMoreBtn.addEventListener("click", () => {
    output.textContent = "You click the button!";
});