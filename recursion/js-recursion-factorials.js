function factorial(n) {
	return n < 0 ? -1 : n === 0 ? 1 : n * factorial(n - 1)
}

factorial(5) // 120
factorial(3) // 6
factorial(1) // 1
factorial(0) // 1
