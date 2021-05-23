function factory(num) {
	return function(arr) {
		return arr.map(number => number / num)
	}
}

factory(15)([30, 45, 60]) // [2, 3, 4]
factory(2)([2, 4, 6]) // [1, 2, 3]
factory(6)([60, 30] //, [10, 5]
factory(7)([14, 21, 49]) // [2, 3, 7]
factory(5)([10, 5, 20]) // [2, 1, 4]
factory(10)([100, 10, 60]) // [10, 1, 6]
