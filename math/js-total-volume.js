function totalVolume(...boxes) {
	return boxes.map(box => box.reduce((acc, currVal) => acc * currVal)).reduce((acc, currVal) => acc + currVal, 0)
}

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) // 63
totalVolume([2, 2, 2], [2, 1, 1]) // 10
totalVolume([1, 1, 1]) // 1
totalVolume([5, 1, 10], [1, 9, 2]) // 68
totalVolume([1, 1, 5], [3, 3, 1]) // 14
