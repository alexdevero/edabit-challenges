function uniqueInOrder(sequence) {
	return typeof sequence === 'string' ? sequence.split('').filter((char, idx, arr) => idx > 0 ? arr[idx - 1] !== char ? char : '' : 'char') : sequence.filter((char, idx, arr) => idx > 0 ? arr[idx - 1] !== char ? char : '' : char)
}

uniqueInOrder("AAAABBBCCDAABBB") // ["A", "B", "C", "D", "A", "B"]
uniqueInOrder("ABBCcAD") // ["A", "B", "C", "c", "A", "D"]
uniqueInOrder([1, 2, 2, 3, 3]) // [1, 2, 3]
uniqueInOrder("12333355555522211133") // ["1", "2", "3", "5", "2", "1", "3"]
uniqueInOrder("uuUfffFgGggYtt76%5$$$") // ["u", "U", "f", "F", "g", "G", "g", "Y", "t", "7", "6", "%", "5", "$"]
uniqueInOrder(["1", "2", "2", "3", "3"]) // ["1", "2", "3"]
uniqueInOrder([3, 7, 3, 8, 4]) // [3, 7, 3, 8, 4]
uniqueInOrder("ABC") // ["A", "B", "C"]
uniqueInOrder("$$$%%%$$$%%%") // ["$", "%", "$", "%"]
uniqueInOrder([1, 1, 1, "A", "B", "B"]) // [1, "A", "B"]
