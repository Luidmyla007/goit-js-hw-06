const textOfInput = document.querySelector("#name-input");
const textOfSpan = document.querySelector("#name-output");


textOfInput.addEventListener("input", (event) => {
    const myValue = event.currentTarget.value;
    textOfSpan.textContent = myValue;
    if (!myValue) {
       textOfSpan.textContent = 'Anonymous';        
    };       
})  















