function distanceHome (arr) {
	return Math.abs(arr.reduce((acc, curVal) => acc + curVal, 0))
}

distanceHome([2, 4, 2, 5]) // 13
distanceHome([-1, -4, -3, -2]) // 10
distanceHome([3, 4, -5, -2]) // 0
distanceHome([12, 12]) // 24
distanceHome([10, 8, -4, -10, -15, 14, -13]) // 10
distanceHome([-3, -6, -15, -14, -11, 3, 0, -15, 0]) // 61
distanceHome([-11, -4, -14, 4, -2, 7, 0, -1, 10, -1]) // 12
distanceHome([-7, 1, 0, -9, 0, 0]) // 15
distanceHome([-15, -7, 4, -3, -8]) // 29
distanceHome([-11, 10, -6, 8, 0, 12, -11]) // 2
distanceHome([-4, -5, -14, -13]) // 36
distanceHome([5, 8]) // 13
distanceHome([10, -15, -3, 2, 4, -15, 11, 1]) // 5
distanceHome([9, 13, -11, -11, -10, -12, 15, -3]) // 10
distanceHome([13, -1, -12, -4, 0, 10, 8, 10]) // 24
distanceHome([-9, 1, -10, 10, -9, -10, 0, 11, -2, -3]) // 21
distanceHome([13, 2, 12, 12, -15, 11, 9, 0, 13]) // 57
distanceHome([0, 5, 8, -3]) // 10
distanceHome([-10, 2, -1, -12]) // 21
distanceHome([-9, -11, 11, -15, -8]) // 32
