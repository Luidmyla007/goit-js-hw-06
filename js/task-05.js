const textOfInput = document.querySelector("#name-input");
const textOfSpan = document.querySelector("#name-output");

textOfInput.addEventListener("input", (event) => {
    textOfSpan.textContent = event.currentTarget.value;
});








