function makesTen(a, b) {
	return a === 10 || b === 10 || a + b === 10
}

makesTen(9, 10) // true
makesTen(9, 9) // false
makesTen(1, 9) // true
makesTen(10, 1) // true
makesTen(10, 10) // true
makesTen(8, 2) // true
makesTen(8, 3) // false
makesTen(10, 42) // true
makesTen(12, -2) // true
