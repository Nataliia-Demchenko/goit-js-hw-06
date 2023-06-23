function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const input = document.querySelector(`input`);
  const btnCreate = document.querySelector(`[data-create]`);
  const btnDestroy = document.querySelector(`[data-destroy]`);
  const boxesEl = document.querySelector(`#boxes`);
  
  btnCreate.addEventListener(`click`, onCreateBoxes);
  btnDestroy.addEventListener(`click`, onDestroyBoxes);
  
  function onCreateBoxes() {
    let collectionBox = [];
  
    let sitze = 30;
  
    for (let i = 0; i < input.value; i += 1) {
      const box = document.createElement('div');
      box.style.width = `${sitze}px`;
      box.style.height = `${sitze}px`;
      box.style.backgroundColor = getRandomHexColor();
  
      sitze += 10;
  
      collectionBox.push(box);
    }
    boxesEl.append(...collectionBox);
  
    input.value = ``;
  }
  
  function onDestroyBoxes() {
    boxesEl.innerHTML = ``;
  }