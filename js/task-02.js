const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const listIngredients = document.querySelector("#ingredients");

const ingredientItems = ingredients.map((ingredient) => {
  const ListItem = document.createElement("li");
  ListItem.textContent = ingredient;
  ListItem.classList.add("item");

  return ListItem;
});

listIngredients.append(...ingredientItems);