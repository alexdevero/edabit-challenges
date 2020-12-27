function binaryToDecimal(arr) {
	return parseInt(arr.join(''), 2)
}

binaryToDecimal([0,0,0,1]) // 1
binaryToDecimal([0,0,1,0]) // 2
binaryToDecimal([1,1,1,1]) // 15
binaryToDecimal([0,1,1,0]) // 6
binaryToDecimal([1,0,1,0,1,1,1]) // 87
binaryToDecimal([1,1,1,1,1,0,1,1,0,1]) // 1005
binaryToDecimal([1,1,1,1,1,0,1,1,1,0,1]) // 2013
