
let currentPage = 1;
const recipePerPage = 1; 

async function fetchRecipes(page = 1) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php=${page}`
    );
    const data = await response.json();
    displayRecipe(data.recipes[0]); 
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}


function displayRecipe(recipe) {
  document.getElementById("recipe-img").src = recipe.image;
  document.getElementById("recipe-name").innerText = recipe.name;
  document.getElementById("recipe-instructions").innerText =
    recipe.instructions;
}


fetchRecipes(currentPage);


document.getElementById("next-btn").addEventListener("click", () => {
  currentPage++;
  fetchRecipes(currentPage);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchRecipes(currentPage);
  }
});
