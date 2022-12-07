const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const myList = document.querySelector(".gallery");
console.log(myList);
let item;
const markup = images
  .map((image) => `<li class = "my-item">${image}</li>`);
  
  
 myList.insertAdjacentHTML("beforeend", markup);   



// for (const ingredient of ingredients){
//   const myItems = document.createElement("li");
//   myItems.textContent = ingredient;
//   myItems.classList.add("item");
//   const myList = document.querySelector("#ingredients");
//   myList.prepend(myItems);  
// }
 
