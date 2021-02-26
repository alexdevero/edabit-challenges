function halflifeCalculator(mass, hlife, n) {
	return [+(mass * 0.5 ** n).toFixed(3), n * hlife]
}

halflifeCalculator(1000, 5730, 2) // [250, 11460])
halflifeCalculator(1600, 6, 3) // [200, 18])
halflifeCalculator(13, 500, 1) // [6.5, 500])
halflifeCalculator(100, 35, 5) // [3.125, 175])
halflifeCalculator(11037, 53, 6) // [172.453, 318])
