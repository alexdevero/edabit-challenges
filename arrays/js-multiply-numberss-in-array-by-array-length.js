function MultiplyByLength(arr) {
	return arr.map(number => number * arr.length)
}

MultiplyByLength([2,6,4,9]) // [8,24,16,36])
MultiplyByLength([4,1,1]) // [12,3,3])
MultiplyByLength([1,0,3,3,7,2,1]) // [7,0,21,21,49,14,7])
