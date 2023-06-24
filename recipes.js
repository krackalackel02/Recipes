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
		instructions: [
			"Make pasta dough from scratch or use store-bought pasta sheets.",
			"Boil the pasta sheets until al dente.",
			"Layer the pasta sheets with tomato sauce, cheese, and your desired fillings (e.g., ground beef, ricotta cheese, and vegetables) in a baking dish.",
			"Repeat the layers until the dish is filled.",
			"Bake in the oven until the cheese is melted and bubbly. Serve hot and enjoy!",
		],
		url: "https://www.deliciousmagazine.co.uk/recipes/ultimate-lasagne/",
	})
);
recipeBook.push(
	new Recipe({
		name: "Triple Chocolate Layer Cake",
		url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsallysbakingaddiction.com%2Ftriple-chocolate-layer-cake%2F&psig=AOvVaw00lGe61kZoTKTnG2BYkIUk&ust=1687449547313000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCgqcjd1P8CFQAAAAAdAAAAABAJ",
		image: "triple-chocolate-cake-4.jpg",
		instructions: [
			"Prepare the cake batter by combining flour, cocoa powder, sugar, baking powder, eggs, milk, and melted chocolate in a mixing bowl.",
			"Divide the batter into separate cake pans and bake them in the oven until a toothpick inserted into the center comes out clean.",
			"Let the cake layers cool completely.",
			"Prepare a chocolate frosting by mixing butter, powdered sugar, cocoa powder, and milk until smooth and creamy.",
			"Assemble the cake by spreading frosting between the cake layers and on the top and sides. Decorate as desired and enjoy!",
		],
	})
);
recipeBook.push(
	new Recipe({
		name: "Homemade Pepperoni Pizza",
		image:
			"240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg",
		instructions: [
			"Make pizza dough by combining flour, yeast, water, salt, and olive oil in a mixing bowl. Knead until a smooth dough forms, then let it rise until doubled in size.",
			"Preheat the oven to a high temperature (e.g., 475°F/245°C) and place a pizza stone or baking sheet in the oven to heat.",
			"Roll out the pizza dough into your desired shape and thickness.",
			"Spread pizza sauce evenly over the dough, leaving a border around the edges.",
			"Add shredded cheese, pepperoni slices, and any additional toppings. Bake until the crust is golden and the cheese is melted and bubbly. Slice and enjoy!",
		],
		url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F240376%2Fhomemade-pepperoni-pizza%2F&psig=AOvVaw0xcgthXQB0O9nHJo4BCDS5&ust=1687449608191000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMC8nOXd1P8CFQAAAAAdAAAAABAE",
	})
);

recipeBook.push(
	new Recipe({
		name: "Chicken Tinola",
		image:
			"212929-chicken-tinola-ddmfs-beauty-3x4-c57e44790b5a45229744f8f8746e0ce4.jpg",
		instructions: [
			"Heat oil in a large pot over medium heat. Add chopped onion and minced garlic. Cook and stir until fragrant, about 2 minutes.",
			"Add sliced ginger and fish sauce to the pot. Cook and stir for 1 to 2 minutes.",
			"Stir in chicken pieces and cook for 5 minutes until they start to brown.",
			"Pour in chicken broth and cook for 5 minutes. Add sliced squash and simmer until the chicken is no longer pink in the center, about 10 minutes. Season with salt and pepper to taste.",
			"Add bok choy and spinach to the pot. Cook until the spinach is just wilted, approximately 1 to 2 minutes. Serve the hot and flavorful Chicken Tinola!",
		],
		url: "https://www.allrecipes.com/recipe/212929/chicken-tinola/",
	})
);
recipeBook.push(
	new Recipe({
		name: "Classic Chocolate Chip Cookies",
		image: "chocolate-chip-cookies.jpg",
		instructions: [
			"Preheat the oven to the specified temperature (e.g., 350°F/175°C).",
			"In a mixing bowl, cream together softened butter, granulated sugar, and brown sugar until light and fluffy.",
			"Beat in eggs, one at a time, followed by vanilla extract.",
			"In a separate bowl, whisk together flour, baking soda, and salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
			"Fold in chocolate chips. Drop spoonfuls of dough onto a baking sheet and bake for 10-12 minutes or until golden brown. Allow them to cool on a wire rack before enjoying the classic chocolate chip cookies!",
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
