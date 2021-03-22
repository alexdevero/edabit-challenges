function multiply(arr) {
	return function(num) {
		return arr.map(el => el * num)
	}
}

multiply([1, 2, 3])(1) // [1, 2, 3]
multiply([1, 2, 3])(2) // [2, 4, 6]
multiply([1, 2, 3])(0) // [0, 0, 0]
multiply([4, 6, 5])(10) // [40, 60, 50]
multiply([])(10) // [], "should return an empty array"
