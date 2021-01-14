function arithmeticProgression(start, diff, n){
	return Array.from(new Array(n), () => start)
		.map((el, i) => i > 0 ? el + (diff * i) : el)
		.join(', ')
}

arithmeticProgression(1, 2, 5) // "1, 3, 5, 7, 9"
arithmeticProgression(1, 0, 5) // "1, 1, 1, 1, 1"
arithmeticProgression(1, -3, 10) // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
arithmeticProgression(100, -10, 10) // "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"
