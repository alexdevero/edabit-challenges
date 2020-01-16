function canNest(arr1, arr2) {
	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)
}

canNest([1, 2, 3, 4], [0, 6]) // true
canNest([3, 1], [4, 0]) // true
canNest([9, 9, 8], [8, 9, 10]) // false
canNest([9, 9, 8], [8, 9]) // false
canNest([1, 2, 3, 4], [2, 3]) // false
