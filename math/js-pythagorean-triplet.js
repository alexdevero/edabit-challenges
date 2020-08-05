function isTriplet(n1, n2, n3) {
	const arr = [n1, n2, n3].sort((x, y) => x < y ? -1 : 1)
	return Math.pow(arr[0], 2) + Math.pow(arr[1], 2) === Math.pow(arr[2], 2)
}

isTriplet(3, 4, 5) // true
isTriplet(1, 2, 3) // false
isTriplet(3, 18, 8) // false
isTriplet(7, 12, 7) // false
isTriplet(13, 5, 12) // true
isTriplet(12, 20, 18) // false
isTriplet(17, 14, 2) // false
isTriplet(6, 15, 12) // false
isTriplet(60, 61, 11) // true
isTriplet(7, 13, 15) // false
isTriplet(12, 18, 7) // false
isTriplet(8, 17, 15) // true
isTriplet(3120, 79, 3121) // true
