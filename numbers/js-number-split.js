function numberSplit(n) {
	return [Math.floor(n / 2), Math.ceil(n / 2)]
}

numberSplit(4) // [2, 2]
numberSplit(10) // [5, 5]
numberSplit(11) // [5, 6]
numberSplit(0) // [0, 0]
numberSplit(1) // [0, 1]
numberSplit(-4) // [-2, -2]
numberSplit(-5) // [-3, -2]
numberSplit(-9) // [-5, -4]
