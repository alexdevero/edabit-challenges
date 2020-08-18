function oddeven(arr) {
	return arr.filter(x => x % 2 !== 0).length > arr.filter(x => x % 2 === 0).length
}

oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]) // true
oddeven([1]) // true
oddeven([1, 2, 3, 4, 5, 6, 7, 9]) // true
oddeven([42, 1, 66]) // false
oddeven([2, 3, 4, 5, 6, 7, 8]) // false
oddeven([43264573658142353463158]) // false
