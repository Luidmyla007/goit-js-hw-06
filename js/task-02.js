const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients){
  const myItems = document.createElement("li");
  myItems.textContent = ingredient;
  myItems.classList.add("item");
  const myList = document.querySelector("#ingredients");
  myList.prepend(myItems);  
}
 

