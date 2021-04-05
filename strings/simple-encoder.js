function simpleEncoder(str) {
	return str.toLowerCase()
		.split('')
		.map((char, i, arr) => arr.indexOf(char) !== arr.lastIndexOf(char) && i < str.length ? ']' : '[')
		.join('')
}

simpleEncoder("Mubashir") // "[[[[[[[["
simpleEncoder("Matt") // "[[]]"
simpleEncoder("Mu ba sh ir Ha ss an") // "[[][]]]]][[]]]]]]]]["
simpleEncoder("HelEn") // "[][]["
simpleEncoder("Air  force") // "[[]]][[][["
simpleEncoder("Pakistan") // "[][[[[]["
simpleEncoder("eD  aBiT") // "[[]][[[["
simpleEncoder("Success") // "][]][]]"
simpleEncoder("iiiiii") // "]]]]]]"
