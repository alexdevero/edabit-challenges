function findEvenNums(num) {
	return Array.from(new Array(num), (x, i) => i).filter(x => x % 2 === 0 ? 1 : 0)
}

findEvenNums(4) // [2, 4]
findEvenNums(8) // [2, 4 ,6, 8]
findEvenNums(2) // [2]
findEvenNums(1) // []
findEvenNums(9) // [2, 4 ,6, 8]
findEvenNums(11) // [2, 4 ,6, 8, 10]