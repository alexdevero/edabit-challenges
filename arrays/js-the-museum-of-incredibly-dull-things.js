function removeSmallest(arr) {
	return arr.length === 0 ? [] : [...arr.slice(0, arr.indexOf(Math.min(...arr))), ...arr.slice(arr.indexOf(Math.min(...arr)) + 1)]
}

removeSmallest([1, 2, 3, 4, 5]) // [2, 3, 4, 5]
removeSmallest([5, 3, 2, 1, 4]) // [5, 3, 2, 4]
removeSmallest([2, 2, 1, 2, 1]) // [2, 2, 2, 1]
removeSmallest([3, 1, 6, 7, 3, 7, 6]) // [3, 6, 7, 3, 7, 6]
removeSmallest([4, 4, 4, 1]) // [4, 4, 4]
removeSmallest([5, 4, 5, 3, 1, 1]) // [5, 4, 5, 3, 1]
removeSmallest([1, 5, 3]) // [5, 3]
removeSmallest([]) // []
removeSmallest([6, 2, 5, 4, 8, 6, 3, 2, 7]) // [6, 5, 4, 8, 6, 3, 2, 7]
removeSmallest([3]) // []
