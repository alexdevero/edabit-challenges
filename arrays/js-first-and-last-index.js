function charIndex(word, char) {
	return word.indexOf(char) === - 1 ? undefined : [word.indexOf(char), word.lastIndexOf(char)]
}

charIndex('hello', 'l') // [2, 3]
charIndex('circumlocution', 'r') // [2, 2]
charIndex('circumlocution', 'i') // [1, 11]
charIndex('circumlocution', 'c') // [0, 8]
charIndex('happy', 'h') // [0, 0]
charIndex('happy', 'p') // [2, 3]
charIndex('happy', 'e') // undefined
