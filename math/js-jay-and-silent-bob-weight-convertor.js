function jayAndBob(str) {
	const values = {
		half: 14,
		quarter: 7,
		eighth: 3.5,
		sixteenth: 1.75,
	}

	return `${values[str]} grams`
}

Test.assertEquals(jayAndBob("half"), "14 grams")
Test.assertEquals(jayAndBob("quarter"), "7 grams")
Test.assertEquals(jayAndBob("eighth"), "3.5 grams")
Test.assertEquals(jayAndBob("sixteenth"), "1.75 grams")
