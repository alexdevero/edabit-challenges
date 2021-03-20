function arraySum(nums) {
	return +nums.reduce((acc, cur) => acc + cur ** (cur % 2 ? .5 : 2), 0).toFixed(2)
}

arraySum([1, 3, 3, 1, 10]) // 105.46
arraySum([0, 3, 3, 1, 10]) // 104.46
arraySum([1, 31, 3, 11, 0]) // 11.62
arraySum([1, 2, 3, 4, 5, 6, 8]) // 124.97)
arraySum([2, 3, 4, 5]) // 23.97
arraySum([2, 4, 6, 8, 9, 11]) // 126.32
arraySum([6, 5, 7, 2, 1]) // 45.88
arraySum([2, 2, 2, //2]), 16
arraySum([5, 1, 2, 3, 4, 6, 7, 8, 4]) // 143.61
arraySum([2, 4, 3, 2, 3, 4, 4, 5]) // 61.7
arraySum([1, 14, 9, 8, 17, 21]) // 272.71)
arraySum([7, 23, 22, 6, 8, 2]) // 595.44
arraySum([33, 2, 1, 5, 0, 5]) // 15.22
arraySum([5, 6, 7, 3, 22, 2]) // 530.61
arraySum([3, 4, 5, 6, 7, 8]) // 122.61
arraySum([1, 4, 5, 6, 7, 2, 3]) // 63.61
arraySum([2, 7, 0, 3, 4, 8, 3]) // 90.11
arraySum([9, 3, 0, 2, 7, 8]) // 75.38
arraySum([7, 7, 7, 7, 1]) // 11.58
arraySum([6, 7, 8, 9, 10, 3, 4]) // 223.38
arraySum([4, 5, 7, 8, 1, 2, 3, 0]) // 91.61
arraySum([9, 8, 7, 6, 5, 4, 3, 2]) // 129.61
