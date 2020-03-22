function same(a1, a2) {
	return new Set(a1).size === new Set(a2).size
}

same([1, 3, 4, 4, 4], [2, 5, 7]) // true
same([9, 8, 7, 6], [4, 4, 3, 1]) // false
same([2], [3, 3, 3, 3, 3]) // true
same([5, 6, 7, 9], [4, 1]) // false
same([5, 9, 9], [9, 5]) // true
same([1, 1, 1, 4], [1, 4, 4, 4, 4, 4]) // true
same([], []) // true
