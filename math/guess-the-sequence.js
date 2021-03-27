function guessSequence(n) {
	return Array.from(new Array(n), (el, i) => 90 + (i * 60))
		.reduce((acc, cur) => acc + cur)
}

guessSequence(1) // 90
guessSequence(2) // 240
guessSequence(3) // 450
guessSequence(4) // 720
guessSequence(5) // 1050
guessSequence(6) // 1440
guessSequence(7) // 1890
guessSequence(8) // 2400
guessSequence(9) // 2970
guessSequence(10) // 3600
guessSequence(11) // 4290
guessSequence(12) // 5040
guessSequence(13) // 5850
guessSequence(14) // 6720
guessSequence(15) // 7650
guessSequence(16) // 8640
guessSequence(17) // 9690
guessSequence(18) // 10800
guessSequence(19) // 11970
guessSequence(20) // 13200
guessSequence(21) // 14490
guessSequence(22) // 15840
guessSequence(23) // 17250
guessSequence(24) // 18720
guessSequence(25) // 20250
guessSequence(26) // 21840
guessSequence(27) // 23490
guessSequence(28) // 25200
guessSequence(29) // 26970
guessSequence(30) // 28800
guessSequence(31) // 30690
guessSequence(32) // 32640
guessSequence(33) // 34650
guessSequence(34) // 36720
guessSequence(35) // 38850
guessSequence(36) // 41040
guessSequence(37) // 43290
guessSequence(38) // 45600
guessSequence(39) // 47970
