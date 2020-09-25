function word(s) {
	const numbers = {
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9,
		'zero': 0
	}

	return numbers[s]
}

word('zero') // 0
word('one') // 1
word('two') // 2
word('three') // 3
word('four') // 4
word('five') // 5
word('six') // 6
word('seven') // 7
word('eight') // 8
word('nine') // 9
