function happyBirthday(age) {
	return `John is just ${age % 2 ? 21 : 20}, in base ${Math.floor(age / 2)}!`
}

happyBirthday(32) // "John is just 20, in base 16!")
happyBirthday(39) // "John is just 21, in base 19!")
happyBirthday(22) // "John is just 20, in base 11!")
happyBirthday(65) // "John is just 21, in base 32!")
happyBirthday(83) // "John is just 21, in base 41!")
happyBirthday(95) // "John is just 21, in base 47!")
happyBirthday(100) // "John is just 20, in base 50!")
happyBirthday(120) // "John is just 20, in base 60!")
happyBirthday(147) // "John is just 21, in base 73!")
