const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((element) =>
  console.log(
    `Category: ${element.firstElementChild.textContent}`,
    `Elements: ${element.lastElementChild.children.length}`
  )
);