const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

btnDecr.addEventListener("click", () => {
    console.log(counterValue -= 1);     
});

btnIncr.addEventListener("click", () => {
    console.log(counterValue += 1);
});

