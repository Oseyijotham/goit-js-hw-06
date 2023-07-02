const cnt = document.querySelector("#value");
const cnter = document.querySelector("#counter");
const firstButton = cnter.querySelectorAll('button')[0];
const secondButton = cnter.querySelectorAll('button')[1];

let counterValue = 0;
firstButton.addEventListener("click", () => {
    counterValue--;
    cnt.textContent = counterValue;
});

secondButton.addEventListener("click", () => {
    counterValue++;
    cnt.textContent = counterValue;
});