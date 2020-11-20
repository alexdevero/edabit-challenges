function divisibleByB(a, b) {
	return Math.floor((a / b) + 1) * b
}

divisibleByB(17, 8) // 24
divisibleByB(98, 3) // 99
divisibleByB(14, 11) // 22
divisibleByB(11, 8) // 16
divisibleByB(450, 36) // 468
divisibleByB(1019, 13) // 1027
