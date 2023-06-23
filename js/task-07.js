const fontSize = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

fontSize.addEventListener("input", onFontSizeChange);

function onFontSizeChange() {
  text.style.fontSize = fontSize.value + "px";
}