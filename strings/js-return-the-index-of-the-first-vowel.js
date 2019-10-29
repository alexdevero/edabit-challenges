function firstVowel(str) {
	return str.search(/[aeiou]/i)
}

firstVowel('hello') // 1
firstVowel('apple') // 0
firstVowel('string') // 3
firstVowel('STRAWBERRY') // 3
firstVowel('MELON') // 1
firstVowel('piNNEaPLE') // 1
