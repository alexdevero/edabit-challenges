function otherSides(length) {
	return [2 * length, +((3 ** .5 * length).toFixed(2))]
}

otherSides(1) // [2, 1.73]
otherSides(2) // [4, 3.46]
otherSides(3) // [6, 5.2]
otherSides(7) // [14, 12.12]
