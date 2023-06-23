const totalValue = document.querySelector("#value");

let counterValue = 0;

const subElement = document.querySelector('button[data-action="decrement"]');

const addElement = document.querySelector('button[data-action="increment"]');

subElement.addEventListener("click", onBtnDecrementClick);

addElement.addEventListener("click", onBtnIncrementClick);

function onBtnDecrementClick() {
  counterValue -= 1;
  totalValue.textContent = counterValue;
}

function onBtnIncrementClick() {
  counterValue += 1;
  totalValue.textContent = counterValue;
}