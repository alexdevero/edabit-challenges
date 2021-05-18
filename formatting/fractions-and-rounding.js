function fracRound(frac, n) {
	return `${frac} rounded to ${n} decimal places is ${eval(frac).toFixed(n)}`
}

fracRound("1/3", 5) // "1/3 rounded to 5 decimal places is 0.33333"
fracRound("2/8", 4) // "2/8 rounded to 4 decimal places is 0.2500"
fracRound("22/7", 2) // "22/7 rounded to 2 decimal places is 3.14"
fracRound("23/2", 2) // "23/2 rounded to 2 decimal places is 11.50"
fracRound("40/77", 3) // "40/77 rounded to 3 decimal places is 0.519"
fracRound("15/58", 3) // "15/58 rounded to 3 decimal places is 0.259"
fracRound("2/92", 2) // "2/92 rounded to 2 decimal places is 0.02"
fracRound("21/65", 6) // "21/65 rounded to 6 decimal places is 0.323077"
fracRound("29/40", 3) // "29/40 rounded to 3 decimal places is 0.725"
fracRound("49/38", 6) // "49/38 rounded to 6 decimal places is 1.289474"
fracRound("20/69", 3) // "20/69 rounded to 3 decimal places is 0.290"
fracRound("17/46", 6) // "17/46 rounded to 6 decimal places is 0.369565"
fracRound("46/28", 4) // "46/28 rounded to 4 decimal places is 1.6429"
fracRound("45/86", 6) // "45/86 rounded to 6 decimal places is 0.523256"
fracRound("42/42", 7) // "42/42 rounded to 7 decimal places is 1.0000000"