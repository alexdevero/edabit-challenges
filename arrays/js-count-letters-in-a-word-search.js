function letterCounter(arr, letter) {
	return arr.flat().filter(char => char === letter).length
}

letterCounter([
	['D', 'E', 'Y', 'H', 'A', 'D'],
	['C', 'B', 'Z', 'Y', 'J', 'K'],
	['D', 'B', 'C', 'A', 'M', 'N'],
	['F', 'G', 'G', 'R', 'S', 'R'],
	['V', 'X', 'H', 'A', 'S', 'S']
], 'D') // 3

letterCounter([
	['D', 'E', 'Y', 'H', 'A', 'D'],
	['C', 'B', 'Z', 'Y', 'J', 'K'],
	['D', 'B', 'C', 'A', 'M', 'N'],
	['F', 'G', 'G', 'R', 'S', 'R'],
	['V', 'X', 'H', 'A', 'S', 'S']
], 'H') // 2

letterCounter([
	['D', 'E', 'Y', 'H', 'A', 'D'],
	['C', 'B', 'Z', 'Y', 'J', 'K'],
	['D', 'B', 'C', 'A', 'M', 'N'],
	['F', 'G', 'G', 'R', 'S', 'R'],
	['V', 'X', 'H', 'A', 'S', 'S']
], 'Z') // 1

letterCounter([
	['D', 'E', 'Y', 'H', 'A', 'D'],
	['C', 'B', 'Z', 'Y', 'J', 'K'],
	['D', 'B', 'C', 'A', 'M', 'N'],
	['F', 'G', 'G', 'R', 'S', 'R'],
	['V', 'X', 'H', 'A', 'S', 'S']
], 'R') // 2

letterCounter([
	['D', 'E', 'Y', 'H', 'A', 'D'],
	['C', 'B', 'Z', 'Y', 'J', 'K'],
	['D', 'B', 'C', 'A', 'M', 'N'],
	['F', 'G', 'G', 'R', 'S', 'R'],
	['V', 'X', 'H', 'A', 'S', 'S']
], 'X') // 1

letterCounter([
	['D', 'E', 'Y', 'H', 'A', 'D'],
	['C', 'B', 'Z', 'Y', 'J', 'K'],
	['D', 'B', 'C', 'A', 'M', 'N'],
	['F', 'G', 'G', 'R', 'S', 'R'],
	['V', 'X', 'H', 'A', 'S', 'S']
], 'S') // 3
