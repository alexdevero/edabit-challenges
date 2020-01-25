function addUpTo(n) {
	return n === 0 ? 0 : Array.from(new Array(n), (i, n) => n + 1).reduce((acc, curVal) => curVal + acc)
}

addUpTo(3) // 6, "Example #1"
addUpTo(10) // 55, "Example #2"
addUpTo(0) // 0
addUpTo(2) // 3
addUpTo(20) // 210
addUpTo(1) // 1
