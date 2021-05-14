function factorial(num) {
	return num === 1 ? 1 : num * factorial(num - 1)
}

factorial(7) // 5040
factorial(1) // 1
factorial(9) // 362880
factorial(2) // 2