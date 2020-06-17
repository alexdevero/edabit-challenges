function sumArray(arr) {
	return arr.flat(Infinity).reduce((x, y) => x + y)
}

sumArray([1, 2, 3]) // 6
sumArray([1, [1, 2], [3, 1]]) // 8
sumArray([[1, 1], [2, 8], 8]) // 20
sumArray([1, 2]) // 3
sumArray([1, [2, [1]], 3]) // 7
