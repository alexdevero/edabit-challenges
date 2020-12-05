function findFactors(num) {
	return num < 1 ? [] : Array.from(Array(num), (el, index) => index + 1)
		.filter(fact => num % fact === 0)
}

findFactors(9) // [1, 3, 9])
findFactors(12) // [1, 2, 3, 4, 6, 12])
findFactors(20) // [1, 2, 4, 5, 10, 20])
findFactors(0) // [])
findFactors(100) // [1, 2, 4, 5, 10, 20, 25, 50, 100])
findFactors(999) // [1, 3, 9, 27, 37, 111, 333, 999])
findFactors(2226) // [1, 2, 3, 6, 7, 14, 21, 42, 53, 106, 159, 318, 371, 742, 1113, 2226])
