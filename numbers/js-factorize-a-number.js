function factorize(num) {
	return Array.from(Array(num + 1), (num, i) => i).filter(item => num % item === 0)
}

factorize(12) // [1, 2, 3, 4, 6, 12]
factorize(4) // [1, 2, 4]
factorize(17) // [1, 17]
factorize(24) // [1, 2, 3, 4, 6, 8, 12, 24]
factorize(1) // [1]
