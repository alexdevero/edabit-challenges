function iSqrt(n) {
	if (n < 0) return 'invalid'

	let iteration = 0
	let num = n

	while (num >= 2) {
		num = Math.sqrt(num)
		iteration++
	}

	return iteration
}

iSqrt(1) // 0
iSqrt(2) // 1
iSqrt(7) // 2
iSqrt(27) // 3
iSqrt(256) // 4
iSqrt(-1) // "invalid"
iSqrt(25) // 3
iSqrt(113) // 3
iSqrt(999) // 4
iSqrt(2746) // 4
iSqrt(16943) // 4
iSqrt(97197) // 5
iSqrt(108787) // 5
iSqrt(4294967296) // 6
iSqrt(-198329) // "invalid"
iSqrt(-928437002) // "invalid"
