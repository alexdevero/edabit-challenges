function toArray(num) {
	return num.toString().split('')
}

function toNumber(arr) {
	return parseInt(arr.join(''))
}

toArray(235) // [2, 3, 5]
toArray(19) // [1, 9]
toArray(0) // [0]
toNumber([2, 3, 5]) // 235
toNumber([1, 9]) // 19
toNumber([0]) // 0
