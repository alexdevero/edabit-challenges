function isOmnipresent(arr, val) {
	return arr.every(x => x.includes(val))
}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) // true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) // false
isOmnipresent([[5], [5], [5], [6, 5]], 5) // true
isOmnipresent([[5], [5], [5], [6, 5]], 6) // false
isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1) // true
