function lastItem(input) {
	return input[input.length - 1]
}

lastItem([0, 4, 19, 34, 50, -9, 2]) // 2
lastItem(["Hello", "There", "JavaScript", "User"]) // "User"
lastItem([]) // undefined
lastItem([true, false, false, true]) // true
lastItem([(5, 0), (0, 5, 6, 7), (3, 5, 67, 7), (0, -9, 3, 45, 5)]) // (0, -9, 3, 45, 5)
lastItem("JavaScript is a great programming langauge."), "."
lastItem(["H", "E", "L", "L", "O"]) // "O"
lastItem("The quick brown fox jumped over the lazy dog") // "g"
lastItem("") // undefined
