const dividesEvenly = (a, b) => {
	return a % b === 0
}

dividesEvenly(98, 7) // true
dividesEvenly(87, 49) // false
dividesEvenly(34, 14) // false
dividesEvenly(78, 6) // true
dividesEvenly(30, 4) // false
dividesEvenly(87, 73) // false
dividesEvenly(74, 7) // false
dividesEvenly(87, 29) // true
dividesEvenly(48, 24) // true
dividesEvenly(99, 20) // false
dividesEvenly(98, 49) // true
dividesEvenly(100, 6) // false
dividesEvenly(64, 4) // true
dividesEvenly(70, 35) // true
dividesEvenly(38, 38) // true
dividesEvenly(29, 3) // false
dividesEvenly(20, 8) // false
dividesEvenly(66, 50) // false
dividesEvenly(95, 1) // true
dividesEvenly(58, 2) // true
