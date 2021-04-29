function dartsScoring(x, y) {
	return Math.hypot(x, y) > 10 ? 0 : Math.hypot(x, y) > 5 ? 1 : Math.hypot(x, y) > 1 ? 5 : 10
}

dartsScoring(-9, 9) // 0
dartsScoring(0, 10) // 1
dartsScoring(-5, 0) // 5
dartsScoring(0, -1) // 10
dartsScoring(0, 0) // 10
dartsScoring(-0.1, -0.1) // 10
dartsScoring(0.7, 0.7) // 10
dartsScoring(0.8, -0.8) // 5
dartsScoring(-3.5, 3.5) // 5
dartsScoring(-3.6, -3.6) // 1
dartsScoring(-7.0, 7.0) // 1
dartsScoring(7.1, -7.1) // 0
dartsScoring(0.5, -4) // 5
