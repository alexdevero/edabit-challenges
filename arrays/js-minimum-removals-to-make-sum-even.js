function minimumRemovals(arr) {
	return arr.reduce((acc, curVal) => acc + curVal, 0) % 2
}

minimumRemovals([1, 2, 3, 4, 5]) // 1
minimumRemovals([5, 7, 9, 11]) // 0
minimumRemovals([5, 7, 9, 12]) // 1
minimumRemovals([5, 8, 8, 8]) // 1
minimumRemovals([5, 8, 8, 8, 9, 9]) // 1
minimumRemovals([9, 8, 8, 8, 9, 9]) // 1
minimumRemovals([5, 5, 4, 4, 3, 3]) // 0
minimumRemovals([5, 3, 4, 4, 3]) // 1
minimumRemovals([5, 3, 4, 4, 0]) // 0
