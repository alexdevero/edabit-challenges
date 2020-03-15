function squareDigits(n) {
	return +(n.toString().split('').map(num => num * num).join(''))
}

squareDigits(9119) // 811181
squareDigits(8726) // 6449436
squareDigits(9763) // 8149369
squareDigits(2230) // 4490
squareDigits(2797) // 4498149
squareDigits(233) // 499
squareDigits(7437) // 4916949
squareDigits(2483) // 416649
squareDigits(5742) // 2549164
squareDigits(5636) // 2536936
squareDigits(841) // 64161
