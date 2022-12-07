const list = document.querySelector("#categories");
const title = document.createElement("p");
const itemsQuant = document.getElementsByClassName('item');
title.textContent = `Number of categories: ${itemsQuant.length}`;
list.before(title);

const myList = document.createElement("ul");
title.after(myList);

const firstLi = document.createElement("li");
const preTitle = document.querySelector("h2");
firstLi.textContent = `Category: ${preTitle.textContent}`;
myList.prepend(firstLi);

const secondLi = document.createElement("li");

const b = document.querySelector(".item");
const c = b.lastElementChild;
console.log(c);
const d = c.children;
console.log(d.length);

secondLi.textContent = `Elements: ${d.length}`;
myList.append(secondLi);

//
//  const b = document.querySelector(".item");
// const c = b.lastElementChild;
// console.log(c);
// const d = c.children;
// console.log(d.length);




//  const preItemQuant = d.length;



