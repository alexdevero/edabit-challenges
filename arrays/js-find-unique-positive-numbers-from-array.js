function uniqueArr(arr) {
	return Array(...new Set(arr.filter(x => x > 0)))
}

uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) // [1, 3]
uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) // [3, 5]
uniqueArr([-5, 3, 2, -4, 3, -1, -7, 2, 4, 4]) // [3, 2, 4]
uniqueArr([3, -5, 0, -5, 2, -1, 0, -4, -6, 1]) // [3, 2, 1]
uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) // [10, 6, 13, 5]
uniqueArr([5, 10, -12, 5, 9, 5, 10, 9, 10, -12]) // [5, 10, 9]
uniqueArr([]) // []
