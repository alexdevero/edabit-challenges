function missingNum(arr) {
	return 55 - arr.reduce((acc, currVal) => acc + currVal, 0)
}

missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) // 5
missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) // 10
missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]) // 1
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) // 7
missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]) // 3
