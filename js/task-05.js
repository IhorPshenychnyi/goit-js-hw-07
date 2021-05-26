const input = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output')

input.addEventListener('input', onInputChange)

function onInputChange(event) {

    if (event.currentTarget.value.trim() === '') {
        nameEl.textContent = 'незнакомец';
    } else {
        nameEl.textContent = event.currentTarget.value
    }
}