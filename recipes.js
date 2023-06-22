class Recipe {
	constructor({ name, url, image,instructions }) {
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