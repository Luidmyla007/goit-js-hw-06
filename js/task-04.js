const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const result = document.querySelector("#value");

let counterValue = 0;

btnIncr.addEventListener("click", () => {
    counterValue += 1;
    result.textContent = String(counterValue);
});

btnDecr.addEventListener("click", () => {
    counterValue -= 1;  
    result.textContent = String(counterValue);
});



