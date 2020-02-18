function addOddToN(n) {
	return Array.from(new Array(n), (x, i) => (i + 1) % 2 !== 0 ? i + 1 : null).reduce((x,y) => x + y)
}

addOddToN(1) // 1
addOddToN(3) // 4
addOddToN(5) // 9
addOddToN(7) // 16
addOddToN(9) // 25
addOddToN(11) // 36
addOddToN(13) // 49
addOddToN(15) // 64
addOddToN(17) // 81
addOddToN(19) // 100
addOddToN(21) // 121
addOddToN(23) // 144
addOddToN(25) // 169
addOddToN(27) // 196
addOddToN(29) // 225
addOddToN(31) // 256
addOddToN(33) // 289
addOddToN(35) // 324
addOddToN(37) // 361
addOddToN(39) // 400
addOddToN(41) // 441
addOddToN(43) // 484
addOddToN(45) // 529
addOddToN(47) // 576
addOddToN(49) // 625
addOddToN(51) // 676
addOddToN(53) // 729
addOddToN(55) // 784
addOddToN(57) // 841
addOddToN(59) // 900
addOddToN(61) // 961
addOddToN(63) // 1024
addOddToN(65) // 1089
addOddToN(67) // 1156
addOddToN(69) // 1225
addOddToN(71) // 1296
addOddToN(73) // 1369
addOddToN(75) // 1444
addOddToN(77) // 1521
addOddToN(79) // 1600
addOddToN(81) // 1681
addOddToN(83) // 1764
addOddToN(85) // 1849
addOddToN(87) // 1936
addOddToN(89) // 2025
addOddToN(91) // 2116
addOddToN(93) // 2209
addOddToN(95) // 2304
addOddToN(97) // 2401
addOddToN(99) // 2500

// Made by @Joshua Señoron
