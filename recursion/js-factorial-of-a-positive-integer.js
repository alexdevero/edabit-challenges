function factorial(z) {
	return z === 0 ? 1 : z * factorial(z - 1)
}

factorial(4) // 24
factorial(0) // 1
factorial(9) // 362880
factorial(1) // 1
factorial(2) // 2
