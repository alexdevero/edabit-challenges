function lastDig(a, b, c) {
	return (Math.abs(a) % 10) * (Math.abs(b) % 10) >= 10 ? ((Math.abs(a) % 10) * (Math.abs(b) % 10) % 10) === (Math.abs(c) % 10) : (Math.abs(a) % 10) * (Math.abs(b) % 10) === (Math.abs(c) % 10)
}

// or
function lastDig(a, b, c) {
	return ((a % 10) * ( b % 10)) % 10 === c % 10
}

lastDig(1, 1, 1) // true
lastDig(12, 15, 10) // true
lastDig(15228, 9209, 72162) // true
lastDig(15, 1, 1) // false
lastDig(123, 15, 10) // false
lastDig(5213, 99219, 6165) // false
lastDig(1523, 513, 512) // false
lastDig(-15, 1, 1) // false, "Should work with negative numbers."
lastDig(123, -15, 10) // false, "Should work with negative numbers."
lastDig(-12, 15, -10) // true, "Should work with negative numbers."
lastDig(15228, -9209, -72162) // true, "Should work with negative numbers."
