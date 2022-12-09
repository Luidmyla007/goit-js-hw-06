const magicBtn = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
const chameleonBody = document.querySelector("body");


magicBtn.addEventListener("click", getRandomHexColor); 
 
function getRandomHexColor() {
  let newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  chameleonBody.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
};







// це було  в умові
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
