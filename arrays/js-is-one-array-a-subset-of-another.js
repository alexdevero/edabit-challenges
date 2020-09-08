function isSubset(arr1, arr2) {
	return arr1.every(el => arr2.indexOf(el) > -1)
}

isSubset([3, 2, 5], [5, 3, 7, 9, 2]) // true
isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) // true
isSubset([1, 2], [1, 2, 3]) // true
isSubset([1, 2], [3, 5, 9, 1]) // false
isSubset([1, 2, 3, 4], [4, 3, 2, 1]) // true
isSubset([7, 9, 8, 4, 2], [7, 9, 5, 8, 4]) // false
