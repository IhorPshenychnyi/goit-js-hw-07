let counterValue = 0;

const counter = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener('click', onDecrementClick)

increment.addEventListener('click', onIncrementClick)

function onDecrementClick() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

function onIncrementClick() {
    counterValue += 1;
    counter.textContent = counterValue;
}