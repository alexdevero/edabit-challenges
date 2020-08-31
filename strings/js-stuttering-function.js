function stutter(word) {
	return `${`${word.substring(0, 2)}... `.repeat(2)}${word}?`
}

stutter("incredible") // "in... in... incredible?"
stutter("am") // "am... am... am?"
stutter("outstanding") // "ou... ou... outstanding?"
