function ascDesNone(arr, str) {
	return str == 'Asc' ? arr.sort((a, b) => a - b) :
		str == 'Des' ? arr.sort((a, b) => b - a) :
		arr
}

ascDesNone([4, 3, 2, 1], 'Asc') // [1, 2, 3, 4])
ascDesNone([7, 8, 11, 66], 'Des') // [66, 11, 8, 7])
ascDesNone([1, 2, 3, 4], 'None') //[1, 2, 3, 4])
ascDesNone([1, 0, 1, 0], 'Asc') // [0, 0, 1, 1])
ascDesNone([1, 2, 2, 2, 2, 2, 2], 'Des') // [2, 2, 2, 2, 2, 2, 1])
ascDesNone([9, 7, 43, 11, 16, 111, 19], 'Asc') // [7, 9, 11, 16, 19, 43, 111])
