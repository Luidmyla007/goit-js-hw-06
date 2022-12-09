const myInput = document.querySelector("input");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const ownerBox = document.querySelector("#boxes");

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }

myInput.addEventListener("input", (event) => {
  event.currentTarget.value = amount;
});

function createBoxes(amount) {
  myInput.addEventListener("input", (event) => {
  event.currentTarget.value = amount;
});
  let newDives = [];
  for (let i = 0; i <= amount; i++)
  newDiv = document.createElement("div");
  newDives.push(newDiv);
  ownerBox.append(newDives);


};





