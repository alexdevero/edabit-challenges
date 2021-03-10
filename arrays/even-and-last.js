function evenLast(arr) {
	return arr.reduce((acc, curVal, i) => i % 2 === 0 ? acc + (curVal * arr[arr.length - 1]) : acc + 0, 0)
}

evenLast([2, 3, 4, 5]) // 30
evenLast([]) // 0
evenLast([2, 2, 2, 2]) // 8
evenLast([1, 3, 3, 1, 10]) // 140
evenLast([-11, 3, 3, 1, 10]) // 20
