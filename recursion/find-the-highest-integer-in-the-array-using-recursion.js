function findHighest(arr) {
	if (arr.length === 0) return undefined
	if (arr.length === 1) return arr[0]
	return (arr[0] > findHighest(arr.slice(1))) ? arr[0] : findHighest(arr.slice(1))
}

findHighest([6,7,8]) // 8
findHighest([-1, 3, 5, 6, 99, 12, 2]) // 99
findHighest([0, 12, 4, 87]) // 87
