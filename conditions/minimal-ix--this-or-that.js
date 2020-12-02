function firstOne(a, b = 0, c = 0, d = 0) {
	return a || b || c || d || "not found"
}

firstOne('Edabit') // 'Edabit'
firstOne(false) // "not found"
firstOne('', 'Pikachu') // 'Pikachu'
firstOne('', 0) // "not found"
firstOne(0, 20, '') // 20
firstOne(0, 0, '') // "not found"
firstOne('', 0, true, false) // true
firstOne('', 0, false, false) // "not found"
