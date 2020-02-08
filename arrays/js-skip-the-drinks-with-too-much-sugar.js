function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(item => item !== 'fanta' && item !== 'cola')
}

skipTooMuchSugarDrinks(["cola", "fanta"]) // []
skipTooMuchSugarDrinks(["cola", "fanta", "water"]) // ["water"], ""
skipTooMuchSugarDrinks(["cola"]) // [], ""
skipTooMuchSugarDrinks([]) // [], ""
skipTooMuchSugarDrinks(["lemonade", "beer", "fanta"]) // ["lemonade", "beer"], ""
skipTooMuchSugarDrinks(["water", "cola"]) // ["water"], ""
skipTooMuchSugarDrinks(["water", "tea"]) // ["water", "tea"], ""
