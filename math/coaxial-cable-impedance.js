function impedanceCalculator(Dd, Dc, er) {
	return Math.round((138 * Math.log10(Dd / Dc)) / Math.sqrt(er))
}

impedanceCalculator(5.3, 1.2, 2.2) // 60.0
impedanceCalculator(4.58, 1.33, 2.2) // 50.0
impedanceCalculator(20.7, 2, 4) // 70.0
impedanceCalculator(40, 2.05, 2.2) // 120.0
impedanceCalculator(25.6, 4, 2.2) // 75.0
