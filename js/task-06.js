const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, onValidInput);

function onValidInput(event) {
  input.classList.add(`invalid`);
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.replace(`invalid`, `valid`);
  }
}