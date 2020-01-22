function isAvgWhole(arr) {
	return Number.isInteger(arr.reduce((acc, val) => acc + val) / arr.length)
}

isAvgWhole([3, 5, 9]) // false
isAvgWhole([1, 1, 1, 1]) // true
isAvgWhole([1, 2, 3, 4, 5]) // true
isAvgWhole([5, 2, 4]) // false
isAvgWhole([11, 22]) // false
isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]) // false
