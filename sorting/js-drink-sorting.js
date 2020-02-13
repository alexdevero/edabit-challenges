function sortDrinkByPrice(drinks) {
	return drinks.sort((x,y) => x.price < y.price ? -1 : 1)
}

const drinks = [
	{name: 'lemonade', price: 90},
	{name: 'lime', price: 432},
	{name: 'peach', price: 23}
]

const sorted = [
	{name: 'peach', price: 23},
	{name: 'lemonade', price: 90},
	{name: 'lime', price: 432}
]

sortDrinkByPrice(drinks) // sorted, "Object is not sorted."
