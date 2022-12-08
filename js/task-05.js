const textOfInput = document.querySelector("#name-input");
const textOfSpan = document.querySelector("#name-output");

textOfInput.addEventListener("input", () => 
    textOfInput.value
        ? (textOfSpan.textContent = textOfInput.value)
        : (textOfSpan.textContent = "Anonymous")
);










