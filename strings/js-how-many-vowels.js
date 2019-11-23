function countVowels(str) {
	return (str.match(/[aeiou]/ig)).length
}

countVowels('Celebration') // 5)
countVowels('Palm') // 1)
countVowels('Prediction') // 4)
countVowels('Suite') // 3)
countVowels('Quote') // 3)
countVowels('Portrait') // 3)
countVowels('Steam') // 2)
countVowels('Tape') // 2)
countVowels('Nightmare') // 3)
countVowels('Convention') // 4)
