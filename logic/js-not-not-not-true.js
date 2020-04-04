function notNotNot(n, bool) {
	return eval(`${'!'.repeat(n)}bool`)
}

notNotNot(1, true) // false
notNotNot(2, false) // false
notNotNot(7, true) // false
notNotNot(7, false) // true
notNotNot(3, true) // false
notNotNot(13, true) // false
notNotNot(24, false) // false
notNotNot(6, false) // false
