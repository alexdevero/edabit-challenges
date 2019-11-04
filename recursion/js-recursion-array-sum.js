function sum(arr) {
	return arr.length === 0 ? 0 : arr.reduce((currValue, increment) => currValue + increment)
}

sum([1, 2, 3, 4]) // 10
sum([-1, -1, -1]) // -3
sum([1]) // 1
sum([]) // 0
