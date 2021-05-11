function progressDays(runs) {
	return runs.reduce((acc, cur, i, arr) => acc + (i === 0 ? 0 : cur > arr[i -1] ? 1 : 0), 0)
}

progressDays([3, 4, 1, 2]) // 2)
progressDays([10, 11, 12, 9, 10]) // 3)
progressDays([6, 5, 4, 3, 2, 9]) // 1)
progressDays([9, 9]) // 0)
progressDays([12, 11, 10, 12, 11, 13]) // 2)
