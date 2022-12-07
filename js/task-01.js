const list = document.querySelector("#categories");
const title = document.createElement("h1");
const itemsQuant = document.getElementsByClassName('item');
title.textContent = `Number of categories: ${itemsQuant.length}`;

 list.before(title);
// const myList = document.createElement("ul");
// title.after(myList);


