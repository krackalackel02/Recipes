class Recipe {
	constructor({ name, url, image, instructions }) {
		this.name = name;
		this.image = image;
		this.url = url;
		this.instructions = instructions;
	}
}
var recipeBook = [];
recipeBook.push(
	new Recipe({
		name: "Lasagna",
		image: "lasagna.jpg",
		instructions: ["make pasta", "lay out", "bake", "eat"],
		url: "https://www.deliciousmagazine.co.uk/recipes/ultimate-lasagne/",
	})
);
recipeBook.push(
	new Recipe({
		name: "Triple Chocolate Layer Cake",
		url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsallysbakingaddiction.com%2Ftriple-chocolate-layer-cake%2F&psig=AOvVaw00lGe61kZoTKTnG2BYkIUk&ust=1687449547313000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCgqcjd1P8CFQAAAAAdAAAAABAJ",
		image: "triple-chocolate-cake-4.jpg",
		instructions: ["make batter", "pour out", "bake", "eat"],
	})
);
recipeBook.push(
	new Recipe({
		name: "Homemade Pepperoni Pizza",
		image:
			"240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg",
		instructions: ["make dough", "roll out", "bake", "eat"],
		url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F240376%2Fhomemade-pepperoni-pizza%2F&psig=AOvVaw0xcgthXQB0O9nHJo4BCDS5&ust=1687449608191000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMC8nOXd1P8CFQAAAAAdAAAAABAE",
	})
);

recipeBook.push(
	new Recipe({
		name: "Chicken Tinola",
		image:
			"212929-chicken-tinola-ddmfs-beauty-3x4-c57e44790b5a45229744f8f8746e0ce4.jpg",
		instructions: ["make dough", "roll out", "bake", "eat"],
		url: "https://www.allrecipes.com/recipe/212929/chicken-tinola/",
	})
);
recipeBook.push(
	new Recipe({
		name: "Classic Chocolate Chip Cookies",
		image: "chocolate-chip-cookies.jpg",
		instructions: [
			"Preheat the oven",
			"Mix the ingredients",
			"Form dough balls",
			"Bake for 10-12 minutes",
			"Enjoy!",
		],
		url: "https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/",
	})
);
recipeBook.push(
	new Recipe({
		name: "Grilled Chicken Caesar Salad",
		image: "grilled-chicken-caesar-salad.jpg",
		instructions: [
			"Heat oil in a large pot over medium heat. Add onion and garlic; cook and stir until fragrant, about 2 minutes.",
			"Add ginger and fish sauce; cook and stir for 1 to 2 minutes. Stir in chicken and cook for 5 minutes.",
			"Pour in chicken broth and cook for 5 minutes. Add squash and simmer until chicken is no longer pink in the center, about 10 minutes. Season with salt and pepper.",
			"Add bok choy and spinach; cook until spinach is just wilted, 1 to 2 minutes. Serve hot.",
		],
		url: "https://www.allrecipes.com/recipe/14431/easy-and-fast-cajun-chicken-caesar-salad/",
	})
);
