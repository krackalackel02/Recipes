class Recipe {
	constructor(name, image, url) {
		this.name = name;
		this.image = image;
		this.url = url;
	}
}
var recipeBook = [];
recipeBook.push(
	new Recipe(
		"Lasagna",
		"lasagna.jpg",
		"https://www.deliciousmagazine.co.uk/recipes/ultimate-lasagne/"
	)
);
recipeBook.push(
	new Recipe(
		"Triple Chocolate Layer Cake",
		"triple-chocolate-cake-4.jpg",
		"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsallysbakingaddiction.com%2Ftriple-chocolate-layer-cake%2F&psig=AOvVaw00lGe61kZoTKTnG2BYkIUk&ust=1687449547313000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCgqcjd1P8CFQAAAAAdAAAAABAJ"
	)
);
recipeBook.push(
	new Recipe(
		"Homemade Pepperoni Pizza",
		"240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg",
		"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F240376%2Fhomemade-pepperoni-pizza%2F&psig=AOvVaw0xcgthXQB0O9nHJo4BCDS5&ust=1687449608191000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMC8nOXd1P8CFQAAAAAdAAAAABAE"
	)
);
module.exports = recipeBook;
