const myList = document.querySelectorAll('.item');
console.log(`Number of categories: ${myList.length}`);
myList.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});