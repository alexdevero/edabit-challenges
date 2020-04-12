function acceptedWords(arr) {
	return arr.filter(item => !item.match(/^[C]/))
}

acceptedWords(["Cans", "Worms", "Bugs", "Cold", "Beans"]) // ["Worms", "Bugs", "Beans"]
acceptedWords(["Ducks", "Bears",  "Cats"]) // ["Ducks", "Bears"]
acceptedWords(["cars", "trucks", "planes"]) // ["cars", "trucks", "planes"]
