function shouldServeDrinks(age, onBreak) {
	return age >= 18 && !onBreak
}

shouldServeDrinks(17, true) // false
shouldServeDrinks(30, true) // false
shouldServeDrinks(24, false) // true
shouldServeDrinks(18, false) // true
shouldServeDrinks(3, false) // false
