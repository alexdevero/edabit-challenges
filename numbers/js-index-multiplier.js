function indexMultiplier(arr) {
	return arr.reduce((acc, curVal, ind) => acc + (curVal * ind),0)
}

indexMultiplier([9, 3, 7, -7]) // -4
indexMultiplier([3, 8, 6, -4]) // 8
indexMultiplier([10, -9, -2, 0, 2]) // -5
indexMultiplier([4, 4, 2, 2, -4]) // -2
indexMultiplier([9, 4, 7, 5, -1, -3]) // 14
indexMultiplier([-9, 5, 9, 5, -7, 7]) // 45
indexMultiplier([-1, -2, 8, -5]) // -1
indexMultiplier([7, 10, -5, -4, 6, 2]) // 22
indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1]) // 16
indexMultiplier([-2, 5, -7, -23, 0, 14]) // -8
indexMultiplier([53, -43, 39, -2, -11, 3]) // 0
indexMultiplier([40, 32, -18, 48, -15]) // 80
indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34]) // 170
indexMultiplier([-21, 30, 20, 6, -16]) // 24
indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20]) // -183
indexMultiplier([]) // 0
