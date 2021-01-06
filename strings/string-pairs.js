function stringPairs(str) {
	return (str + '*').match(/../g) || []
}

stringPairs("abcdef") // ["ab", "cd", "ef"]
stringPairs("abcdefg") // ["ab", "cd", "ef", "g*"]
stringPairs("") // []
stringPairs("pak") // ["pa", "k*"]
stringPairs("mubashir") // ["mu", "ba", "sh", "ir"]
stringPairs("edabit") // ["ed", "ab", "it"]
stringPairs("airforces") // ["ai", "rf", "or", "ce", "s*"]
