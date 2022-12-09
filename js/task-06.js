const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', onBlur)
function onBlur(event) {
    if (textInput.value.length === Number(textInput.dataset.length)) {
        if (textInput.classList.contains("invalid")) {
            textInput.classList.toggle("invalid");
        }
        return textInput.classList.add("valid");
    } else {
        return textInput.classList.add("invalid");
               
    }
}







