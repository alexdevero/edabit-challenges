function fact(n) {
	return n === 0 ? 1 : n * fact(n - 1)
}

fact(0) // 1
fact(1) // 1
fact(2) // 2
fact(3) // 6
fact(7) // 5040
fact(9) // 362880
fact(15) // 1307674368000
