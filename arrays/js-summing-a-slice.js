function sliceSum(arr, n) {
	return arr.slice(0, n).reduce((x, y) => x + y, 0)
}

sliceSum([1, 3, 2], 2) // 4
sliceSum([4, 2, 5, 7], 4) // 18
sliceSum([3, 6, 2], 0) // 0
sliceSum([2, 4], 9) // 6
sliceSum([-5, 2], 2), // -3
sliceSum([0, 0, 0, 3, 4], 3) // 0
