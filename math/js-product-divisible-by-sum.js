function divisible(arr) {
	return arr.reduce((acc, currVal) => acc * currVal) % arr.reduce((acc, currVal) => acc + currVal) === 0
}

divisible([3, 2, 4, 1]) // false
divisible([4, 4, 4, 4]) // true
divisible([4, 2, 6]) // true
divisible([1, 1, 1, 1, 10]) // false
divisible([10, 5, 10]) // true
divisible([3, 5, 1]) // false
