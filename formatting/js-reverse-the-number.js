function rev(n) {
	return n.toString().replace('-', '').split('').reverse().join('')
}

rev(215) // "512"
rev(122225) // "522221"
rev(215) // "512"
rev(-215) // "512", "Should work with negative numbers."
rev(-2152) // "2512", "Should work with negative numbers."
rev(-122157) // "751221", "Should work with negative numbers."
rev(666) // "666", "Should work if all digits are the same."
rev(999) // "999", "Should work if all digits are the same."
