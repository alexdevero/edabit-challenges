function imposterFormula(i, p) {
	return Math.round(100 * (i / p)) + '%'
}

imposterFormula(1, 9) // "11%"
imposterFormula(2, 10) // "20%"
imposterFormula(3, 7) // "43%"
