function alphNum(str) {
	const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

	return str.split('').map(char => alphabet.indexOf(char)).join(' ')
}

alphNum("ABCD") // "0 1 2 3"
alphNum("BCDA") // "1 2 3 0"
alphNum("AAA") // "0 0 0"
alphNum("XYZ") // "23 24 25"
