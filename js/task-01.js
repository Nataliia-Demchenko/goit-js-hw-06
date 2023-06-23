const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(item => {
  const categoryText = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryText}`);
  
  const quantityOfElements = item.querySelectorAll('li').length;
  console.log(`Elements: ${quantityOfElements}`);
});