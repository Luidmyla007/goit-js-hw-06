const sizeInput = document.querySelector("#font-size-control");
const myText = document.querySelector("#text");

sizeInput.addEventListener("input", (event) => {
     let myValue = Number(event.currentTarget.value);
     myText.style.fontSize = `${myValue}px`;
 })  
