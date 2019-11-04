function charCount(myChar, str) {
	return str.split('').filter((y) => myChar === y ? 1 : 0).length
}

charCount('a', 'edabit') // 1
charCount('b', 'big fat bubble') // 4
charCount('c', 'Chamber of secrets') // 1
charCount('f', 'frank and his friends have offered five foxes for sale') // 7
charCount('x', 'edabit') // 0
charCount('a', 'Adam and Eve bit the apple and found a snake') // 6
charCount('s', 'sssssssssssssssssssssssss') // 25
charCount('7', '10795426697') // 2
