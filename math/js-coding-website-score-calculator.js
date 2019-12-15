function scoreCalculator(easy, med, hard) {
	return easy < 0 || med < 0 || hard < 0 ? 'invalid' : (easy * 5) + (med * 10) + (hard * 20)
}

scoreCalculator(4, 2, 7) // 180, "Test 1"
scoreCalculator(3, 12, 0) // 135, "Test 2"
scoreCalculator(5, -5, 2) // "invalid", "Test 3"
scoreCalculator(20, 7, 3) // 230
scoreCalculator(0, 0, 0) // 0
scoreCalculator(1, 2, 3) // 85
