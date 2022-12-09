const myForm = document.querySelector(".login-form");
console.log(myForm);

myForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { login, password }
    } = event.currentTarget;

    if (myForm.elements.email.value === "" || myForm.elements.password.value === "") {
        return alert("Please fill in all the fields!");
    }

    const resume = {
        email:  myForm.elements.email.value,
        password: myForm.elements.password.value};
    console.log(resume);
  
  event.currentTarget.reset();
}

