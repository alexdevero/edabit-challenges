function arrayOperation(x, y, n) {
	return Array.from(new Array(y), (n, i) => i + 1).filter(num => num >= x && num % n === 0)
}

arrayOperation(1, 10, 3) // [3, 6, 9]
arrayOperation(7, 9, 2) // [8]
arrayOperation(15, 20, 7) // []
arrayOperation(10, 50, 10) // [10, 20, 30, 40, 50]
arrayOperation(1, 10, 2) // [2, 4, 6, 8, 10]
arrayOperation(1, 100, 17) // [17, 34, 51, 68, 85]
arrayOperation(15, 20, 5) // [15, 20]
