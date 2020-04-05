function combinations(items) {
	return [...arguments].reduce((acc, currVal) => currVal !== 0 ? acc * currVal : acc + currVal)
}

combinations(2) // 2
combinations(2, 3) // 6
combinations(3, 5) // 15
combinations(5, 6, 7) // 210
combinations(5, 5, 5, 5) // 625
combinations(3, 6, 9) // 162
combinations(2, 3, 4, 5, 6, 7, 8, 9, 10) // 3628800
combinations(4, 5, 6) // 120
combinations(5, 6, 7, 8) // 1680
combinations(6, 7, 0) // 42
