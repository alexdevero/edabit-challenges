function censor(str) {
	return str.split(' ').map(word => word.length > 4 ? '*'.repeat(word.length) : word).join(' ')
}

censor("The code is fourty") // "The code is ******", "Example #1"
censor("Two plus three is five") // "Two plus ***** is five", "Example #2"
censor("aaaa aaaaa 1234 12345") // "aaaa ***** 1234 *****", "Example #3"
censor("abcdefghijklmnop") // "****************"
censor("a") // "a"
