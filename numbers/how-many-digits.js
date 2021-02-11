function sumDigits(n) {
	return Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1
}

sumDigits(100) // 3
sumDigits(1000) // 4
sumDigits(12345) // 5
sumDigits(1000000000) // 10
sumDigits(145874589632) // 12
sumDigits(0) // 1
sumDigits(12345698745254856320) // 20
sumDigits(123456789) // 9
sumDigits(1234569874525485632012345698745254856320) // 40
sumDigits(1232458) // 7
