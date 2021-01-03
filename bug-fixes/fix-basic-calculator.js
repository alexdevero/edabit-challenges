function basicCalculator(a, o, b) {
	var result = 0

	if (o === '+') {
		result = a + b
	} else if (o === '-') {
		result = a - b
	} else if (o === '/' && b !== 0) {
		result = a / b
	} else if (o === '*') {
		result = a * b
	} else {
		result = null
	}

	return result
}
