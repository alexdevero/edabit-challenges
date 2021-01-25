function forbiddenLetter(char, arr) {
	return JSON.stringify(arr).indexOf(char) === -1
}

forbiddenLetter('e', ['rinse', 'and', 'repeat']) // false
forbiddenLetter('d', ['python', 'javascript', 'ruby', 'fortran']) // true
forbiddenLetter('a', ['spoon', 'fork', 'knife']) // true
forbiddenLetter('b', ['test', 'dot', 'assert', 'equals']) // true
forbiddenLetter('i', ['rock', 'paper', 'scissors']) // false
forbiddenLetter('t', []) // true
