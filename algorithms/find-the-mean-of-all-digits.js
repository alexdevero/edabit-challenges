function mean(num) {
	const arr = ('' + num).split('')
	return arr.reduce((acc, cur) => acc + (+cur), 0) / arr.length
}

mean(666) // 6
mean(80) // 4
mean(789) // 8
mean(417) // 4
mean(1357) // 4
mean(42) // 3
mean(12345) // 3
