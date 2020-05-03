function solveForExp(a, b) {
	return Math.round(Math.log(b) / Math.log(a))
}

solveForExp(4, 1024) // 5
solveForExp(2, 1024) // 10
solveForExp(9, 3486784401) // 10
solveForExp(4, 4294967296) // 16
solveForExp(8, 134217728) // 9
solveForExp(19, 47045881) // 6
solveForExp(10, 100000000) // 8
