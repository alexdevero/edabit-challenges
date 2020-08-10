function intWithinBounds(n, lower, upper) {
	return Number.isInteger(n) && n >= lower && n < upper
}

intWithinBounds(3, 1, 9) // true
intWithinBounds(6, 1, 6) // false
intWithinBounds(4.5, 3, 8) // false
intWithinBounds(-5, -10, 6) // true
intWithinBounds(4, 0, 0) // false
intWithinBounds(10, 9, 11) // true
intWithinBounds(6.3, 2, 6) // false
intWithinBounds(6.3, 2, 10) // false
intWithinBounds(9, 2, 3) // false
intWithinBounds(9, 9, 9) // false
intWithinBounds(-3, -5, -2) // true
intWithinBounds(-3, -5, -3) // false
intWithinBounds(-3, -10, 10) // true
intWithinBounds(0, -3, 3) // true
intWithinBounds(0, 0, 1) // true
intWithinBounds(7, 7, 12) // true
