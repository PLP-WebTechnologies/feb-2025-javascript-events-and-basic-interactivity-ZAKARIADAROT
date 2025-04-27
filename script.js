// Sample Recipe Data
const recipes = [
    {
        name: "Pancakes",
        ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
        steps: "Mix ingredients, pour batter into a hot pan, flip when bubbles form.",
        image: "./img/recipe1.jpeg"
    },
    {
        name: "Spaghetti Bolognese",
        ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Garlic", "Onions"],
        steps: "Cook spaghetti, sauté beef with onions, add sauce, mix and serve.",
        image: "./img/recipe2.jpeg"
    },
    // Add more recipes here
];

// Event Handling

// Button click to load random recipe
document.getElementById("load-recipe").addEventListener("click", function() {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    document.getElementById("recipe-name").innerText = randomRecipe.name;
    document.getElementById("recipe-content").querySelector("#steps").innerText = randomRecipe.steps;
    const ingredientsList = document.getElementById("ingredients").querySelector("ul");
    ingredientsList.innerHTML = "";
    randomRecipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    document.getElementById("recipe-gallery").innerHTML = `<img src="${randomRecipe.image}" alt="${randomRecipe.name}" class="gallery-img">`;
});

// Hover effect on buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "#45a049";
    });
    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "";
    });
});

// Show/Hide ingredients
document.getElementById("show-ingredients").addEventListener("click", function() {
    const ingredientsDiv = document.getElementById("ingredients");
    ingredientsDiv.classList.toggle("hidden");
    if (ingredientsDiv.classList.contains("hidden")) {
        this.innerText = "Show Ingredients";
    } else {
        this.innerText = "Hide Ingredients";
    }
});

// Tabs for categories
document.getElementById("breakfast-tab").addEventListener("click", function() {
    alert("Breakfast Recipes");
});

document.getElementById("lunch-tab").addEventListener("click", function() {
    alert("Lunch Recipes");
});

document.getElementById("dinner-tab").addEventListener("click", function() {
    alert("Dinner Recipes");
});

// Form Validation and Real-time feedback
document.getElementById("subscription-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        return;
    }

    // Password validation
    if (password.length < 8) {
        feedback.textContent = "Password must be at least 8 characters long.";
        return;
    }

    feedback.textContent = "Subscription successful!";
    feedback.style.color = "green";
});
