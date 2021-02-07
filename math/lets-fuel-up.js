function calculateFuel(n) {
	return Math.max(100, n * 10)
}

calculateFuel(15) // 150
calculateFuel(23) // 230
calculateFuel(10) // 100
calculateFuel(3) // 100
calculateFuel(23.5) // 235
calculateFuel(3.14) // 100
calculateFuel(9.99999) // 100
calculateFuel(822315322) // 8223153220
calculateFuel(12345.6789) // 123456.789
calculateFuel(31.41) // 314.1
