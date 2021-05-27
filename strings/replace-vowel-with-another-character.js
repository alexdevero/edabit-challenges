function replaceVowel(word) {
	const vowels = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5}

	return [...word].map(i => i in vowels ? vowels[i] : i).join('')
}

replaceVowel("karachi") // "k1r1ch3"
replaceVowel("dang") // "d1ng"
replaceVowel("aen") // "12n"
replaceVowel("chembur") // "ch2mb5r"
replaceVowel("khandbari") // "kh1ndb1r3"
replaceVowel("thamel") // "th1m2l"