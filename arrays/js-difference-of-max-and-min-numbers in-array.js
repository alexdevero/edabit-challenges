function diffMaxMin(arr) {
	return Math.abs(Math.min(...arr) - Math.max(...arr))
}

diffMaxMin([10, 4, 1, 2, 8, 91]) // 90
diffMaxMin([-70, 43, 34, 54, 22]) // 124
