function nextInLine(arr, num) {
	return (arr.length === 0 || typeof arr !== 'object') ? 'No array has been selected' : arr.slice(1).concat(num)
}

nextInLine([5,6,7,8,9], 1) // [6,7,8,9 ,1]
nextInLine([7,6,3,23,17], 10) // [6,3,23,17,10]
nextInLine([1,10,20,42], 6) // [10,20,42,6]
nextInLine(NaN,6) //  'No array has been selected'
nextInLine([0], 1) // [1]
