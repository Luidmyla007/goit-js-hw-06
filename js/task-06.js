const textInput = document.querySelector("#validation-input");
console.log(textInput);
console.log(textInput.dataset.length);
console.log(Number(textInput.dataset.length));
console.log(textInput.value.length);


textInput.addEventListener('blur', onBlur)
function onBlur(event) {
    if (textInput.value.length === Number(textInput.dataset.length)) {
         return textInput.classList.add("valid");
    }
return textInput.classList.add("invalid");
}







