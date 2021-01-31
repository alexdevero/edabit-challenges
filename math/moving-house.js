function yearsInOneHouse(age, moves) {
	return Math.round(age / (moves + 1))
}

yearsInOneHouse(30, 1) // 15
yearsInOneHouse(15, 2) // 5
yearsInOneHouse(80, 0) // 80
yearsInOneHouse(23, 2) // 8
yearsInOneHouse(31, 2) // 10
yearsInOneHouse(1, 0) // 1
