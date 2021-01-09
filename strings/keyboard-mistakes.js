function keyboardMistakes(str) {
	return str.replace(/\d/g, n => ({ 4: 'A', 5: 'S', 0: 'O', 1: 'I' })[n])
}

keyboardMistakes("MUB45H1R") // "MUBASHIR"
keyboardMistakes("DUBL1N") // "DUBLIN"
keyboardMistakes("51NG4P0RE") // "SINGAPORE"
keyboardMistakes("P4K15T4N") // "PAKISTAN"
keyboardMistakes("P4R15") // "PARIS"
