function getAbsSum(arr) {
	return arr.reduce((acc, currVal) => acc + Math.abs(currVal), 0)
}

getAbsSum([2, -1, -3, 4, 8]) // 18
getAbsSum([-1]) // 1
getAbsSum([-1, -3, -5, -4, -10, 0]) // 23
getAbsSum([8, 9, 10, 32, 101, -10]) // 170
getAbsSum([500]) // 500
