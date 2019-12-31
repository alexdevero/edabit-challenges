function binaryToDecimal(binary) {
	return parseInt(binary.join(''), 2)
}

binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]) // 255
binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]) // 0
binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]) // 188
binaryToDecimal([1, 0, 1, 1, 0, 1, 0, 1]) // 181
