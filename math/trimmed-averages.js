function trimmedAverages(arr) {
	const newArr = arr.sort((x, y) => x - y)
		.slice(1, arr.length - 1)

	return Math.round(newArr.reduce((acc, curr) => acc + curr, 0) / newArr.length)
}

trimmedAverages([4, 5, 7, 100]) // 6
trimmedAverages([10, 25, 5, 15, 20]) // 15
trimmedAverages([1, 1, 1]) // 1
trimmedAverages([14, 8, 8]) // 8
trimmedAverages([18, 19, 13]) // 18
trimmedAverages([18, 16, 20, 18, 3]) // 17
trimmedAverages([10, 15, 15, 11]) // 13
trimmedAverages([4, 12, 4, 17, 11]) // 9
trimmedAverages([9, 1, 11, 8, 15, 20, 5]) // 10
trimmedAverages([13, 10, 13, 6]) // 12
