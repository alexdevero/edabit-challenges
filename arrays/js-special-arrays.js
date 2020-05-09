function isSpecialArray(arr) {
	return arr.every((el, index) => el % 2 === index % 2)
}

isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) // true
isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) // false
isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) // false
isSpecialArray([1, 1, 1, 2]) // false
isSpecialArray([2, 2, 2, 2]) // false
isSpecialArray([2, 1, 2, 1]) // true
isSpecialArray([4, 5, 6, 7]) // true
isSpecialArray([4, 5, 6, 7, 0, 5]) // true
