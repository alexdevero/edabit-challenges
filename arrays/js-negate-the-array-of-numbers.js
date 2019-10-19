function negate(arr) {
	return arr.map(number => number * -1)
}

negate([1, 2, 3, 4]) // [-1, -2, -3, -4]
negate([-1, -2, -3, -4]) // [1, 2, 3, 4]
negate([]) // []
