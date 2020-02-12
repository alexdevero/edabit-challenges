function wordLengths(arr) {
	return arr.map(item => item.length)
}

wordLengths(["hello", "world"]) // [5, 5], "Example #1"
wordLengths(["Halloween", "Thanksgiving", "Christmas"]) // [9, 12, 9], "Example #2"
wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) // [3, 5, 9, 4, 2, 3, 8], "Example #3"
wordLengths(["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"]) // [7, 5, 3, 3, 6, 2, 4]
wordLengths(["Programming", "is", "fun"]) // [11, 2, 3]
