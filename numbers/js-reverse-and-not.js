function reverseAndNot(i) {
	return parseInt(('' + i).split('').reverse().join('') + i)
}

reverseAndNot(123) // 321123
reverseAndNot(123456789) // 987654321123456789
