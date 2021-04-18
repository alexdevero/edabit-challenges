function longestTime(h, m, s) {
	let arr = [h* 3600, m * 60, s]
	return arguments[arr.indexOf(Math.max(...arr))]
}

longestTime(1, 59, 3598) // 1
longestTime(2, 300, 15000) // 300
longestTime(15, 955, 59400) // 59400
