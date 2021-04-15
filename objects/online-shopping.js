function freeShipping(order) {
	return Object.values(order)
		.reduce((acc, cur) => acc + cur, 0) > 50
}

freeShipping({'Shampoo' : 5.99, 'Rubber Ducks': 15.99}) // false
freeShipping({'Flatscreen TV': 399.99}) // true
freeShipping({'Monopoly': 11.99, 'Secret Hitler': 35.99, 'Bananagrams': 13.99}) // true
freeShipping({'Scrabble': 12.32, 'Jenga': 5.55, 'Clue': 20.00}) // false
freeShipping({'Elephant Plushie': 40.55, 'Octopus Plushie': 20.33, 'Spongebob Plushie': 20.00}) // true
